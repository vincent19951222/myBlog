(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/Common.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MarkdownRenderer",
    ()=>MarkdownRenderer,
    "QuestCard",
    ()=>QuestCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const MarkdownRenderer = ({ content })=>{
    const lines = content.split('\n');
    const elements = [];
    let inCodeBlock = false;
    let codeBlockContent = [];
    let codeLanguage = '';
    const parseInline = (text)=>{
        const parts = [];
        let currentText = '';
        let i = 0;
        while(i < text.length){
            if (text.slice(i, i + 2) === '**') {
                if (currentText) parts.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: currentText
                }, `t-${i}`, false, {
                    fileName: "[project]/app/components/Common.tsx",
                    lineNumber: 22,
                    columnNumber: 37
                }, ("TURBOPACK compile-time value", void 0)));
                currentText = '';
                i += 2;
                let end = text.indexOf('**', i);
                if (end === -1) end = text.length;
                parts.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    className: "font-bold text-slate-900 dark:text-white",
                    children: text.slice(i, end)
                }, `b-${i}`, false, {
                    fileName: "[project]/app/components/Common.tsx",
                    lineNumber: 27,
                    columnNumber: 20
                }, ("TURBOPACK compile-time value", void 0)));
                i = end + 2;
            } else if (text[i] === '`') {
                if (currentText) parts.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: currentText
                }, `t-${i}`, false, {
                    fileName: "[project]/app/components/Common.tsx",
                    lineNumber: 31,
                    columnNumber: 37
                }, ("TURBOPACK compile-time value", void 0)));
                currentText = '';
                i++;
                let end = text.indexOf('`', i);
                if (end === -1) end = text.length;
                parts.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    className: "bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm font-mono text-pink-600 dark:text-pink-400",
                    children: text.slice(i, end)
                }, `c-${i}`, false, {
                    fileName: "[project]/app/components/Common.tsx",
                    lineNumber: 36,
                    columnNumber: 20
                }, ("TURBOPACK compile-time value", void 0)));
                i = end + 1;
            } else {
                currentText += text[i];
                i++;
            }
        }
        if (currentText) parts.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: currentText
        }, "last", false, {
            fileName: "[project]/app/components/Common.tsx",
            lineNumber: 44,
            columnNumber: 33
        }, ("TURBOPACK compile-time value", void 0)));
        return parts;
    };
    lines.forEach((line, index)=>{
        if (line.trim().startsWith('```')) {
            if (inCodeBlock) {
                elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "my-6 bg-slate-900 rounded-md overflow-hidden border border-slate-700 retro-shadow",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-800 px-4 py-1 text-xs text-slate-400 font-mono border-b border-slate-700 flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: codeLanguage || 'CODE'
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Common.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 rounded-full bg-red-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Common.tsx",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 rounded-full bg-yellow-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Common.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2 h-2 rounded-full bg-green-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Common.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Common.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Common.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "p-4 overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                className: "font-mono text-sm text-green-400 leading-relaxed",
                                children: codeBlockContent.join('\n')
                            }, void 0, false, {
                                fileName: "[project]/app/components/Common.tsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/Common.tsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, `code-${index}`, true, {
                    fileName: "[project]/app/components/Common.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)));
                inCodeBlock = false;
                codeBlockContent = [];
                codeLanguage = '';
            } else {
                inCodeBlock = true;
                codeLanguage = line.trim().replace('```', '').toUpperCase();
            }
            return;
        }
        if (inCodeBlock) {
            codeBlockContent.push(line);
            return;
        }
        const trimLine = line.trim();
        if (line.startsWith('# ')) {
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-bold text-3xl md:text-4xl text-slate-900 dark:text-white mt-10 mb-6 tracking-tight",
                children: line.replace('# ', '')
            }, index, false, {
                fileName: "[project]/app/components/Common.tsx",
                lineNumber: 86,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)));
        } else if (line.startsWith('## ')) {
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-bold text-2xl md:text-3xl text-slate-800 dark:text-slate-100 mt-8 mb-4 border-b border-slate-200 dark:border-slate-700 pb-2 tracking-tight",
                children: line.replace('## ', '')
            }, index, false, {
                fileName: "[project]/app/components/Common.tsx",
                lineNumber: 88,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)));
        } else if (line.startsWith('### ')) {
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-bold text-xl md:text-2xl text-slate-800 dark:text-slate-200 mt-6 mb-3",
                children: line.replace('### ', '')
            }, index, false, {
                fileName: "[project]/app/components/Common.tsx",
                lineNumber: 90,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)));
        } else if (line.startsWith('#### ')) {
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "font-bold text-lg md:text-xl text-slate-700 dark:text-slate-300 mt-4 mb-2",
                children: line.replace('#### ', '')
            }, index, false, {
                fileName: "[project]/app/components/Common.tsx",
                lineNumber: 92,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)));
        } else if (line.startsWith('##### ')) {
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                className: "font-bold text-base md:text-lg text-slate-700 dark:text-slate-300 mt-4 mb-2 uppercase tracking-wide",
                children: line.replace('##### ', '')
            }, index, false, {
                fileName: "[project]/app/components/Common.tsx",
                lineNumber: 95,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)));
        } else if (trimLine.startsWith('![') && trimLine.includes('](') && trimLine.endsWith(')')) {
            const altStart = trimLine.indexOf('![') + 2;
            const altEnd = trimLine.indexOf('](');
            const urlStart = altEnd + 2;
            const urlEnd = trimLine.length - 1;
            const alt = trimLine.substring(altStart, altEnd);
            const url = trimLine.substring(urlStart, urlEnd);
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "my-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: url,
                            alt: alt,
                            className: "w-full h-auto"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Common.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Common.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-sm text-slate-500 dark:text-slate-400 mt-2 italic",
                        children: alt
                    }, void 0, false, {
                        fileName: "[project]/app/components/Common.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, index, true, {
                fileName: "[project]/app/components/Common.tsx",
                lineNumber: 107,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)));
        } else if (trimLine.startsWith('> ')) {
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-l-4 border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 pl-4 pr-2 py-3 my-6 rounded-r text-slate-700 dark:text-slate-300 italic",
                children: parseInline(line.replace('> ', ''))
            }, index, false, {
                fileName: "[project]/app/components/Common.tsx",
                lineNumber: 117,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)));
        } else if (trimLine.startsWith('- ') || trimLine.startsWith('* ')) {
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3 mb-2 ml-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2.5 shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Common.tsx",
                        lineNumber: 125,
                        columnNumber: 12
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-slate-700 dark:text-slate-300 text-lg leading-relaxed",
                        children: parseInline(line.replace(/^[-*]\s+/, ''))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Common.tsx",
                        lineNumber: 126,
                        columnNumber: 12
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, index, true, {
                fileName: "[project]/app/components/Common.tsx",
                lineNumber: 124,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)));
        } else if (/^\d+\.\s/.test(trimLine)) {
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3 mb-2 ml-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono font-bold text-yellow-600 dark:text-yellow-500 mt-0.5 shrink-0",
                        children: trimLine.match(/^\d+\./)[0]
                    }, void 0, false, {
                        fileName: "[project]/app/components/Common.tsx",
                        lineNumber: 135,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-slate-700 dark:text-slate-300 text-lg leading-relaxed",
                        children: parseInline(trimLine.replace(/^\d+\.\s/, ''))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Common.tsx",
                        lineNumber: 138,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, index, true, {
                fileName: "[project]/app/components/Common.tsx",
                lineNumber: 134,
                columnNumber: 10
            }, ("TURBOPACK compile-time value", void 0)));
        } else if (trimLine === '') {
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-4"
            }, index, false, {
                fileName: "[project]/app/components/Common.tsx",
                lineNumber: 145,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0)));
        } else {
            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4 font-sans",
                children: parseInline(line)
            }, index, false, {
                fileName: "[project]/app/components/Common.tsx",
                lineNumber: 149,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)));
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "animate-fade-in font-sans",
        children: elements
    }, void 0, false, {
        fileName: "[project]/app/components/Common.tsx",
        lineNumber: 156,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c = MarkdownRenderer;
const QuestCard = ({ post })=>{
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/explore/${post.id}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            layoutId: `card-${post.id}`,
            onMouseEnter: ()=>setIsHovered(true),
            onMouseLeave: ()=>setIsHovered(false),
            className: "group relative cursor-pointer bg-slate-900 rounded-xl overflow-hidden border-2 border-slate-800 hover:border-yellow-500 transition-colors duration-300 retro-shadow h-full flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-48 overflow-hidden bg-slate-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                            src: post.image,
                            alt: post.title,
                            className: "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
                            style: {
                                opacity: isHovered ? 0 : 1
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/components/Common.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                            src: post.gif,
                            alt: `${post.title} preview`,
                            className: "absolute inset-0 w-full h-full object-cover",
                            style: {
                                opacity: isHovered ? 1 : 0
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/components/Common.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-2 right-2 bg-black/80 text-yellow-400 text-xs font-pixel-bold-cn px-2 py-1 rounded backdrop-blur-sm border border-yellow-500/30 z-10",
                            children: post.level
                        }, void 0, false, {
                            fileName: "[project]/app/components/Common.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Common.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5 flex flex-col flex-grow bg-slate-900 relative z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start mb-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-pixel-bold-cn text-xl text-white group-hover:text-yellow-400 transition-colors line-clamp-1",
                                children: post.title
                            }, void 0, false, {
                                fileName: "[project]/app/components/Common.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/Common.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-400 text-sm mb-4 line-clamp-2 flex-grow",
                            children: post.excerpt
                        }, void 0, false, {
                            fileName: "[project]/app/components/Common.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between text-xs text-slate-500 font-mono mt-auto pt-4 border-t border-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/Common.tsx",
                                            lineNumber: 194,
                                            columnNumber: 55
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        post.date
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/Common.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-green-500",
                                    children: post.xp
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Common.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Common.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Common.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Common.tsx",
            lineNumber: 164,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/Common.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(QuestCard, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c1 = QuestCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "MarkdownRenderer");
__turbopack_context__.k.register(_c1, "QuestCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Modal({ children }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const onDismiss = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Modal.useCallback[onDismiss]": ()=>{
            router.back();
        }
    }["Modal.useCallback[onDismiss]"], [
        router
    ]);
    const onKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Modal.useCallback[onKeyDown]": (e)=>{
            if (e.key === 'Escape') onDismiss();
        }
    }["Modal.useCallback[onKeyDown]"], [
        onDismiss
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            document.addEventListener('keydown', onKeyDown);
            // Lock body scroll
            document.body.style.overflow = 'hidden';
            return ({
                "Modal.useEffect": ()=>{
                    document.removeEventListener('keydown', onKeyDown);
                    // Restore body scroll
                    document.body.style.overflow = 'unset';
                }
            })["Modal.useEffect"];
        }
    }["Modal.useEffect"], [
        onKeyDown
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                onClick: onDismiss,
                className: "absolute inset-0 bg-black/60 backdrop-blur-sm"
            }, void 0, false, {
                fileName: "[project]/app/components/Modal.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-5xl max-h-[90vh] flex flex-col pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-auto w-full h-full flex flex-col",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/app/components/Modal.tsx",
                    lineNumber: 46,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/Modal.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Modal.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(Modal, "otYti2SjjPvYmbfEOCXLIZR1PBI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/app/explore/@modal/(.)[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPostModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Common$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Common.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function BlogPostModal({ params }) {
    _s();
    const resolvedParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const post = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BLOG_POSTS"].find((p)=>p.id === parseInt(resolvedParams.id));
    if (!post) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            layoutId: `card-${post.id}`,
            className: "w-full h-full bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-2xl flex flex-col relative retro-shadow",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>router.back(),
                    className: "absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-md transition-colors border border-white/20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/app/explore/@modal/(.)[id]/page.tsx",
                        lineNumber: 31,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/explore/@modal/(.)[id]/page.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full overflow-y-auto overscroll-contain",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-64 md:h-80 shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                    src: post.image,
                                    alt: post.title,
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/app/explore/@modal/(.)[id]/page.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/90 to-transparent pt-20",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                            className: "font-pixel-bold-cn text-3xl md:text-5xl text-white mb-2 shadow-black drop-shadow-md",
                                            children: post.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/explore/@modal/(.)[id]/page.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-4 text-slate-300 text-sm font-mono",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/explore/@modal/(.)[id]/page.tsx",
                                                            lineNumber: 49,
                                                            columnNumber: 59
                                                        }, this),
                                                        " ",
                                                        post.date
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/explore/@modal/(.)[id]/page.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/explore/@modal/(.)[id]/page.tsx",
                                                            lineNumber: 50,
                                                            columnNumber: 59
                                                        }, this),
                                                        " ",
                                                        post.readTime
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/explore/@modal/(.)[id]/page.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-yellow-400 font-bold bg-yellow-400/10 px-2 rounded border border-yellow-400/20",
                                                    children: post.level
                                                }, void 0, false, {
                                                    fileName: "[project]/app/explore/@modal/(.)[id]/page.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/explore/@modal/(.)[id]/page.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/explore/@modal/(.)[id]/page.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/explore/@modal/(.)[id]/page.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 md:p-10 bg-white dark:bg-[#0b1221]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-3xl mx-auto pb-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Common$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkdownRenderer"], {
                                        content: post.content
                                    }, void 0, false, {
                                        fileName: "[project]/app/explore/@modal/(.)[id]/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>router.back(),
                                            className: "px-8 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full font-pixel-bold-cn transition-colors text-slate-700 dark:text-slate-300 flex items-center gap-2 group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                    className: "text-yellow-500 group-hover:scale-110 transition-transform",
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/app/explore/@modal/(.)[id]/page.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 21
                                                }, this),
                                                "任务完成 (关闭)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/explore/@modal/(.)[id]/page.tsx",
                                            lineNumber: 62,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/explore/@modal/(.)[id]/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/explore/@modal/(.)[id]/page.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/explore/@modal/(.)[id]/page.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/explore/@modal/(.)[id]/page.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/explore/@modal/(.)[id]/page.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/explore/@modal/(.)[id]/page.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(BlogPostModal, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = BlogPostModal;
var _c;
__turbopack_context__.k.register(_c, "BlogPostModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_c4032c82._.js.map