'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeContext';
import { PixelButton } from './PixelButton';
import { 
  Terminal, 
  Code2, 
  Gamepad2, 
  User, 
  Search, 
  Moon, 
  Sun,
  Github,
  Twitter,
  Linkedin,
  Cpu,
  Menu,
  X
} from "lucide-react";

export const NavBar = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: '/', label: '首页', icon: <Terminal size={18} /> },
    { id: '/explore', label: '探索', icon: <Code2 size={18} /> },
    { id: '/lab', label: '实验室', icon: <Cpu size={18} /> },
    { id: '/me', label: '角色', icon: <User size={18} /> },
  ];

  // Helper to check if active (handle explore sub-routes)
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-[#050b14]/90 backdrop-blur-md border-b border-slate-300 dark:border-gray-800 h-16 flex items-center justify-between px-4 md:px-8 transition-colors duration-300">
        <Link href="/" className="flex items-center gap-2 cursor-pointer group z-50" onClick={() => setIsMenuOpen(false)}>
          <div className="w-8 h-8 bg-yellow-400 flex items-center justify-center rounded-sm retro-shadow-yellow group-hover:translate-y-1 transition-transform shrink-0">
            <Gamepad2 className="text-black" size={20} />
          </div>
          <span className="font-pixel-bold-cn text-base md:text-xl tracking-tighter text-slate-900 dark:text-white truncate max-w-[120px] md:max-w-none">
            李面条的<span className="text-yellow-600 dark:text-yellow-400">实验室</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.id}
              className={`flex items-center gap-2 font-pixel-bold-cn text-xl transition-colors ${
                isActive(item.id)
                  ? 'text-yellow-600 dark:text-yellow-400' 
                  : 'text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4 z-50">
          {/* Desktop Tools */}
          <div className="hidden md:flex items-center gap-4">
            <Search className="text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white cursor-pointer" size={20} />
            <button 
              onClick={toggleTheme}
              className="p-2 border-2 border-slate-300 dark:border-gray-700 rounded-sm hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors text-slate-700 dark:text-yellow-400 bg-white dark:bg-slate-900"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Start Game Button - Always Visible */}
          <div>
              <PixelButton />
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden w-11 h-11 flex items-center justify-center text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 dark:bg-[#050b14]/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col animate-fade-in">
           <div className="flex flex-col gap-6 items-center w-full">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.id}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 font-pixel-bold-cn text-2xl w-full justify-center py-2 border-b border-slate-100 dark:border-slate-800 ${
                    isActive(item.id)
                      ? 'text-yellow-600 dark:text-yellow-400' 
                      : 'text-slate-600 dark:text-gray-400'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
              
              <div className="flex gap-6 mt-8 items-center">
                 <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
                    <Search className="text-slate-500 dark:text-gray-400" size={20} />
                    <span className="text-sm text-slate-500 dark:text-gray-400 font-pixel-bold-cn">Search</span>
                 </div>
                 
                 <button 
                    onClick={toggleTheme}
                    className="p-3 border-2 border-slate-300 dark:border-gray-700 rounded-full hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors text-slate-700 dark:text-yellow-400 bg-white dark:bg-slate-900"
                 >
                    {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                 </button>
              </div>
           </div>
        </div>
      )}
    </>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-[#020617] border-t border-slate-200 dark:border-slate-800 py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 opacity-80"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
               <div className="w-8 h-8 bg-yellow-400 flex items-center justify-center rounded-sm retro-shadow-yellow">
                  <Gamepad2 className="text-black" size={20} />
               </div>
               <span className="font-pixel-bold-cn text-xl text-slate-900 dark:text-white">李面条的<span className="text-yellow-600 dark:text-yellow-400">实验室</span></span>
            </Link>
            <p className="text-slate-500 dark:text-gray-400 text-sm max-w-xs leading-relaxed">
              一个充满像素、代码和复古梦想的数字角落。在这里，每一行代码都是一次冒险。
            </p>
            <p className="text-xs text-slate-400 font-mono mt-4">
              © 2024 李面条. Press Start.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="font-pixel-bold-cn text-lg text-slate-900 dark:text-white uppercase tracking-wider mb-2 border-b-2 border-yellow-400 inline-block pb-1">
              快速传送
            </h4>
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-slate-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors text-sm font-medium hover:translate-x-1 duration-200 text-left">回到首页</Link>
              <Link href="/explore" className="text-slate-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors text-sm font-medium hover:translate-x-1 duration-200 text-left">探索日志</Link>
              <Link href="/lab" className="text-slate-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors text-sm font-medium hover:translate-x-1 duration-200 text-left">疯狂实验室</Link>
              <Link href="/me" className="text-slate-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors text-sm font-medium hover:translate-x-1 duration-200 text-left">角色面板</Link>
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="font-pixel-bold-cn text-lg text-slate-900 dark:text-white uppercase tracking-wider mb-2 border-b-2 border-pink-500 inline-block pb-1">
              保持联络
            </h4>
            <div className="flex gap-3">
               <a href="#" className="w-10 h-10 flex items-center justify-center bg-slate-200 dark:bg-slate-800 rounded hover:bg-blue-500 hover:text-white transition-all duration-300">
                 <Twitter size={18} />
               </a>
               <a href="#" className="w-10 h-10 flex items-center justify-center bg-slate-200 dark:bg-slate-800 rounded hover:bg-slate-900 hover:text-white transition-all duration-300">
                 <Github size={18} />
               </a>
               <a href="#" className="w-10 h-10 flex items-center justify-center bg-slate-200 dark:bg-slate-800 rounded hover:bg-blue-700 hover:text-white transition-all duration-300">
                 <Linkedin size={18} />
               </a>
            </div>
            <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-900 rounded text-xs text-yellow-800 dark:text-yellow-500 font-mono">
               Status: <span className="font-bold text-green-600 dark:text-green-400 animate-pulse">● BUILDING</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
