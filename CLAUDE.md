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

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

这是一个基于 Next.js 和 Vite 的个人数字实验室网站，采用复古像素游戏风格设计，主要面向中文用户。项目使用 React 19、TypeScript，并集成了 Gemini AI API。

**核心特征：**
- 双语开发：中文内容 + 英文代码注释
- 复古游戏美学：像素字体、复古阴影、游戏化 UI
- 个人作品集：时间线、博客文章、项目展示
- AI 集成：Gemini API 用于智能功能

## 开发命令

```bash
# 安装依赖
npm install

# 本地开发 (端口 3000)
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 架构设计

### 技术栈
- **前端框架**: Next.js (App Router) + React 19
- **构建工具**: Vite 6.2
- **语言**: TypeScript 5.8
- **样式**: Tailwind CSS (CDN) + 自定义复古像素样式
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

### Next.js 路由结构
- **首页**: `/` → `app/page.tsx`
- **探索页**: `/explore` → `app/explore/page.tsx`
- **博客详情**: `/explore/[id]` → `app/explore/[id]/page.tsx` (动态路由)
- **实验室**: `/lab` → `app/lab/page.tsx`
- **关于我**: `/me` → `app/me/page.tsx` (如果存在)

### 数据组织
所有内容数据集中存储在 `app/lib/data.ts`：
- `TIMELINE_EVENTS`: 时间线事件 (UPDATE/LAB/ARTICLE/LIFE)
- `BLOG_POSTS`: 博客文章 (带等级、经验值系统)
- `PROJECTS`: 实验室项目 (带标签和技术栈)
- `USER_CONTEXT`: AI 助手上下文信息

### 设计系统
- **字体**: ZCOOL KuaiLe (中文标题) + Noto Sans SC (中文内容) + VT323/Press Start 2P (英文像素)
- **颜色**: 复古游戏配色，支持深色/浅色主题
- **组件**: QuestCard、带经验值的游戏化卡片设计
- **动画**: 浮动、脉冲、淡入效果

### API 配置
Gemini API 通过环境变量配置：
```
# .env.local
GEMINI_API_KEY=your_gemini_api_key_here
```

API 密钥在 Vite 配置中注入，可在客户端通过 `process.env.GEMINI_API_KEY` 访问。

### 开发注意事项

1. **路径别名**: `@` 指向项目根目录，已在 Vite 配置中设置
2. **主题切换**: 使用 ThemeContext 管理深色/浅色主题
3. **响应式设计**: 移动端优先，网格布局自适应
4. **中文优先**: 所有用户界面文本使用简体中文
5. **游戏化元素**: 使用等级(Lv.)、经验值(XP)、任务(Quest)等游戏术语