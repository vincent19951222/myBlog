
import React from 'react';
import Link from 'next/link';
import { ArrowRight, GitCommit } from "lucide-react";
import { Hero } from './components/HomeClient';
import { QuestCard } from './components/Common';
import { TIMELINE_EVENTS, BLOG_POSTS, PROJECTS } from './lib/data';

const HomeTimeline = () => {
  return (
    <div className="py-10 bg-slate-50 dark:bg-[#0b1221] border-t-4 border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
           <GitCommit className="text-slate-400 dark:text-slate-500" size={20} />
           <h3 className="font-pixel-bold-cn text-xl text-slate-500 dark:text-slate-400 tracking-widest uppercase">系统日志</h3>
        </div>

        <div className="space-y-0 relative ml-2 md:ml-4">
           {TIMELINE_EVENTS.map((event, index) => (
             <div key={index} className="relative flex gap-6 pb-8 last:pb-0 group">
                {index !== TIMELINE_EVENTS.length - 1 && (
                  <div className="absolute left-[5px] top-3 bottom-0 w-[2px] bg-slate-300 dark:bg-slate-700 -ml-[1px]"></div>
                )}
                <div className={`relative z-10 w-3 h-3 rounded-full mt-1.5 shrink-0 ${index === 0 ? 'bg-green-500 animate-pulse' : 'bg-slate-400 dark:bg-slate-600 border-2 border-slate-50 dark:border-[#0b1221] box-content'}`}></div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                  <span className="font-mono text-xs text-slate-400 dark:text-slate-500 shrink-0">{event.date}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${
                      event.tag === 'UPDATE' ? 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800' :
                      event.tag === 'LAB' ? 'bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800' :
                      event.tag === 'ARTICLE' ? 'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800' :
                      'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                    }`}>
                      {event.tag}
                    </span>
                    <span className="text-slate-700 dark:text-slate-300 text-sm md:text-base font-medium">{event.content}</span>
                  </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

const HomeQuests = () => {
  return (
    <section className="py-16 bg-white dark:bg-[#050b14]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8 border-b-4 border-slate-200 dark:border-slate-800 pb-4">
           <h2 className="font-pixel-bold-cn text-2xl md:text-3xl text-slate-800 dark:text-white flex items-center gap-3">
             <span className="text-yellow-500">Lv.1</span> 近期探索
           </h2>
           <Link href="/explore" className="text-sm font-bold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white flex items-center gap-1">
             查看全部 <ArrowRight size={14} />
           </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOG_POSTS.slice(0, 4).map((post) => (
            <QuestCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

const HomeLabs = () => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-[#0b1221] border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8 border-b-4 border-slate-200 dark:border-slate-800 pb-4">
           <h2 className="font-pixel-bold-cn text-2xl md:text-3xl text-slate-800 dark:text-white flex items-center gap-3">
             <span className="text-pink-500">Lv.2</span> 热门实验
           </h2>
           <Link href="/lab" className="text-sm font-bold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white flex items-center gap-1">
             进入实验室 <ArrowRight size={14} />
           </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 hover:border-pink-500 transition-colors duration-300 retro-shadow cursor-pointer group flex flex-col h-full">
              <div className="h-40 overflow-hidden relative">
                 <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                 <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                 <h3 className="font-pixel-bold-cn text-lg text-slate-900 dark:text-white mb-2">{project.title}</h3>
                 <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow">{project.desc}</p>
                 <div className="flex flex-wrap gap-2 mt-auto">
                   {project.tags.map(tag => (
                     <span key={tag} className="text-[10px] font-bold px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded uppercase tracking-wider">{tag}</span>
                   ))}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      <Hero />
      <HomeTimeline />
      <HomeQuests />
      <HomeLabs />
    </div>
  );
}
