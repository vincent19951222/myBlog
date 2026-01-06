
import React from 'react';
import { ExternalLink } from "lucide-react";
import { PROJECTS } from '../lib/data';

export default function LabPage() {
  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="font-pixel-bold-cn text-4xl text-slate-900 dark:text-white mb-4">疯狂实验室</h1>
        <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
          这里存放着我的副业项目、原型和失败的实验。小心爆炸！
        </p>
      </div>

      {/* Hero Webview - RPG 群岛探索器 */}
      <div className="w-full max-w-5xl mx-auto mb-12 rounded-lg overflow-hidden border-2 border-slate-300 dark:border-slate-600 retro-shadow">
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src="https://explore.boluopets.com/"
            className="absolute inset-0 w-full h-full"
            title="RPG 群岛探索器"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
            allowFullScreen
            loading="lazy"
            style={{ border: 'none' }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {PROJECTS.map((project) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden border-2 border-slate-300 dark:border-slate-600 retro-shadow hover:retro-shadow-hover transition-all cursor-pointer group flex flex-col md:flex-row relative block"
          >
            <div className="w-full md:w-48 h-48 md:h-auto shrink-0 relative overflow-hidden bg-slate-200 dark:bg-slate-700">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[1px]">
                <ExternalLink className="text-white" size={24} />
              </div>
            </div>
            <div className="p-5 flex flex-col h-full w-full relative">
              <div className="flex flex-col items-start mb-3 pr-12">
                <h3 className="font-pixel-bold-cn text-xl text-slate-900 dark:text-white leading-tight mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded uppercase tracking-wider border border-slate-200 dark:border-slate-600">{tag}</span>
                  ))}
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed flex-grow">{project.desc}</p>

              <div className="absolute top-5 right-5 z-20">
                <span className="bg-yellow-400 text-slate-900 font-pixel-bold-cn text-xs px-2 py-1 rounded-sm retro-shadow-yellow group-hover:translate-y-0.5 group-hover:shadow-none transition-all border border-yellow-500 flex items-center gap-1">
                  PLAY
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
