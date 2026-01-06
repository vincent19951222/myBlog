# ai-chat Specification

## Purpose
TBD - created by archiving change add-ai-chat-api. Update Purpose after archive.
## Requirements
### Requirement: AI Chat API Endpoint
系统必须 (SHALL) 提供 `/api/chat` POST 端点，接收用户消息和对话历史，返回 AI 生成的响应。

#### Scenario: 成功的 AI 对话
- **WHEN** 用户发送有效的消息请求 `{ "message": "你好", "history": [] }`
- **THEN** 系统调用 Gemini API 并返回 `{ "response": "AI回复内容", "error": null }`

#### Scenario: API 密钥未配置
- **WHEN** 服务器未设置 `GEMINI_API_KEY` 环境变量
- **THEN** 返回 500 错误 `{ "response": null, "error": "AI 服务暂时不可用" }`

#### Scenario: Gemini API 调用失败
- **WHEN** Gemini API 返回错误或超时
- **THEN** 返回 500 错误 `{ "response": null, "error": "AI 响应失败，请稍后重试" }`

#### Scenario: 空消息请求
- **WHEN** 用户发送空消息 `{ "message": "", "history": [] }`
- **THEN** 返回 400 错误 `{ "response": null, "error": "消息不能为空" }`

---

### Requirement: AI Chat Frontend Integration
Me 页面必须 (SHALL) 调用 `/api/chat` API 实现真实的 AI 对话功能，替代当前的模拟响应。

#### Scenario: 用户发送消息并收到响应
- **WHEN** 用户在聊天输入框输入消息并点击发送
- **THEN** 前端调用 `/api/chat` API 并展示 AI 响应

#### Scenario: API 调用中显示加载状态
- **WHEN** 正在等待 API 响应
- **THEN** 显示加载动画，禁用发送按钮

#### Scenario: API 调用失败时显示错误
- **WHEN** API 返回错误
- **THEN** 在聊天窗口显示友好的错误提示消息

---

### Requirement: SSR Deployment Configuration
系统必须 (SHALL) 支持 SSR 模式部署，使用 PM2 进程管理和 Nginx 反向代理。

#### Scenario: PM2 启动应用
- **WHEN** 执行 `pm2 start npm --name "blog-website" -- start`
- **THEN** Next.js 应用在端口 3000 启动并保持运行

#### Scenario: Nginx 反向代理
- **WHEN** 用户访问 `https://boluopets.com`
- **THEN** Nginx 将请求代理到 `localhost:3000`

#### Scenario: GitHub Actions 自动部署
- **WHEN** 代码推送到 main 分支
- **THEN** GitHub Actions 自动拉取代码、构建、重启 PM2 进程

