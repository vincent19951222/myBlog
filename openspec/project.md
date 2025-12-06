# Project Context

## Purpose
个人数字实验室网站和作品集，采用复古像素游戏风格设计，主要面向中文用户。项目展示个人时间线、博客文章和技术项目，集成 Google Gemini AI API 提供智能功能，打造独特的游戏化用户体验。

## Tech Stack
- **前端框架**: Next.js 16.0.6 (App Router) + React 19.2.0
- **语言**: TypeScript 5.8.2
- **构建工具**: Vite 6.2.0
- **样式**: Tailwind CSS (CDN) + 自定义复古像素样式
- **动画**: Framer Motion 11.18.2
- **图标**: Lucide React 0.554.0
- **AI 集成**: Google Gemini API (@google/genai 1.30.0)
- **特效**: Typewriter Effect 2.21.0
- **字体**: ZCOOL KuaiLe (中文标题) + Noto Sans SC (中文内容) + VT323/Press Start 2P (英文像素)

## Project Conventions

### Code Style
- **双语开发**: 所有用户界面文本使用简体中文，代码注释使用英文
- **命名规范**:
  - 组件使用 PascalCase (如: QuestCard, HomeClient)
  - 变量和函数使用 camelCase
  - 常量使用 UPPER_SNAKE_CASE
- **类型安全**: 全面使用 TypeScript，优先使用类型推断
- **代码组织**: 按功能模块组织，相关文件放在一起

### Architecture Patterns
- **Next.js App Router**: 使用现代 App Router 架构，利用 React Server Components
- **组件化设计**: 组件按职责划分 (Common.tsx, HomeClient.tsx, LayoutClient.tsx)
- **上下文管理**: 使用 ThemeContext 管理深色/浅色主题状态
- **数据集中管理**: 所有内容数据存储在 `app/lib/data.ts`
  - `TIMELINE_EVENTS`: 时间线事件 (UPDATE/LAB/ARTICLE/LIFE)
  - `BLOG_POSTS`: 博客文章 (带等级、经验值系统)
  - `PROJECTS`: 实验室项目 (带标签和技术栈)
  - `USER_CONTEXT`: AI 助手上下文信息
- **游戏化设计**:
  - 使用游戏术语: Quest (任务)、Lv. (等级)、XP (经验值)
  - QuestCard 组件作为核心UI模式
  - 经验值和等级系统贯穿内容展示

### Testing Strategy
- 目前项目未配置测试框架
- 计划添加:
  - Jest + React Testing Library 用于单元测试
  - Playwright 或 Cypress 用于端到端测试
  - 测试覆盖关键组件和AI集成功能

### Git Workflow
- **主分支**: `main` (生产环境)
- **开发分支**: `dev` (开发环境)
- **分支策略**: 功能分支从 dev 创建，完成后合并回 dev
- **提交规范**: 使用 OpenSpec 进行变更管理，遵循规范化的提案流程
- **部署**: 通过 GitHub Actions 自动部署到服务器

## Domain Context
- **复古游戏美学**: 设计理念基于 8-bit/16-bit 复古游戏，使用像素字体、复古阴影、霓虹色调
- **中文优先**: 目标用户主要是中文使用者，所有用户界面必须使用简体中文
- **游戏化系统**: 内容展示采用 RPG 游戏机制，博客文章和项目都有等级(Lv.)和经验值(XP)
- **个人品牌**: 网站作为个人作品集，展示技能、项目和学习历程
- **AI 增强**: 集成 Gemini API 提供智能功能，需要了解 AI 对话上下文管理

## Important Constraints
- **字体版权**: 使用 Google Fonts 提供的免费字体 (ZCOOL KuaiLe, Noto Sans SC, VT323, Press Start 2P)
- **浏览器兼容**: 支持现代浏览器 (Chrome, Firefox, Safari, Edge)，移动端优先
- **性能要求**: 保持轻量级，避免大体积依赖，优化加载速度
- **API 限制**: Gemini API 有调用限制和成本，需要实现适当的缓存和错误处理
- **静态导出**: 配置为静态导出，部署到服务器时需要预处理

## External Dependencies
- **Google Gemini API**: AI 功能的核心服务，需要有效的 API 密钥
  - 文档: https://ai.google.dev/api
  - 认证: 通过环境变量 `GEMINI_API_KEY` 配置
- **Google Fonts**: 字体加载服务
  - ZCOOL KuaiLe: 中文标题字体
  - Noto Sans SC: 中文字体
  - VT323/Press Start 2P: 英文像素字体
- **Tailwind CSS CDN**: 样式框架，通过 CDN 引入
- **AI Studio**: 应用管理和部署平台 (https://ai.studio)
