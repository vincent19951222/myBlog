<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# 李面条的实验室

一个充满像素、代码和复古梦想的数字角落。

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61dafb)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06b6d4)](https://tailwindcss.com/)

## 🎮 项目特色

- **复古像素风格** - 致敬经典游戏的视觉设计
- **双语支持** - 中文内容 + 英文代码注释
- **游戏化体验** - 等级、经验值、任务系统
- **AI 集成** - Google Gemini API 智能功能
- **响应式设计** - 完美适配各种设备
- **静态生成** - 快速加载，SEO 友好

## 🚀 快速开始

### 环境要求

- Node.js 18+
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 配置环境变量

复制 `.env.local.example` 为 `.env.local` 并填写你的配置：

```bash
cp .env.local.example .env.local
```

编辑 `.env.local`：

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 📦 构建和部署

### 构建项目

```bash
npm run build
```

### 静态导出

项目配置为静态导出模式，构建后会生成 `out/` 目录，可直接部署到静态托管服务。

### 部署平台

- **Vercel** - 推荐，零配置部署
- **Netlify** - 拖拽式部署
- **GitHub Pages** - 免费托管
- **Nginx** - 自建服务器

## 🧪 开发指南

### 项目结构

```
app/                    # Next.js App Router
├── api/               # API 路由
├── blog/              # 博客页面
├── components/        # React 组件
│   ├── Common.tsx         # 通用组件
│   ├── HomeClient.tsx     # 首页客户端组件
│   ├── LayoutClient.tsx   # 布局客户端组件
│   ├── MDXComponents.tsx  # MDX 渲染组件
│   ├── Modal.tsx          # 模态框组件
│   ├── PixelButton.tsx    # 像素风格按钮
│   └── ThemeContext.tsx   # 主题上下文
├── lab/               # 实验室页面
├── lib/               # 工具函数和配置
│   ├── __tests__/         # 测试文件
│   ├── data.ts            # 数据定义
│   ├── env.ts             # 环境变量
│   ├── error-handler.ts   # 错误处理
│   ├── fonts.ts           # 字体配置
│   ├── logger.ts          # 日志工具
│   └── posts.ts           # 博文处理
├── me/                # 个人介绍页面
├── globals.css        # 全局样式
├── layout.tsx         # 根布局
└── page.tsx           # 首页
content/               # 博客内容 (MDX)
docs/                  # 项目文档
public/                # 静态资源
```

### 代码规范

项目使用严格的代码规范：

- **TypeScript 严格模式** - 类型安全
- **ESLint** - 代码质量检查
- **Prettier** - 代码格式化
- **Husky** - Git 提交钩子

### 开发命令

```bash
# 开发
npm run dev

# 测试
npm run test
npm run test:watch
npm run test:coverage

# 代码检查
npm run lint
npm run type-check
npm run format

# 安全审计
npm run audit

# 完整 CI 流程
npm run ci
```

## 🎨 设计系统

### 字体

- **中文标题**: ZCOOL KuaiLe
- **中文内容**: Noto Sans SC
- **英文像素**: VT323 / Press Start 2P

### 颜色

- **主色调**: 复古游戏配色
- **深色模式**: 护眼深色主题
- **强调色**: 黄色、绿色、红色

### 组件

- **PixelButton** - 像素风格交互按钮
- **Modal** - 像素风格模态框
- **MDXComponents** - MDX 内容渲染组件
- **HomeClient** - 首页动态效果
- **LayoutClient** - 全局布局和导航

## 🔧 技术栈

### 核心技术

- [Next.js 16](https://nextjs.org/) - React 框架
- [React 19](https://react.dev/) - UI 库
- [TypeScript 5.8](https://www.typescriptlang.org/) - 类型系统
- [Tailwind CSS 4](https://tailwindcss.com/) - 样式框架

### 工具库

- [Framer Motion](https://www.framer.com/motion/) - 动画库
- [Lucide React](https://lucide.dev/) - 图标库
- [Google Gemini](https://ai.google.dev/) - AI API
- [Zod](https://zod.dev/) - 数据验证

### 开发工具

- [ESLint](https://eslint.org/) - 代码检查
- [Prettier](https://prettier.io/) - 代码格式化
- [Jest](https://jestjs.io/) - 测试框架
- [Testing Library](https://testing-library.com/) - 测试工具

## 📚 文档

- [架构设计](./docs/ARCHITECTURE.md) - 项目架构详细说明
- [AI 编码指南](./CLAUDE.md) - AI 助手开发规范
- [Agents 规范](./AGENTS.md) - 多 Agent 协作规范

## 🤝 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 📝 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- 复古游戏社区提供的灵感
- Next.js 团队提供的优秀框架
- 开源社区的所有贡献者

## 📞 联系方式

- **项目地址**: [GitHub Repository](https://github.com/vincent19951222/myBlog)
- **问题反馈**: [Issues](https://github.com/vincent19951222/myBlog/issues)
- **功能建议**: [Discussions](https://github.com/vincent19951222/myBlog/discussions)

---

**⭐ 如果这个项目对你有帮助，请给个星标支持一下！**