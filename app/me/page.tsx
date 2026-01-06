
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Github, Twitter, X, Send } from "lucide-react";

/**
 * @AI-TEMP @TODO: AI Chat Imports
 * import { GoogleGenAI } from "@google/genai";
 * import { USER_CONTEXT } from '../lib/data';
 */

export default function MePage() {
   const [messages, setMessages] = useState([
      {
         role: 'model',
         text: '你好，冒险家！我是李面条的 AI 助手。你可以问我关于他的技术栈、项目经历，或者只是聊聊游戏！'
      }
   ]);
   const [input, setInput] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const chatEndRef = useRef<HTMLDivElement>(null);

   /**
    * @AI-TEMP @TODO: AI Chat State
    * const [chatInstance, setChatInstance] = useState(null);
    */

   useEffect(() => {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
   }, [messages]);

   /**
    * @AI-TEMP @TODO: AI Chat Initialization
    * useEffect(() => {
    *   if (!process.env.API_KEY) return;
    *   try {
    *     const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    *     const chat = ai.chats.create({
    *       model: 'gemini-2.5-flash',
    *       config: {
    *         systemInstruction: USER_CONTEXT,
    *       },
    *       history: [
    *           {
    *               role: "user",
    *               parts: [{ text: "Hello" }],
    *           },
    *           {
    *               role: "model",
    *               parts: [{ text: "你好，冒险家！我是李面条的 AI 助手。你可以问我关于他的技术栈、项目经历，或者只是聊聊游戏！" }],
    *           },
    *       ],
    *     });
    *     setChatInstance(chat);
    *   } catch (e) {
    *     console.error("Failed to init chat", e);
    *   }
    * }, []);
    */

   const handleSend = async () => {
      if (!input.trim() || isLoading) return;

      const userMessage = input;
      setInput('');
      setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
      setIsLoading(true);

      // Add an empty model message that we'll update as content streams in
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      try {
         const response = await fetch('/api/chat/', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               message: userMessage,
               history: messages,
            }),
         });

         if (!response.ok) {
            const errorData = await response.json();
            setMessages(prev => {
               const newMessages = [...prev];
               newMessages[newMessages.length - 1] = {
                  role: 'model',
                  text: `⚠️ ${errorData.error || '请求失败'}`
               };
               return newMessages;
            });
            return;
         }

         // Read the SSE stream
         const reader = response.body?.getReader();
         if (!reader) {
            setMessages(prev => {
               const newMessages = [...prev];
               newMessages[newMessages.length - 1] = {
                  role: 'model',
                  text: '⚠️ 无法读取响应'
               };
               return newMessages;
            });
            return;
         }

         const decoder = new TextDecoder();
         let accumulatedContent = '';

         while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split('\n');

            for (const line of lines) {
               if (line.startsWith('data: ')) {
                  const data = line.slice(6);

                  if (data === '[DONE]') {
                     // Stream completed
                     continue;
                  }

                  try {
                     const parsed = JSON.parse(data);

                     if (parsed.error) {
                        setMessages(prev => {
                           const newMessages = [...prev];
                           newMessages[newMessages.length - 1] = {
                              role: 'model',
                              text: `⚠️ ${parsed.error}`
                           };
                           return newMessages;
                        });
                        return;
                     }

                     if (parsed.content) {
                        accumulatedContent += parsed.content;
                        // Update the last message with accumulated content
                        setMessages(prev => {
                           const newMessages = [...prev];
                           newMessages[newMessages.length - 1] = {
                              role: 'model',
                              text: accumulatedContent
                           };
                           return newMessages;
                        });
                     }
                  } catch (e) {
                     // Ignore parse errors for incomplete JSON
                  }
               }
            }
         }

         // If no content was received, show a fallback message
         if (!accumulatedContent) {
            setMessages(prev => {
               const newMessages = [...prev];
               newMessages[newMessages.length - 1] = {
                  role: 'model',
                  text: '抱歉，我暂时无法回答这个问题。'
               };
               return newMessages;
            });
         }

      } catch (error) {
         console.error('Chat Error:', error);
         setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = {
               role: 'model',
               text: '系统过载... 连接丢失。请稍后再试。'
            };
            return newMessages;
         });
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <div className="container mx-auto px-4 py-12 animate-fade-in max-w-6xl">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Character Sheet (Left Column) */}
            <div className="lg:col-span-5 space-y-8">
               <div className="bg-white dark:bg-slate-800 border-2 border-slate-900 dark:border-slate-600 rounded-xl p-6 retro-shadow relative overflow-hidden transition-colors duration-300">
                  <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-yellow-400 to-orange-400"></div>
                  <div className="relative mt-8 flex flex-col items-center">
                     <div className="w-24 h-24 bg-white p-1 rounded-full border-4 border-white shadow-lg overflow-hidden mb-4">
                        <img src="/images/blog/avatar.jpg" alt="Avatar" className="w-full h-full bg-slate-100 object-cover" />
                     </div>
                     <h2 className="font-pixel-bold-cn text-2xl text-slate-900 dark:text-white mb-1 transition-colors duration-300">李面条</h2>
                     <div className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-xs font-mono text-slate-600 dark:text-slate-300 mb-4 transition-colors duration-300">
                        Level 30 • AI 产品经理
                     </div>

                     <p className="text-center text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed transition-colors duration-300">
                        擅长将人类的‘胡思乱想’翻译成 AI 听得懂的咒语。致力于用 Prompt 填补技术与魔法的鸿沟，热衷于让 MVP 的落地速度追上大脑的脑洞
                     </p>

                     <div className="w-full space-y-4">
                        <div>
                           <div className="flex justify-between text-xs font-bold mb-1 text-slate-500 dark:text-slate-400 transition-colors duration-300"><span>AI Whispering - The Magic</span><span>99%</span></div>
                           <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden transition-colors duration-300">
                              <div className="h-full bg-blue-500 w-[99%]"></div>
                           </div>
                        </div>
                        <div>
                           <div className="flex justify-between text-xs font-bold mb-1 text-slate-500 dark:text-slate-400 transition-colors duration-300"><span>AI Artifact Crafting - The Tool</span><span>85%</span></div>
                           <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden transition-colors duration-300">
                              <div className="h-full bg-purple-500 w-[85%]"></div>
                           </div>
                        </div>
                        <div>
                           <div className="flex justify-between text-xs font-bold mb-1 text-slate-500 dark:text-slate-400 transition-colors duration-300"><span>Idea to MVP Speed - The Agility</span><span>90%</span></div>
                           <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden transition-colors duration-300">
                              <div className="h-full bg-green-500 w-[90%]"></div>
                           </div>
                        </div>
                        <div>
                           <div className="flex justify-between text-xs font-bold mb-1 text-slate-500 dark:text-slate-400 transition-colors duration-300"><span>Cat Herding - The Soft Skill</span><span>80%</span></div>
                           <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden transition-colors duration-300">
                              <div className="h-full bg-orange-500 w-[80%]"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="flex gap-4 justify-center">
                  <button className="p-3 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 rounded-lg hover:-translate-y-1 transition-transform text-slate-700 dark:text-slate-300 shadow-sm"><Github size={20} /></button>
                  <button className="p-3 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 rounded-lg hover:-translate-y-1 transition-transform text-slate-900 dark:text-white shadow-sm"><X size={20} /></button>
                  <button className="p-3 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 rounded-lg hover:-translate-y-1 transition-transform text-white bg-[#07C160] border-none shadow-sm flex items-center justify-center">
                     <svg viewBox="0 0 1024 1024" width="20" height="20" fill="currentColor">
                        <path d="M698.54 345.918c0-109.13-116.828-197.604-260.916-197.604S176.716 236.786 176.716 345.918c0 112.592 124.08 200.57 267.34 195.83l16.126.65-3.952 24.3-19.102 96.096c48.814-25.034 101.996-61.998 126.98-84.596l6.396-5.466c75.244-42.556 128.036-98.58 128.036-166.814zM327.91 306.916c-17.65 0-31.99-14.34-31.99-31.99s14.34-31.99 31.99-31.99 31.99 14.34 31.99 31.99-14.34 31.99-31.99 31.99zm217.666 0c-17.65 0-31.99-14.34-31.99-31.99s14.34-31.99 31.99-31.99c17.65 0 31.99 14.34 31.99 31.99s-14.34 31.99-31.99 31.99z" />
                        <path d="M847.284 668.21c0-83.31-89.814-150.852-200.57-150.852-110.756 0-200.57 67.542-200.57 150.852 0 83.31 89.814 150.854 200.57 150.854 23.498 0 46.292-3.132 68.04-8.878l57.514 31.298c9.648 6.476 19.222 10.372 26.542 10.372 2.622 0 4.888-0.494 6.782-1.356-0.306-0.64-5.26-28.718-10.662-58.42l-1.636-9.152c33.314-25.752 53.99-58.384 53.99-94.718zM578.844 639.112c-12.722 0-23.064-10.342-23.064-23.064s10.342-23.064 23.064-23.064 23.064 10.342 23.064 23.064-10.342 23.064-23.064 23.064zm134.464 0c-12.722 0-23.064-10.342-23.064-23.064s10.342-23.064 23.064-23.064c12.722 0 23.064 10.342 23.064 23.064s-10.344 23.064-23.064 23.064z" />
                     </svg>
                  </button>
               </div>
            </div>

            {/* AI Chat (Right Column) */}
            <div className="lg:col-span-7 h-[600px] flex flex-col retro-shadow rounded-xl overflow-hidden border-2 border-slate-900 dark:border-slate-800 transition-colors duration-300">
               <div className="bg-gray-100 dark:bg-slate-900 p-4 border-b-2 border-slate-200 dark:border-slate-800 flex items-center justify-between transition-colors duration-300">
                  <div className="flex items-center gap-3">
                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
                     <span className="ml-2 font-mono text-sm text-slate-600 dark:text-slate-400 font-bold transition-colors duration-300">AI_TERMINAL_V2.0</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-500 text-xs font-mono transition-colors duration-300">
                     <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                     ONLINE
                  </div>
               </div>

               <div className="flex-grow bg-white dark:bg-slate-950 p-6 overflow-y-auto custom-scrollbar space-y-6 font-mono text-sm transition-colors duration-300">
                  {messages.map((msg, i) => (
                     <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-4 rounded-lg shadow-sm ${msg.role === 'user'
                           ? 'bg-blue-500 text-white rounded-br-none'
                           : 'bg-gray-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-gray-200 dark:border-slate-700 rounded-bl-none transition-colors duration-300'
                           }`}>
                           {msg.role === 'model' && <div className="text-[10px] text-green-600 dark:text-green-400 mb-1 uppercase tracking-wider font-bold transition-colors duration-300">System</div>}
                           <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                        </div>
                     </div>
                  ))}
                  {isLoading && (
                     <div className="flex justify-start">
                        <div className="bg-gray-100 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-4 rounded-lg rounded-bl-none flex gap-2 items-center transition-colors duration-300">
                           <div className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce"></div>
                           <div className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce delay-75"></div>
                           <div className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce delay-150"></div>
                        </div>
                     </div>
                  )}
                  <div ref={chatEndRef} />
               </div>

               <div className="bg-gray-100 dark:bg-slate-900 p-4 border-t-2 border-slate-200 dark:border-slate-800 flex gap-3 transition-colors duration-300">
                  <input
                     type="text"
                     value={input}
                     onChange={(e) => setInput(e.target.value)}
                     onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                     placeholder="输入指令或问题..."
                     disabled={isLoading}
                     className="flex-grow bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white px-4 py-3 rounded focus:outline-none focus:border-green-500 font-mono transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                  <button
                     onClick={handleSend}
                     disabled={isLoading || !input.trim()}
                     className="bg-green-600 hover:bg-green-500 text-white px-6 rounded font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center active:scale-95 shadow-sm"
                  >
                     {isLoading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Send size={18} />}
                  </button>
               </div>
            </div>

         </div>
      </div>
   );
}
