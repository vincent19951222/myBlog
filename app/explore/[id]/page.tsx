
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Zap } from "lucide-react";
import { MarkdownRenderer } from '../../components/Common';
import { BLOG_POSTS } from '../../lib/data';

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  // In Next.js 15, params is a Promise. Awaiting it to be safe for latest versions.
  const resolvedParams = await params;
  const post = BLOG_POSTS.find(p => p.id === parseInt(resolvedParams.id));

  if (!post) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">404 - Quest Not Found</h1>
        <Link href="/explore" className="text-yellow-600 hover:underline">Return to Map</Link>
      </div>
    );
  }

  return (
      <div className="w-full max-w-5xl mx-auto bg-white dark:bg-slate-900 shadow-2xl relative flex flex-col min-h-screen">
          {/* Header Image & Back Button */}
          <div className="relative h-64 md:h-80 shrink-0">
             <img src={post.image} className="w-full h-full object-cover" />
             <Link
               href="/explore"
               className="absolute top-4 left-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-md transition-colors border border-white/20 z-20 group"
             >
               <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
             </Link>
             <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/90 to-transparent pt-20">
                <h1 className="font-pixel-bold-cn text-3xl md:text-5xl text-white mb-2 shadow-black drop-shadow-md">{post.title}</h1>
                <div className="flex flex-wrap gap-4 text-slate-300 text-sm font-mono">
                  <span className="flex items-center gap-1"><Calendar size={14}/> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={14}/> {post.readTime}</span>
                  <span className="text-yellow-400 font-bold bg-yellow-400/10 px-2 rounded border border-yellow-400/20">{post.level}</span>
                </div>
             </div>
          </div>

          <div className="flex-grow p-6 md:p-10 bg-white dark:bg-[#0b1221]">
             <div className="max-w-3xl mx-auto">
               <MarkdownRenderer content={post.content} />
               <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-center">
                  <Link href="/explore" className="px-8 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full font-pixel-bold-cn transition-colors text-slate-700 dark:text-slate-300 flex items-center gap-2 group">
                    <Zap className="text-yellow-500 group-hover:scale-110 transition-transform" size={18} /> 
                    任务完成 (返回)
                  </Link>
               </div>
             </div>
          </div>
      </div>
  );
}
