import React from 'react';
import { MDXComponents } from 'mdx/types';

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-bold text-3xl md:text-4xl text-slate-900 dark:text-white mt-10 mb-6 tracking-tight">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-bold text-2xl md:text-3xl text-slate-800 dark:text-slate-100 mt-8 mb-4 border-b border-slate-200 dark:border-slate-700 pb-2 tracking-tight">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-bold text-xl md:text-2xl text-slate-800 dark:text-slate-200 mt-6 mb-3">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="font-bold text-lg md:text-xl text-slate-700 dark:text-slate-300 mt-4 mb-2">
      {children}
    </h4>
  ),
  h5: ({ children }) => (
    <h5 className="font-bold text-base md:text-lg text-slate-700 dark:text-slate-300 mt-4 mb-2 uppercase tracking-wide">
      {children}
    </h5>
  ),
  p: ({ children }) => (
    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4 font-sans">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <div className="mb-4 ml-2">{children}</div>
  ),
  ol: ({ children }) => (
    <div className="mb-4 ml-2">{children}</div>
  ),
  li: ({ children }) => {
    // Determine if it's an ordered or unordered list item based on context isn't easy in MDX components map directly without context.
    // However, MDX often passes the parent type. But standard li mapping is simple.
    // For our retro style, we want the custom bullet points.
    // Since we can't easily distinguish ul/ol parent here without more complex logic or context,
    // We will try a generic approach or use the `prose` customization if this falls short.
    // But let's try to mimic the `MarkdownRenderer` logic where we wrap the content.
    return (
      <div className="flex items-start gap-3 mb-2">
        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2.5 shrink-0"></div>
        <div className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
          {children}
        </div>
      </div>
    );
  },
  blockquote: ({ children }) => (
    <div className="border-l-4 border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 pl-4 pr-2 py-3 my-6 rounded-r text-slate-700 dark:text-slate-300 italic">
      {children}
    </div>
  ),
  pre: ({ children }) => {
    // Extract code and language if possible. 
    // In MDX v2, `pre` usually contains a `code` element.
    // We want to wrap it in our retro window.
    return (
      <div className="my-6 bg-slate-900 rounded-md overflow-hidden border border-slate-700 retro-shadow">
        <div className="bg-slate-800 px-4 py-1 text-xs text-slate-400 font-mono border-b border-slate-700 flex justify-between">
          <span>CODE</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
        </div>
        <pre className="p-4 overflow-x-auto bg-transparent m-0">
          {children}
        </pre>
      </div>
    );
  },
  code: ({ children, className }) => {
    // If it's inline code (not inside pre), style it.
    // If it's inside pre, `pre` handles the container, but `code` handles text style.
    // Note: MDX often passes `className` like `language-js` to `code`.
    const isBlock = className && className.startsWith('language-');
    if (isBlock) {
      return (
        <code className={`font-mono text-sm text-green-400 leading-relaxed ${className}`}>
          {children}
        </code>
      );
    }
    return (
      <code className="bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm font-mono text-pink-600 dark:text-pink-400">
        {children}
      </code>
    );
  },
  img: (props) => (
    <span className="block my-8">
      <span className="block rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md">
        <img {...props} className="w-full h-auto" />
      </span>
      {props.alt && <span className="block text-center text-sm text-slate-500 dark:text-slate-400 mt-2 italic">{props.alt}</span>}
    </span>
  ),
  strong: ({ children }) => (
    <strong className="font-bold text-slate-900 dark:text-white">{children}</strong>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      className="font-bold text-slate-900 dark:text-white border-b-2 border-yellow-500 hover:bg-yellow-500/20 transition-all mx-1"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-8 border-2 border-slate-900 dark:border-slate-700 rounded-lg retro-shadow">
      <table className="min-w-full text-sm divide-y-2 divide-slate-200 dark:divide-slate-700">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-slate-100 dark:bg-slate-800 font-pixel-bold-cn text-slate-900 dark:text-white uppercase tracking-wider">
      {children}
    </thead>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-900">
      {children}
    </tbody>
  ),
  tr: ({ children }) => (
    <tr className="hover:bg-yellow-50 dark:hover:bg-yellow-900/10 transition-colors group">
      {children}
    </tr>
  ),
  th: ({ children }) => (
    <th className="px-6 py-4 text-left font-bold border-r border-slate-200 dark:border-slate-700 last:border-r-0">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-6 py-4 whitespace-nowrap text-slate-700 dark:text-slate-300 font-medium border-r border-slate-200 dark:border-slate-700 last:border-r-0 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
      {children}
    </td>
  ),

};
