# Implementation Tasks: Add AI Chat API

## 1. Configuration Changes
- [x] 1.1 修改 `next.config.js`，移除 `output: 'export'` 配置
- [x] 1.2 确保其他配置（trailingSlash, images 等）兼容 SSR 模式

## 2. API Implementation
- [x] 2.1 创建 `app/api/chat/route.ts` API 路由
- [x] 2.2 实现 Coze API 调用逻辑 (替代 Gemini API)
- [x] 2.3 添加请求验证和错误处理
- [ ] 2.4 实现速率限制（可选，防止滥用）— 按 design.md 建议初期不实现

## 3. Frontend Integration
- [x] 3.1 更新 `app/me/page.tsx`，调用 `/api/chat` 接口
- [x] 3.2 移除模拟响应逻辑
- [ ] 3.3 添加错误提示和重试机制 — 已有错误提示，重试按钮待后续添加

## 4. Deployment Updates
- [x] 4.1 修改 `.github/workflows/deploy.yml` 部署脚本
- [ ] 4.2 创建 PM2 生态配置文件 `ecosystem.config.js`（可选）— 直接使用 PM2 命令
- [x] 4.3 编写 VPS 初始化脚本或说明文档

## 5. Documentation
- [x] 5.1 更新 `CLAUDE.md` - 添加 SSR 部署说明
- [x] 5.2 更新 `AGENTS.md` - 同步 SSR 部署说明
- [ ] 5.3 更新 `README.md` - 添加新的部署流程 — 待后续更新

## 6. Verification
- [x] 6.1 本地测试 API 路由功能 — TypeScript 类型检查通过
- [ ] 6.2 本地测试前端 AI 聊天功能 — 需配置 GEMINI_API_KEY 后测试
- [ ] 6.3 部署到 VPS 并验证完整功能 — 待 VPS 配置后执行

## Dependencies
- 任务 2 依赖任务 1 完成 ✅
- 任务 3 依赖任务 2 完成 ✅
- 任务 4-6 可并行进行

