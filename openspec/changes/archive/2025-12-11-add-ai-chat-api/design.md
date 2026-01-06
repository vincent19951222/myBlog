# Design: SSR Mode with AI Chat API

## Context
当前网站使用 Next.js 静态导出 (`output: 'export'`)，无法在客户端安全调用 AI API（API Key 会暴露）。需要引入服务端 API 路由来代理请求。

**注意**: 由于国内部署需求，使用 **Coze API** (api.coze.cn) 替代 Gemini API。

**Stakeholders**:
- 网站访客：需要能与 AI 助手对话
- 开发者：需要简单的部署和维护流程
- 服务器：需要轻量级运行

**已确认的基础设施**:
- VPS 内存：≥1GB ✅
- 宝塔面板：支持 PM2 管理器 ✅
- 部署模式：同意迁移至 SSR ✅

## Goals / Non-Goals

**Goals**:
- 实现真正可用的 AI 问答功能
- 保持项目轻量、易于维护
- 最小化部署复杂度
- 保护 API 密钥安全

**Non-Goals**:
- 不实现用户认证（访客即可使用）
- 不实现对话历史持久化
- 不引入额外数据库
- 不实现复杂的 API 网关

## Decisions

### Decision 1: 使用 Next.js API Routes 而非独立后端

**选择**: Next.js API Routes (App Router)

**理由**:
- 单一项目，无需维护多个服务
- 内置于 Next.js，无额外依赖
- 部署更简单（一个 PM2 进程）
- 开发体验一致

**替代方案**:
| 方案 | 优点 | 缺点 |
|------|------|------|
| Express/Hono 独立后端 | 更轻量 | 需维护两个项目 |
| Serverless (Vercel) | 无服务器 | 引入第三方依赖 |
| Cloudflare Workers | 边缘部署 | 需要迁移部署平台 |

### Decision 2: 使用 PM2 进程管理

**选择**: PM2 + Nginx 反向代理

**理由**:
- 宝塔面板原生支持 PM2 管理器
- 自动重启、日志管理
- 集群模式可选
- 与现有 Nginx 配置兼容

### Decision 3: 简化的 API 设计

**选择**: 单一 POST `/api/chat` 端点，后端调用 Coze API

```typescript
// 内部 API Request
POST /api/chat
{
  "message": "用户消息",
  "history": [{ "role": "user", "text": "..." }, ...]
}

// Coze API Request (服务端发出)
POST https://api.coze.cn/v3/chat
Headers: Authorization: Bearer {COZE_API_KEY}
{
  "bot_id": "{COZE_BOT_ID}",
  "user_id": "anonymous_visitor",
  "stream": false,
  "additional_messages": [...]
}

// Response
{
  "response": "AI 响应文本",
  "error": null
}

**理由**:
- 无状态设计，服务端不存储对话
- 前端管理对话历史
- 简单可扩展

## Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│    Browser      │────▶│     Nginx       │────▶│   Next.js       │
│  (React 前端)   │     │  (Port 80/443)  │     │  (Port 3000)    │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                                        │
                                                        ▼
                                                ┌─────────────────┐
                                                │    Coze API     │
                                                │ (api.coze.cn)   │
                                                └─────────────────┘
```

**请求流程**:
1. 用户在 `/me` 页面输入消息
2. 前端 POST 到 `/api/chat`
3. API Route 调用 Gemini API
4. 返回响应给前端
5. 前端展示 AI 回复

## Risks / Trade-offs

| 风险 | 影响 | 缓解措施 |
|------|------|----------|
| API 调用成本增加 | 中 | 实现客户端节流、错误时不重试 |
| 服务器内存占用 | 低 | Next.js SSR ~100-200MB，1GB VPS 足够 |
| 部署复杂度提升 | 中 | 提供详细文档和自动化脚本 |
| API 密钥泄露 | 高 | 仅服务端访问，不在前端暴露 |
| Coze API 限制 | 低 | 使用非流式模式，简化处理 |

## Migration Plan

### Phase 1: 本地开发 (无影响)
- 代码更改后直接 `npm run dev` 测试

### Phase 2: VPS 首次配置
1. 安装 PM2 管理器 (宝塔面板)
2. 配置 Nginx 反向代理
3. 创建 `.env.local` 环境变量
4. 首次手动部署测试

### Phase 3: 自动化部署
- GitHub Actions 自动拉取、构建、重启 PM2

### Rollback
- 恢复 `output: 'export'` 配置
- 恢复原 deploy.yml
- 静态文件直接托管

## Open Questions

1. **速率限制**: 是否需要限制每个 IP 的请求频率？
   - 建议：初期不实现，观察使用情况后决定

2. **对话上下文长度**: 传递多少历史消息给 API？
   - 建议：最近 10 条消息，避免 token 超限

3. **错误提示**: API 失败时如何提示用户？
   - 建议：友好的中文提示 + 重试按钮
