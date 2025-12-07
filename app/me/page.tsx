
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Github, Twitter, Linkedin, Send } from "lucide-react";

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

    /**
     * @AI-TEMP @TODO: AI Chat Send Logic
     * try {
     *   const result = await chatInstance.sendMessage({ message: userMessage });
     *   const responseText = result.text;
     *   setMessages(prev => [...prev, { role: 'model', text: responseText }]);
     * } catch (error) {
     *   console.error("Chat Error:", error);
     *   setMessages(prev => [...prev, { role: 'model', text: "系统过载... 连接丢失。请稍后再试。(Error)" }]);
     * } finally {
     *   setIsLoading(false);
     * }
     */
    // 模拟 AI 思考延迟
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "AI 模型适配中，请过段时间再来看看吧。" 
      }]);
      setIsLoading(false);
    }, 1500);
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
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" className="w-full h-full bg-slate-100" />
                   </div>
                   <h2 className="font-pixel-bold-cn text-2xl text-slate-900 dark:text-white mb-1 transition-colors duration-300">李面条</h2>
                   <div className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-xs font-mono text-slate-600 dark:text-slate-300 mb-4 transition-colors duration-300">
                     Level 28 • 前端法师
                   </div>
                   
                   <p className="text-center text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed transition-colors duration-300">
                     致力于创造像素完美的 Web 体验。喜欢钻研底层原理，同时也热衷于游戏开发。
                   </p>

                   <div className="w-full space-y-4">
                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1 text-slate-500 dark:text-slate-400 transition-colors duration-300"><span>React / Next.js</span><span>90%</span></div>
                        <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden transition-colors duration-300">
                           <div className="h-full bg-blue-500 w-[90%]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1 text-slate-500 dark:text-slate-400 transition-colors duration-300"><span>WebGL / Three.js</span><span>75%</span></div>
                        <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden transition-colors duration-300">
                           <div className="h-full bg-purple-500 w-[75%]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1 text-slate-500 dark:text-slate-400 transition-colors duration-300"><span>Node.js</span><span>80%</span></div>
                        <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden transition-colors duration-300">
                           <div className="h-full bg-green-500 w-[80%]"></div>
                        </div>
                      </div>
                   </div>
                </div>
             </div>

             <div className="flex gap-4 justify-center">
                <button className="p-3 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 rounded-lg hover:-translate-y-1 transition-transform text-slate-700 dark:text-slate-300 shadow-sm"><Github size={20}/></button>
                <button className="p-3 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 rounded-lg hover:-translate-y-1 transition-transform text-blue-500 shadow-sm"><Twitter size={20}/></button>
                <button className="p-3 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 rounded-lg hover:-translate-y-1 transition-transform text-blue-700 shadow-sm"><Linkedin size={20}/></button>
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
                     <div className={`max-w-[80%] p-4 rounded-lg shadow-sm ${
                       msg.role === 'user' 
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
