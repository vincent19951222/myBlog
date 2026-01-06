<!-- OPENSPEC:START -->
# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:
- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:
- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

# AGENTS.md

## 项目初始化 (Project Initialization)

**最后更新**: 2025-12-11
**状态**: ✅ 已初始化 | 🚀 开发服务器运行中 (端口 3000)

### 初始化步骤

1. **安装依赖**
   ```bash
   npm install --legacy-peer-deps
   ```
   
   > **注意**: 由于 React 19 与 `@testing-library/react@14` 存在 peer dependency 冲突，需要使用 `--legacy-peer-deps` 标志。

2. **配置环境变量**
   ```bash
   cp .env.local.example .env.local
   ```
   
   编辑 `.env.local` 并添加你的 Coze API 配置：
   ```env
   COZE_API_KEY=your_coze_api_key_here
   COZE_BOT_ID=your_coze_bot_id_here
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```
   
   访问 http://localhost:3000 查看应用。
   
   > **当前状态**: 开发服务器已在端口 3000 运行 (进程 ID: 18632)
   > 
   > 如需重启服务器:
   > ```bash
   > # 终止现有进程
   > kill $(lsof -ti:3000)
   > # 重新启动
   > npm run dev
   > ```

### 依赖管理

**已知问题**:
- React 19 与 `@testing-library/react@14` 存在 peer dependency 冲突
- 解决方案: 使用 `--legacy-peer-deps` 进行安装

**安全审计**:
- 当前存在 2 个漏洞 (1 high, 1 critical)
- 运行 `npm audit fix` 可尝试自动修复

### 开发工作流

1. **代码检查**: `npm run lint` 或 `npm run lint:fix`
2. **类型检查**: `npm run type-check`
3. **代码格式化**: `npm run format` 或 `npm run format:check`
4. **运行测试**: `npm run test` 或 `npm run test:watch`
5. **完整 CI**: `npm run ci` (类型检查 + lint + 测试 + 构建)

---

## 生产部署 (SSR 模式)

**更新日期**: 2025-12-11

项目已从静态导出迁移至 SSR 模式，支持 AI 聊天 API 功能。

### 部署架构

```
用户请求 → Nginx (80/443) → PM2/Next.js (3000) → Gemini API
```

### 宝塔面板部署步骤

1. **安装 PM2 管理器**: 软件商店 → 搜索 PM2管理器 → 安装
2. **首次部署**: SSH 到服务器执行 `git clone` + `npm install` + `pm2 start`
3. **配置反向代理**: 网站设置 → 反向代理 → 目标URL: `http://127.0.0.1:3000`
4. **自动部署**: GitHub Actions 自动 git pull + build + pm2 restart

### API 端点

| 端点 | 方法 | 说明 |
|------|------|------|
| `/api/chat` | POST | AI 聊天 API |



---

## AI 助手指南 (AI Assistant Guidelines)

本文件为 AI 助手（如 Claude、Cursor、GitHub Copilot）提供项目上下文和开发指南。

### 项目概述

这是一个基于 **Next.js 16** 和 **React 19** 的个人数字实验室网站，采用**复古像素游戏风格**设计，主要面向中文用户。

**核心特征**:
- 🎮 **复古游戏美学**: 像素字体、复古阴影、游戏化 UI
- 🌏 **双语开发**: 中文内容 + 英文代码注释
- 📝 **个人作品集**: 时间线、博客文章、项目展示
- 🤖 **AI 集成**: Google Gemini API 智能功能

### 技术栈

- **前端框架**: Next.js 16 (App Router) + React 19
- **语言**: TypeScript 5.8
- **样式**: Tailwind CSS 4 + 自定义复古像素样式
- **动画**: Framer Motion
- **图标**: Lucide React
- **AI**: Google Gemini API

### 项目结构

```
app/                    # Next.js App Router 目录
├── page.tsx           # 首页 (时间线 + 探索 + 实验室)
├── layout.tsx         # 根布局 (主题 + 导航 + 页脚)
├── globals.css        # 全局样式 (复古像素设计)
├── components/        # React 组件
│   ├── Common.tsx     # 共享组件 (QuestCard)
│   ├── HomeClient.tsx # 首页专用组件
│   ├── LayoutClient.tsx # 布局组件 (NavBar, Footer)
│   └── ThemeContext.tsx # 主题提供者
├── lib/               # 工具函数和数据
│   └── data.ts        # 静态数据 (时间线、博客、项目)
├── explore/           # 探索/博客页面
│   ├── page.tsx       # 探索列表页
│   └── [id]/          # 动态路由：博客文章详情
│       └── page.tsx
├── lab/               # 实验室/项目页面
│   └── page.tsx       # 实验室列表页
└── me/                # 个人/关于页面
```

### 开发注意事项

1. **路径别名**: `@` 指向项目根目录
2. **主题切换**: 使用 `ThemeContext` 管理深色/浅色主题
3. **响应式设计**: 移动端优先，网格布局自适应
4. **中文优先**: 所有用户界面文本使用简体中文
5. **游戏化元素**: 使用等级(Lv.)、经验值(XP)、任务(Quest)等游戏术语
6. **代码注释**: 使用英文编写代码注释

### 设计系统

- **字体**: 
  - ZCOOL KuaiLe (中文标题)
  - Noto Sans SC (中文内容)
  - VT323 / Press Start 2P (英文像素)
- **颜色**: 复古游戏配色，支持深色/浅色主题
- **组件**: QuestCard、带经验值的游戏化卡片设计
- **动画**: 浮动、脉冲、淡入效果

### 数据组织

所有内容数据集中存储在 `app/lib/data.ts`:
- `TIMELINE_EVENTS`: 时间线事件 (UPDATE/LAB/ARTICLE/LIFE)
- `BLOG_POSTS`: 博客文章 (带等级、经验值系统)
- `PROJECTS`: 实验室项目 (带标签和技术栈)
- `USER_CONTEXT`: AI 助手上下文信息

### 代码规范

- **TypeScript 严格模式**: 启用所有严格类型检查
- **ESLint**: 使用 Next.js 推荐配置 + Prettier
- **命名约定**:
  - 组件: PascalCase (例: `QuestCard`)
  - 函数: camelCase (例: `formatDate`)
  - 常量: UPPER_SNAKE_CASE (例: `TIMELINE_EVENTS`)
  - 文件: kebab-case 或 PascalCase (例: `home-client.tsx` 或 `HomeClient.tsx`)