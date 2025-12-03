
'use client';

import React from 'react';
import { use } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, X, Zap } from "lucide-react";
import { MarkdownRenderer } from '@/app/components/Common';
import Modal from '@/app/components/Modal';
import { BLOG_POSTS } from '@/app/lib/data';
import { useRouter } from 'next/navigation';

export default function BlogPostModal({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const router = useRouter();
  const post = BLOG_POSTS.find(p => p.id === parseInt(resolvedParams.id));

  if (!post) return null;

  return (
    <Modal>
      <motion.div
        layoutId={`card-${post.id}`}
        className="w-full h-full bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-2xl flex flex-col relative retro-shadow"
      >
        {/* Close Button - Absolute positioned, stays fixed relative to the card container */}
        <button 
            onClick={() => router.back()}
            className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-md transition-colors border border-white/20"
        >
            <X size={24} />
        </button>

        {/* Scrollable Container Wrapper */}
        <div className="w-full h-full overflow-y-auto overscroll-contain">
          
          {/* Header Image */}
          <div className="relative h-64 md:h-80 shrink-0">
            <motion.img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/90 to-transparent pt-20">
              <motion.h1 className="font-pixel-bold-cn text-3xl md:text-5xl text-white mb-2 shadow-black drop-shadow-md">
                {post.title}
              </motion.h1>
              <div className="flex flex-wrap gap-4 text-slate-300 text-sm font-mono">
                <span className="flex items-center gap-1"><Calendar size={14}/> {post.date}</span>
                <span className="flex items-center gap-1"><Clock size={14}/> {post.readTime}</span>
                <span className="text-yellow-400 font-bold bg-yellow-400/10 px-2 rounded border border-yellow-400/20">{post.level}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10 bg-white dark:bg-[#0b1221]">
            <div className="max-w-3xl mx-auto pb-20">
              <MarkdownRenderer content={post.content} />
              
              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-center">
                  <button 
                    onClick={() => router.back()}
                    className="px-8 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full font-pixel-bold-cn transition-colors text-slate-700 dark:text-slate-300 flex items-center gap-2 group"
                  >
                    <Zap className="text-yellow-500 group-hover:scale-110 transition-transform" size={18} /> 
                    任务完成 (关闭)
                  </button>
              </div>
            </div>
          </div>
          
        </div>
      </motion.div>
    </Modal>
  );
}
