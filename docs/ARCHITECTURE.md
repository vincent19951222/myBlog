# 项目架构文档

## 概述

这是一个基于 Next.js App Router 的个人数字实验室网站，采用复古像素游戏风格设计，主要面向中文用户。

## 技术栈

- **前端框架**: Next.js 16 (App Router) + React 19
- **语言**: TypeScript 5.8 (严格模式)
- **样式**: Tailwind CSS + 自定义复古像素样式
- **构建**: Next.js 原生构建系统
- **动画**: Framer Motion
- **图标**: Lucide React
- **AI**: Google Gemini API
- **字体**: Next.js Font Optimization

## 项目结构

```
app/
├── (routes)/               # 路由组
│   ├── page.tsx           # 首页
│   ├── explore/           # 探索/博客页面
│   │   ├── page.tsx
│   │   └── [id]/
│   │       └── page.tsx
│   ├── lab/               # 实验室/项目页面
│   │   └── page.tsx
│   └── me/                # 个人/关于页面
├── components/            # 组件
│   ├── ui/               # 基础UI组件
│   ├── features/         # 业务功能组件
│   └── layouts/          # 布局组件
├── lib/                   # 工具库
│   ├── utils/            # 工具函数
│   ├── types/            # 类型定义
│   ├── hooks/            # 自定义Hooks
│   └── data/             # 数据管理
├── styles/               # 样式文件
└── __tests__/            # 测试文件
```

## 核心模块说明

### 1. 路由结构

- **首页**: `/` - 展示时间线、探索入口、实验室入口
- **探索页**: `/explore` - 博客文章列表
- **文章详情**: `/explore/[id]` - 具体博客文章
- **实验室**: `/lab` - 项目展示
- **关于我**: `/me` - 个人信息页面

### 2. 组件架构

#### 基础组件 (app/components/ui/)
- `Button.tsx` - 按钮组件
- `Card.tsx` - 卡片组件
- `Typography.tsx` - 文本组件

#### 功能组件 (app/components/features/)
- `QuestCard.tsx` - 游戏化卡片组件
- `Timeline.tsx` - 时间线组件
- `MarkdownRenderer.tsx` - Markdown渲染组件

#### 布局组件 (app/components/layouts/)
- `NavBar.tsx` - 导航栏
- `Footer.tsx` - 页脚
- `ThemeProvider.tsx` - 主题提供者

### 3. 工具库 (app/lib/)

#### 日志系统 (logger.ts)
```typescript
// 使用示例
import { logger, createLogger } from '@/app/lib/logger';

const componentLogger = createLogger('MyComponent');
componentLogger.info('组件初始化完成');
componentLogger.error('发生错误', error);
```

#### 错误处理 (error-handler.ts)
```typescript
// 使用示例
import { errorHandler, useErrorHandler } from '@/app/lib/error-handler';

const { handleError, getUserFriendlyMessage } = useErrorHandler();
const appError = handleError(originalError, '加载数据失败');
const userMessage = getUserFriendlyMessage(appError);
```

#### 环境变量 (env.ts)
```typescript
// 使用示例
import { getServerEnv } from '@/app/lib/env';

const { GEMINI_API_KEY } = getServerEnv();
```

### 4. 数据管理

#### 静态数据 (app/lib/data/)
- `timeline.ts` - 时间线事件数据
- `blog.ts` - 博客文章数据
- `projects.ts` - 项目数据

#### 数据类型 (app/lib/types/)
- `blog.ts` - 博客相关类型
- `project.ts` - 项目相关类型
- `timeline.ts` - 时间线相关类型

## 开发规范

### 1. 代码风格

- 使用 ESLint + Prettier 进行代码格式化
- TypeScript 严格模式已启用
- 统一使用单引号、分号、2空格缩进

### 2. 组件开发

```typescript
// 组件文件结构示例
import React from 'react';
import { cn } from '@/app/lib/utils';

interface ComponentProps {
  // 明确的props类型定义
}

export function ComponentName({ prop1, prop2 }: ComponentProps) {
  return (
    // 组件实现
  );
}

// 默认导出用于动态导入
export default ComponentName;
```

### 3. 错误处理

- 所有API调用必须使用错误处理包装
- 用户界面显示友好的错误消息
- 开发环境记录详细错误信息

### 4. 性能优化

- 使用 Next.js Font Optimization 优化字体加载
- 图片使用适当的格式和大小
- 组件级别的代码分割
- 静态导出优化

## 部署配置

### 静态导出

项目配置为静态导出模式：

```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
```

### 环境变量

```bash
# .env.local
GEMINI_API_KEY=your_gemini_api_key_here
NODE_ENV=development
```

## 开发命令

```bash
# 开发服务器
npm run dev

# 构建
npm run build

# 测试
npm run test
npm run test:watch
npm run test:coverage

# 代码质量检查
npm run lint
npm run lint:fix
npm run format
npm run type-check

# 安全审计
npm run audit
npm run audit:fix

# CI 流程
npm run ci
```

## 最佳实践

### 1. 状态管理

- 使用 React Context 管理全局状态（主题、用户状态）
- 组件内部状态使用 useState
- 复杂状态考虑使用 useReducer

### 2. 数据获取

- 静态数据在构建时获取
- 客户端数据获取使用 SWR 或 React Query
- 错误边界处理数据获取失败

### 3. 安全性

- API 密钥只在服务端使用
- 用户输入进行验证和清理
- 使用安全头部配置

### 4. 可访问性

- 使用语义化 HTML 标签
- 提供适当的 ARIA 属性
- 键盘导航支持

## 监控和维护

### 1. 性能监控

- 使用 Next.js Analytics
- 监控 Core Web Vitals
- 定期性能审计

### 2. 错误监控

- 客户端错误收集
- 服务端错误日志
- 用户行为分析

### 3. 依赖管理

- 定期更新依赖包
- 安全漏洞扫描
- 版本控制最佳实践

## 扩展计划

### 1. 功能扩展

- 评论系统
- 搜索功能
- RSS 订阅
- 多语言支持

### 2. 技术升级

- 升级到 Next.js 最新版本
- 考虑使用 Server Components
- 性能优化（图片、字体、代码分割）

### 3. 基础设施

- CI/CD 自动化部署
- 监控告警系统
- 备份和恢复策略