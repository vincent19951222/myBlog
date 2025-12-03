(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BLOG_POSTS",
    ()=>BLOG_POSTS,
    "PROJECTS",
    ()=>PROJECTS,
    "TIMELINE_EVENTS",
    ()=>TIMELINE_EVENTS,
    "USER_CONTEXT",
    ()=>USER_CONTEXT
]);
const USER_CONTEXT = `
  你是一个名为 "李面条" (Li Miantiao) 的开发者的 AI 助手。
  李面条 是一位高级前端工程师，热爱 React, WebGL 和复古游戏。
  - 地点: 中国上海。
  - 技术栈: React, TypeScript, Node.js, Three.js, Python.
  - 当前项目: 在浏览器中构建一个复古风格的操作系统。
  - 兴趣: 像素艺术, 合成器, 徒步。
  - 联系方式: limiantiao@example.com
  
  你的性格乐于助人，略带幽默，偶尔会使用游戏术语（例如“升级了”，“任务完成”）。
  请根据这些信息回答关于 李面条 的问题。
`;
const TIMELINE_EVENTS = [
    {
        date: '2025-08-22',
        tag: 'UPDATE',
        content: '重构了首页逻辑，优化了移动端体验。'
    },
    {
        date: '2025-08-15',
        tag: 'LAB',
        content: '发布了新项目：天气任务 (Weather Quest)。'
    },
    {
        date: '2025-08-01',
        tag: 'ARTICLE',
        content: '发布文章：React Hooks 传说。'
    },
    {
        date: '2025-07-20',
        tag: 'LIFE',
        content: '参加了上海 WebGL 开发者聚会。'
    }
];
const BLOG_POSTS = [
    {
        id: 1,
        title: "React Hooks 传说",
        excerpt: "掌握 useEffect 和 useState，以控制应用程序中的时间和状态流。",
        level: "新手村",
        date: "2023年11月12日",
        readTime: "5 分钟阅读",
        xp: "500 XP",
        color: "bg-green-500",
        image: "https://placehold.co/600x300/166534/4ade80?text=React+Hooks",
        gif: "https://placehold.co/600x300/0f172a/4ade80?text=React+Hooks+GIF",
        content: `
# React Hooks 的传说

很久以前，在类组件王国中，状态被困在复杂的 \`this\` 绑定和生命周期方法中。开发人员很难在组件之间共享逻辑，导致了可怕的 **嵌套地狱 (Wrapper Hell)**。

然后 **Hooks** (v16.8) 出现了，这是一套神奇的神器，允许函数组件运用状态和副作用的力量。

## 1. 抓钩 (Hookshot): useState

这是你库存中最基本的工具。它允许你在渲染之间持久保存值。

\`\`\`javascript
const [health, setHealth] = useState(100);

// 受到伤害
setHealth(prev => prev - 10);
\`\`\`

## 2. 时间宝石: useEffect

控制副作用——获取数据、订阅或手动更改 DOM。它取代了 \`componentDidMount\`、\`componentDidUpdate\` 和 \`componentWillUnmount\`。

\`\`\`javascript
useEffect(() => {
  const timer = setInterval(() => {
    console.log("滴答...");
  }, 1000);

  return () => clearInterval(timer); // 清理阶段
}, []);
\`\`\`

### Hooks 的关键规则
1. 只在顶层调用 Hooks。
2. 只在 React 函数组件中调用 Hooks。
3. 不要在循环、条件或嵌套函数中调用 Hooks。

> "能力越大，责任越大。别忘了依赖数组！" - 长老开发者

## 流程可视化

![React Flow Diagram](https://placehold.co/600x200/0f172a/FFF?text=Render+Cycle+Visualized)

## 自定义 Hooks

你可以通过组合现有的 hook 来制作你自己的武器。这是函数式范式的真正力量。

- **useWindowSize**: 跟踪视口尺寸。
- **useLocalStorage**: 将状态持久化到浏览器存储。
- **useFetch**: 简化的数据获取。

掌握这些工具，你将征服前端领域！
    `
    },
    {
        id: 2,
        title: "CSS Grid 地下城",
        excerpt: "探索二维布局系统，在不使用表格的情况下构建复杂的 UI 结构。",
        level: "中级",
        date: "2023年12月05日",
        readTime: "8 分钟阅读",
        xp: "750 XP",
        color: "bg-blue-500",
        image: "https://placehold.co/600x300/1e40af/60a5fa?text=CSS+Grid",
        gif: "https://placehold.co/600x300/0f172a/60a5fa?text=Grid+Layout+GIF",
        content: `
# 进入 Grid 地下城

CSS Grid Layout 是 CSS 中可用的最强大的布局系统。它是一个 **二维系统**，这意味着它可以处理列和行，不像 Flexbox 那样主要是一维的。

## 定义地图

要启动网格，你将容器定义为网格并指定列和行。

\`\`\`css
.dungeon-floor {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
\`\`\`

## 放置物品

你可以将物品放置在特定的单元格中，跨越多行或多列。

### 坐标
1. **grid-column-start**
2. **grid-column-end**
3. **grid-row-start**
4. **grid-row-end**

\`\`\`css
.treasure-chest {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
}
\`\`\`

![Grid Layout Example](https://placehold.co/600x250/1e3a8a/FFF?text=Grid+Inspector+Tool)

## 常见模式

你可以构建几种传奇布局：

- **圣杯布局**: 页眉、侧边栏、主内容、页脚。
- **12 列网格**: 标准设计系统基础。
- **瀑布流布局**: 交错的内容块。

> "Grid 不是 Flexbox 的敌人。它们是反对浮动战争中的盟友。"

装备你的 CSS Grid 技能，构建适应任何视口大小的布局！
    `
    },
    {
        id: 3,
        title: "Boss 战: WebGL 着色器",
        excerpt: "编写 GLSL 代码以创建直接在 GPU 上运行的惊人视觉效果。",
        level: "高级",
        date: "2024年01月20日",
        readTime: "15 分钟阅读",
        xp: "2000 XP",
        color: "bg-purple-500",
        image: "https://placehold.co/600x300/6b21a8/d8b4fe?text=WebGL+Magic",
        gif: "https://placehold.co/600x300/0f172a/d8b4fe?text=Shader+Animation+GIF",
        content: `
# Boss 战: 着色器领域

着色器是在 GPU 上运行的小程序。它们是用 **GLSL** (OpenGL Shading Language) 编写的，看起来很像 C 语言。

## 顶点 vs 片段

你需要掌握两种主要类型的着色器：

1. **顶点着色器 (Vertex Shader)**: 处理 3D 空间中顶点的位置。它决定了形状。
2. **片段着色器 (Fragment Shader)**: 处理每个像素的颜色。它决定了外观。

### 1. 顶点着色器示例

\`\`\`glsl
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
\`\`\`

### 2. 片段着色器示例

这是一个将每个像素变为红色的咒语：

\`\`\`glsl
void main() {
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}
\`\`\`

## Uniforms 和 Varyings

* **Uniforms**: 在一次绘制调用中对所有顶点/片段保持不变的全局变量（例如，时间，分辨率）。
* **Varyings**: 从顶点着色器传递到片段着色器的变量，在表面上进行插值。

![Shader Pipeline](https://placehold.co/600x200/581c87/FFF?text=Vertex+To+Fragment+Pipeline)

## 游戏循环

要为着色器设置动画，你需要传递一个 \`u_time\` uniform，该 uniform 每帧都会增加。

\`\`\`javascript
const material = new THREE.ShaderMaterial({
  uniforms: {
    u_time: { value: 0 }
  },
  vertexShader: vShader,
  fragmentShader: fShader
});
\`\`\`

> "数学是宇宙的语言，着色器是它的诗歌。"

击败这个 Boss 将解锁创建流体模拟、粒子系统和后期处理效果的能力！
    `
    },
    {
        id: 4,
        title: "TypeScript 神庙",
        excerpt: "探索静态类型的古老遗迹，以防止运行时错误并改善开发人员体验。",
        level: "高级",
        date: "2024年02月14日",
        readTime: "10 分钟阅读",
        xp: "1500 XP",
        color: "bg-blue-600",
        image: "https://placehold.co/600x300/2563eb/93c5fd?text=TypeScript",
        gif: "https://placehold.co/600x300/0f172a/93c5fd?text=Type+Safety+GIF",
        content: `
# TypeScript 神庙

许多冒险家害怕 TypeScript 神庙的严厉守卫，但那些遵守其规则的人将获得更少的 Bug 和更好的自动完成奖励。

## 接口 vs 类型

永恒的辩论。

\`\`\`typescript
interface Hero {
  name: string;
  hp: number;
}

type Villian = {
  name: string;
  power: number;
}
\`\`\`

## 泛型

创建可与任何数据类型一起使用的可重用组件的能力。

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}
\`\`\`

掌握这些卷轴！
    `
    }
];
const PROJECTS = [
    {
        id: 1,
        title: "复古贪吃蛇",
        desc: "使用纯 JavaScript 和 HTML5 Canvas 构建的经典贪吃蛇游戏。",
        tags: [
            "游戏",
            "Canvas"
        ],
        image: "https://placehold.co/400x250/1e293b/FACC15?text=SNAKE"
    },
    {
        id: 2,
        title: "天气任务",
        desc: "游戏化的天气应用。每天查看天气预报可获得 XP。",
        tags: [
            "API",
            "React"
        ],
        image: "https://placehold.co/400x250/1e293b/4ADE80?text=WEATHER"
    },
    {
        id: 3,
        title: "Code Editor Pro",
        desc: "完全在浏览器中运行的轻量级代码编辑器，使用 WebAssembly。",
        tags: [
            "WASM",
            "工具"
        ],
        image: "https://placehold.co/400x250/1e293b/F472B6?text=EDITOR"
    },
    {
        id: 4,
        title: "像素画板",
        desc: "一个 16x16 的网格画板，用于创建你自己的像素艺术资产。",
        tags: [
            "工具",
            "艺术"
        ],
        image: "https://placehold.co/400x250/1e293b/A78BFA?text=PAINT"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/me/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$web$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/genai/dist/web/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function MePage() {
    _s();
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            role: 'model',
            text: '你好，冒险家！我是李面条的 AI 助手。你可以问我关于他的技术栈、项目经历，或者只是聊聊游戏！'
        }
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [chatInstance, setChatInstance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const chatEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MePage.useEffect": ()=>{
            chatEndRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }["MePage.useEffect"], [
        messages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MePage.useEffect": ()=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.API_KEY) return;
            try {
                const ai = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$genai$2f$dist$2f$web$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleGenAI"]({
                    apiKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.API_KEY
                });
                const chat = ai.chats.create({
                    model: 'gemini-2.5-flash',
                    config: {
                        systemInstruction: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["USER_CONTEXT"]
                    },
                    history: [
                        {
                            role: "user",
                            parts: [
                                {
                                    text: "Hello"
                                }
                            ]
                        },
                        {
                            role: "model",
                            parts: [
                                {
                                    text: "你好，冒险家！我是李面条的 AI 助手。你可以问我关于他的技术栈、项目经历，或者只是聊聊游戏！"
                                }
                            ]
                        }
                    ]
                });
                setChatInstance(chat);
            } catch (e) {
                console.error("Failed to init chat", e);
            }
        }
    }["MePage.useEffect"], []);
    const handleSend = async ()=>{
        if (!input.trim() || !chatInstance) return;
        const userMessage = input;
        setInput('');
        setMessages((prev)=>[
                ...prev,
                {
                    role: 'user',
                    text: userMessage
                }
            ]);
        setIsLoading(true);
        try {
            const result = await chatInstance.sendMessage({
                message: userMessage
            });
            const responseText = result.text;
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: 'model',
                        text: responseText
                    }
                ]);
        } catch (error) {
            console.error("Chat Error:", error);
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: 'model',
                        text: "系统过载... 连接丢失。请稍后再试。(Error)"
                    }
                ]);
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-12 animate-fade-in max-w-6xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-12 gap-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-5 space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white dark:bg-slate-800 border-2 border-slate-900 dark:border-slate-600 rounded-xl p-6 retro-shadow relative overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-yellow-400 to-orange-400"
                                }, void 0, false, {
                                    fileName: "[project]/app/me/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative mt-8 flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-24 h-24 bg-white p-1 rounded-full border-4 border-white shadow-lg overflow-hidden mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
                                                alt: "Avatar",
                                                className: "w-full h-full bg-slate-100"
                                            }, void 0, false, {
                                                fileName: "[project]/app/me/page.tsx",
                                                lineNumber: 80,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/me/page.tsx",
                                            lineNumber: 79,
                                            columnNumber: 20
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-pixel-bold-cn text-2xl text-slate-900 dark:text-white mb-1",
                                            children: "李面条"
                                        }, void 0, false, {
                                            fileName: "[project]/app/me/page.tsx",
                                            lineNumber: 82,
                                            columnNumber: 20
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-xs font-mono text-slate-600 dark:text-slate-300 mb-4",
                                            children: "Level 28 • 前端法师"
                                        }, void 0, false, {
                                            fileName: "[project]/app/me/page.tsx",
                                            lineNumber: 83,
                                            columnNumber: 20
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-center text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed",
                                            children: "致力于创造像素完美的 Web 体验。喜欢钻研底层原理，同时也热衷于游戏开发。"
                                        }, void 0, false, {
                                            fileName: "[project]/app/me/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 20
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between text-xs font-bold mb-1 text-slate-500 dark:text-slate-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "React / Next.js"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/me/page.tsx",
                                                                    lineNumber: 93,
                                                                    columnNumber: 121
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "90%"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/me/page.tsx",
                                                                    lineNumber: 93,
                                                                    columnNumber: 149
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/me/page.tsx",
                                                            lineNumber: 93,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-full bg-blue-500 w-[90%]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/me/page.tsx",
                                                                lineNumber: 95,
                                                                columnNumber: 28
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/me/page.tsx",
                                                            lineNumber: 94,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/me/page.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between text-xs font-bold mb-1 text-slate-500 dark:text-slate-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "WebGL / Three.js"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/me/page.tsx",
                                                                    lineNumber: 99,
                                                                    columnNumber: 121
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "75%"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/me/page.tsx",
                                                                    lineNumber: 99,
                                                                    columnNumber: 150
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/me/page.tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-full bg-purple-500 w-[75%]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/me/page.tsx",
                                                                lineNumber: 101,
                                                                columnNumber: 28
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/me/page.tsx",
                                                            lineNumber: 100,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/me/page.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between text-xs font-bold mb-1 text-slate-500 dark:text-slate-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Node.js"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/me/page.tsx",
                                                                    lineNumber: 105,
                                                                    columnNumber: 121
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "80%"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/me/page.tsx",
                                                                    lineNumber: 105,
                                                                    columnNumber: 141
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/me/page.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-full bg-green-500 w-[80%]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/me/page.tsx",
                                                                lineNumber: 107,
                                                                columnNumber: 28
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/me/page.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/me/page.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/me/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 20
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/me/page.tsx",
                                    lineNumber: 78,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/me/page.tsx",
                            lineNumber: 76,
                            columnNumber: 14
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "p-3 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 rounded-lg hover:-translate-y-1 transition-transform text-slate-700 dark:text-slate-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/app/me/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 204
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/me/page.tsx",
                                    lineNumber: 115,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "p-3 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 rounded-lg hover:-translate-y-1 transition-transform text-blue-500",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/app/me/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 183
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/me/page.tsx",
                                    lineNumber: 116,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "p-3 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 rounded-lg hover:-translate-y-1 transition-transform text-blue-700",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/app/me/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 183
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/me/page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/me/page.tsx",
                            lineNumber: 114,
                            columnNumber: 14
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/me/page.tsx",
                    lineNumber: 75,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:col-span-7 h-[600px] flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-900 rounded-t-xl p-4 border-2 border-slate-800 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-3 h-3 rounded-full bg-red-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/me/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 20
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-3 h-3 rounded-full bg-yellow-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/me/page.tsx",
                                            lineNumber: 126,
                                            columnNumber: 20
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-3 h-3 rounded-full bg-green-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/me/page.tsx",
                                            lineNumber: 127,
                                            columnNumber: 20
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-2 font-mono text-sm text-slate-400",
                                            children: "AI_TERMINAL_V2.0"
                                        }, void 0, false, {
                                            fileName: "[project]/app/me/page.tsx",
                                            lineNumber: 128,
                                            columnNumber: 20
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/me/page.tsx",
                                    lineNumber: 124,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-green-500 text-xs font-mono",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-green-500 animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/app/me/page.tsx",
                                            lineNumber: 131,
                                            columnNumber: 20
                                        }, this),
                                        "ONLINE"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/me/page.tsx",
                                    lineNumber: 130,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/me/page.tsx",
                            lineNumber: 123,
                            columnNumber: 14
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-grow bg-slate-950 border-x-2 border-slate-800 p-6 overflow-y-auto custom-scrollbar space-y-6 font-mono text-sm",
                            children: [
                                messages.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `max-w-[80%] p-4 rounded-lg ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none'}`,
                                            children: [
                                                msg.role === 'model' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] text-green-400 mb-1 uppercase tracking-wider",
                                                    children: "System"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/me/page.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 50
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "whitespace-pre-wrap leading-relaxed",
                                                    children: msg.text
                                                }, void 0, false, {
                                                    fileName: "[project]/app/me/page.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/me/page.tsx",
                                            lineNumber: 139,
                                            columnNumber: 22
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/app/me/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 19
                                    }, this)),
                                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-start",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-800 border border-slate-700 p-4 rounded-lg rounded-bl-none flex gap-2 items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                                            }, void 0, false, {
                                                fileName: "[project]/app/me/page.tsx",
                                                lineNumber: 152,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"
                                            }, void 0, false, {
                                                fileName: "[project]/app/me/page.tsx",
                                                lineNumber: 153,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"
                                            }, void 0, false, {
                                                fileName: "[project]/app/me/page.tsx",
                                                lineNumber: 154,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/me/page.tsx",
                                        lineNumber: 151,
                                        columnNumber: 22
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/me/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: chatEndRef
                                }, void 0, false, {
                                    fileName: "[project]/app/me/page.tsx",
                                    lineNumber: 158,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/me/page.tsx",
                            lineNumber: 136,
                            columnNumber: 14
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-900 p-4 border-2 border-slate-800 rounded-b-xl flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: input,
                                    onChange: (e)=>setInput(e.target.value),
                                    onKeyDown: (e)=>e.key === 'Enter' && handleSend(),
                                    placeholder: "输入指令或问题...",
                                    className: "flex-grow bg-slate-950 border border-slate-700 text-white px-4 py-3 rounded focus:outline-none focus:border-green-500 font-mono transition-colors"
                                }, void 0, false, {
                                    fileName: "[project]/app/me/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSend,
                                    disabled: isLoading,
                                    className: "bg-green-600 hover:bg-green-500 text-white px-6 rounded font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/app/me/page.tsx",
                                        lineNumber: 175,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/me/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/me/page.tsx",
                            lineNumber: 161,
                            columnNumber: 14
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/me/page.tsx",
                    lineNumber: 122,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/me/page.tsx",
            lineNumber: 72,
            columnNumber: 8
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/me/page.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(MePage, "ZT18TSflBYU5yGhCKHyW/BDnzLM=");
_c = MePage;
var _c;
__turbopack_context__.k.register(_c, "MePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_3f25f7d2._.js.map