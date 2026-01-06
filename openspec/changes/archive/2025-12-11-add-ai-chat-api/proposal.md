# Change: Add AI Chat API for SSR Mode

## Why
当前个人网站的 AI 聊天功能是模拟的，无法真正与 Gemini API 交互。要实现真正的 AI 问答功能，需要后端 API 来安全地处理 API 密钥和请求代理。将网站从静态导出模式迁移到 SSR 模式，利用 Next.js API Routes 实现轻量级后端。

## What Changes
- **BREAKING**: 移除 `output: 'export'` 静态导出配置，改为 SSR 模式
- 新增 `/api/chat` API 路由处理 AI 对话请求
- 更新 `me/page.tsx` 页面调用真实 API
- 修改 GitHub Actions 部署流程，使用 PM2 + Nginx 反向代理
- 更新文档 (CLAUDE.md, AGENTS.md)

## Impact
- **Affected specs**: 新增 `ai-chat` 能力
- **Affected code**:
  - `next.config.js` - 配置变更
  - `app/api/chat/route.ts` - 新增 API 路由
  - `app/me/page.tsx` - 前端调用逻辑
  - `.github/workflows/deploy.yml` - 部署流程
- **Infrastructure**: 
  - VPS 需要安装 Node.js、PM2
  - Nginx 需配置反向代理到 `localhost:3000`
  - 环境变量 `GEMINI_API_KEY` 需在服务器配置

## Migration
1. 本地开发：无影响，`npm run dev` 正常使用
2. 生产部署：需按照新的部署文档配置宝塔面板
3. 回滚方案：恢复 `output: 'export'` 即可回退到静态模式

---

## Status: ✅ APPROVED

**审批日期**: 2025-12-11

**用户确认**:
- ✅ VPS 配置：内存 ≥1GB，满足 SSR 运行要求
- ✅ 宝塔面板：可以安装 PM2 管理器
- ✅ 部署方案：同意从静态部署改为 SSR 部署

**下一步**: 开始实施
