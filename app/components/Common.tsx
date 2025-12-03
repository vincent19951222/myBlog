
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export const MarkdownRenderer = ({ content }) => {
  const lines = content.split('\n');
  const elements = [];
  let inCodeBlock = false;
  let codeBlockContent = [];
  let codeLanguage = '';

  const parseInline = (text) => {
    const parts = [];
    let currentText = '';
    let i = 0;

    while (i < text.length) {
      if (text.slice(i, i + 2) === '**') {
        if (currentText) parts.push(<span key={`t-${i}`}>{currentText}</span>);
        currentText = '';
        i += 2;
        let end = text.indexOf('**', i);
        if (end === -1) end = text.length;
        parts.push(<strong key={`b-${i}`} className="font-bold text-slate-900 dark:text-white">{text.slice(i, end)}</strong>);
        i = end + 2;
      }
      else if (text[i] === '`') {
        if (currentText) parts.push(<span key={`t-${i}`}>{currentText}</span>);
        currentText = '';
        i++;
        let end = text.indexOf('`', i);
        if (end === -1) end = text.length;
        parts.push(<code key={`c-${i}`} className="bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm font-mono text-pink-600 dark:text-pink-400">{text.slice(i, end)}</code>);
        i = end + 1;
      }
      else {
        currentText += text[i];
        i++;
      }
    }
    if (currentText) parts.push(<span key="last">{currentText}</span>);
    return parts;
  };

  lines.forEach((line, index) => {
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        elements.push(
          <div key={`code-${index}`} className="my-6 bg-slate-900 rounded-md overflow-hidden border border-slate-700 retro-shadow">
            <div className="bg-slate-800 px-4 py-1 text-xs text-slate-400 font-mono border-b border-slate-700 flex justify-between">
              <span>{codeLanguage || 'CODE'}</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
            </div>
            <pre className="p-4 overflow-x-auto">
              <code className="font-mono text-sm text-green-400 leading-relaxed">
                {codeBlockContent.join('\n')}
              </code>
            </pre>
          </div>
        );
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
      elements.push(<h1 key={index} className="font-bold text-3xl md:text-4xl text-slate-900 dark:text-white mt-10 mb-6 tracking-tight">{line.replace('# ', '')}</h1>);
    } else if (line.startsWith('## ')) {
      elements.push(<h2 key={index} className="font-bold text-2xl md:text-3xl text-slate-800 dark:text-slate-100 mt-8 mb-4 border-b border-slate-200 dark:border-slate-700 pb-2 tracking-tight">{line.replace('## ', '')}</h2>);
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={index} className="font-bold text-xl md:text-2xl text-slate-800 dark:text-slate-200 mt-6 mb-3">{line.replace('### ', '')}</h3>);
    } else if (line.startsWith('#### ')) {
      elements.push(<h4 key={index} className="font-bold text-lg md:text-xl text-slate-700 dark:text-slate-300 mt-4 mb-2">{line.replace('#### ', '')}</h4>);
    }
    else if (line.startsWith('##### ')) {
      elements.push(<h5 key={index} className="font-bold text-base md:text-lg text-slate-700 dark:text-slate-300 mt-4 mb-2 uppercase tracking-wide">{line.replace('##### ', '')}</h5>);
    }
    else if (trimLine.startsWith('![') && trimLine.includes('](') && trimLine.endsWith(')')) {
      const altStart = trimLine.indexOf('![') + 2;
      const altEnd = trimLine.indexOf('](');
      const urlStart = altEnd + 2;
      const urlEnd = trimLine.length - 1;
      
      const alt = trimLine.substring(altStart, altEnd);
      const url = trimLine.substring(urlStart, urlEnd);
      
      elements.push(
        <div key={index} className="my-8">
          <div className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md">
            <img src={url} alt={alt} className="w-full h-auto" />
          </div>
          <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-2 italic">{alt}</p>
        </div>
      );
    }
    else if (trimLine.startsWith('> ')) {
      elements.push(
        <div key={index} className="border-l-4 border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 pl-4 pr-2 py-3 my-6 rounded-r text-slate-700 dark:text-slate-300 italic">
          {parseInline(line.replace('> ', ''))}
        </div>
      );
    }
    else if (trimLine.startsWith('- ') || trimLine.startsWith('* ')) {
      elements.push(
        <div key={index} className="flex items-start gap-3 mb-2 ml-2">
           <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2.5 shrink-0"></div>
           <div className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
              {parseInline(line.replace(/^[-*]\s+/, ''))}
           </div>
        </div>
      );
    }
    else if (/^\d+\.\s/.test(trimLine)) {
      elements.push(
         <div key={index} className="flex items-start gap-3 mb-2 ml-2">
            <span className="font-mono font-bold text-yellow-600 dark:text-yellow-500 mt-0.5 shrink-0">
              {trimLine.match(/^\d+\./)[0]}
            </span>
            <div className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
               {parseInline(trimLine.replace(/^\d+\.\s/, ''))}
            </div>
         </div>
      );
    }
    else if (trimLine === '') {
      elements.push(<div key={index} className="h-4"></div>);
    }
    else {
      elements.push(
        <p key={index} className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4 font-sans">
          {parseInline(line)}
        </p>
      );
    }
  });

  return <div className="animate-fade-in font-sans">{elements}</div>;
};

export const QuestCard = ({ post }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/explore/${post.id}`}>
      <motion.div
        layoutId={`card-${post.id}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative cursor-pointer bg-slate-900 rounded-xl overflow-hidden border-2 border-slate-800 hover:border-yellow-500 transition-colors duration-300 retro-shadow h-full flex flex-col"
      >
        <div className="relative h-48 overflow-hidden bg-slate-800">
          <motion.img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
            style={{ opacity: isHovered ? 0 : 1 }}
          />
          <motion.img
            src={post.gif}
            alt={`${post.title} preview`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: isHovered ? 1 : 0 }}
          />
          <div className="absolute top-2 right-2 bg-black/80 text-yellow-400 text-xs font-pixel-bold-cn px-2 py-1 rounded backdrop-blur-sm border border-yellow-500/30 z-10">
            {post.level}
          </div>
        </div>

        <div className="p-5 flex flex-col flex-grow bg-slate-900 relative z-10">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-pixel-bold-cn text-xl text-white group-hover:text-yellow-400 transition-colors line-clamp-1">{post.title}</h3>
          </div>
          <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-grow">{post.excerpt}</p>
          <div className="flex items-center justify-between text-xs text-slate-500 font-mono mt-auto pt-4 border-t border-slate-800">
            <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
            <span className="text-green-500">{post.xp}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
