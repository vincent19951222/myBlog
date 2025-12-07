
'use client';
import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ChevronDown } from "lucide-react";

export const PixelLandscape = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-pixel-stars opacity-0 dark:opacity-100 transition-opacity duration-1000 animate-pulse-slow"></div>
      <div className="absolute top-20 right-20 w-24 h-24 rounded-full bg-yellow-300 dark:bg-slate-200 blur-[60px] opacity-60 dark:opacity-30 transition-colors duration-1000"></div>
      <div className="absolute top-20 left-[10%] pixel-cloud animate-float-slow opacity-80 dark:opacity-20 transition-opacity duration-1000"></div>
      <div className="absolute top-40 left-[60%] pixel-cloud animate-float-fast scale-75 opacity-60 dark:opacity-10 transition-opacity duration-1000"></div>
      <div className="absolute top-10 left-[80%] pixel-cloud animate-float-medium scale-50 opacity-50 dark:opacity-10 transition-opacity duration-1000"></div>
      <div className="absolute bottom-0 left-0 right-0 h-64 flex items-end justify-center opacity-80 dark:opacity-60 transition-opacity duration-1000">
         <div className="w-full h-full relative">
            <div className="absolute bottom-0 left-[-10%] w-full h-48 bg-indigo-300 dark:bg-slate-800" style={{ clipPath: 'polygon(0% 100%, 20% 20%, 45% 100%, 60% 60%, 80% 100%)' }}></div>
            <div className="absolute bottom-0 right-[-10%] w-full h-64 bg-indigo-400 dark:bg-slate-700" style={{ clipPath: 'polygon(10% 100%, 40% 10%, 70% 100%)' }}></div>
         </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-emerald-500 dark:bg-slate-900 transition-colors duration-1000" style={{ clipPath: 'polygon(0% 100%, 0% 40%, 15% 30%, 30% 50%, 50% 20%, 70% 60%, 85% 40%, 100% 80%, 100% 100%)' }}></div>
      <div className="absolute bottom-10 left-[10%] w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[40px] border-b-emerald-700 dark:border-b-slate-800"></div>
      <div className="absolute bottom-20 left-[15%] w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[60px] border-b-emerald-800 dark:border-b-slate-700"></div>
      <div className="absolute bottom-12 right-[20%] w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[40px] border-b-emerald-700 dark:border-b-slate-800"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-sky-50 via-transparent to-transparent dark:from-[#050b14] dark:via-transparent dark:to-transparent transition-colors duration-1000"></div>
    </div>
  );
};

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const blur = useTransform(scrollY, [0, 300], ["blur(0px)", "blur(10px)"]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  return (
    <div className="relative h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center px-4 overflow-hidden transition-colors duration-1000 bg-gradient-to-b from-sky-200 to-sky-50 dark:from-[#0f172a] dark:to-[#050b14]">
      
      <PixelLandscape />

      <motion.div 
        style={{ y, opacity, filter: blur, scale }}
        className="z-10 max-w-5xl relative flex flex-col items-center"
      >
        <h1 className="font-pixel-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 text-slate-900 dark:text-white text-shadow-lg transition-colors duration-300 min-h-[120px] flex items-center justify-center">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 dark:from-yellow-400 dark:via-orange-400 dark:to-red-400">
            <Typewriter
              options={{
                strings: ['I build things.', 'I make products.', 'Welcome to my Blog.'],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                cursorClassName: 'Typewriter__cursor',
              }}
            />
          </div>
        </h1>

        <p className="font-pixel-bold-cn text-lg md:text-2xl text-slate-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto transition-colors duration-300 drop-shadow-sm">
          探索数字花园、学习代码和构建有趣事物的最有趣复古方式。
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link href="/explore" className="hover-glitch px-6 py-3 bg-yellow-400 text-black font-pixel-bold-cn text-sm md:text-base border-2 border-black dark:border-white rounded-sm retro-shadow-yellow hover:shadow-none transition-all w-full sm:w-auto text-center">
            读读文章
          </Link>
          <Link href="/lab" className="hover-glitch px-6 py-3 bg-white dark:bg-[#1e293b] text-slate-900 dark:text-white font-pixel-bold-cn text-sm md:text-base border-2 border-slate-400 dark:border-gray-500 rounded-sm retro-shadow hover:shadow-none transition-all w-full sm:w-auto text-center">
            看看项目
          </Link>
          <Link href="/me" className="hover-glitch px-6 py-3 bg-white dark:bg-[#1e293b] text-slate-900 dark:text-white font-pixel-bold-cn text-sm md:text-base border-2 border-slate-400 dark:border-gray-500 rounded-sm retro-shadow hover:shadow-none transition-all w-full sm:w-auto text-center">
            随便聊聊
          </Link>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 left-0 right-0 z-20 flex flex-col items-center justify-center text-slate-600 dark:text-gray-400 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
         <span className="font-pixel-bold-cn text-base mb-1">下滑解锁更多</span>
         <ChevronDown size={28} />
      </motion.div>
    </div>
  );
};
