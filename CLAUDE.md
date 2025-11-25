# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

这是一个具有复古像素游戏风格的React个人博客/作品集网站，集成了Google Gemini AI聊天功能。项目使用TypeScript开发，采用Vite作为构建工具，通过Tailwind CSS实现响应式设计。

## 技术栈

- **React 19.2.0** - 前端框架
- **TypeScript** - 类型安全开发
- **Vite 6.2.0** - 构建工具和开发服务器
- **Tailwind CSS** - 样式框架（通过CDN引入）
- **Google Gemini AI** - AI聊天功能
- **Lucide React** - 图标库

## 开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 环境配置

项目需要配置 Google Gemini API 密钥：

1. 创建 `.env.local` 文件
2. 添加 `GEMINI_API_KEY=你的API密钥`

Vite配置会自动将环境变量注入到应用中（见 `vite.config.ts:14-15`）。

## 项目架构

### 单文件架构

整个应用集中在一个文件 `index.tsx` 中，包含：

- **组件系统**：NavBar、Hero、Blog、Lab、AI Chat、Character、Footer
- **状态管理**：使用React useState管理主题、导航、聊天状态等
- **AI集成**：GoogleGenAI客户端用于智能对话
- **Markdown渲染**：内置Markdown解析器支持博客内容

### 核心数据结构

- **BLOG_POSTS**: 博客文章数据，包含标题、摘要、等级、XP值等游戏化元素
- **LAB_PROJECTS**: 实验室项目展示数据
- **USER_CONTEXT**: AI助手的角色设定和上下文信息

### 样式系统

- 使用Tailwind CSS类名进行样式设计
- 自定义像素字体：VT323 和 Press Start 2P
- 游戏化UI元素：XP系统、等级显示、复古像素风格
- 支持明暗主题切换

## 部署指南

项目已配置宝塔面板部署流程，详见 `DEPLOY.md`：

1. 构建项目：`npm run build`
2. 上传 `dist` 目录到服务器 `/www/wwwroot/`
3. 配置Nginx SPA路由：`try_files $uri $uri/ /index.html`
4. 可选：配置HTTPS和性能优化

## 开发注意事项

1. **API密钥安全**：确保 `.env.local` 文件在 `.gitignore` 中
2. **SPA路由**：部署时需要配置服务器支持客户端路由
3. **静态资源**：图片使用 placeholder.co 服务，生产环境建议替换
4. **性能优化**：考虑实现代码分割和懒加载
5. **TypeScript路径别名**：已配置 `@` 指向项目根目录

## 主要功能特性

- 🎮 复古像素游戏风格界面
- 📝 完整的博客系统（支持Markdown）
- 🤖 集成Google Gemini AI聊天
- 🌓 明暗主题切换
- 📱 完全响应式设计
- 🏆 游戏化元素（XP、等级系统）