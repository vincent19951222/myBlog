
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Github, Twitter, Linkedin, Send } from "lucide-react";
import { USER_CONTEXT } from '../lib/data';

export default function MePage() {
  const [messages, setMessages] = useState([
    { 
      role: 'model', 
      text: '你好，冒险家！我是李面条的 AI 助手。你可以问我关于他的技术栈、项目经历，或者只是聊聊游戏！' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatInstance, setChatInstance] = useState(null);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!process.env.API_KEY) return;
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: USER_CONTEXT,
        },
        history: [
            {
                role: "user",
                parts: [{ text: "Hello" }],
            },
            {
                role: "model",
                parts: [{ text: "你好，冒险家！我是李面条的 AI 助手。你可以问我关于他的技术栈、项目经历，或者只是聊聊游戏！" }],
            },
        ],
      });
      setChatInstance(chat);
    } catch (e) {
      console.error("Failed to init chat", e);
    }
  }, []);

  const handleSend = async () => {
    if (!input.trim() || !chatInstance) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const result = await chatInstance.sendMessage({ message: userMessage });
      const responseText = result.text;
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "系统过载... 连接丢失。请稍后再试。(Error)" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in max-w-6xl">
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Character Sheet (Left Column) */}
          <div className="lg:col-span-5 space-y-8">
             <div className="bg-white dark:bg-slate-800 border-2 border-slate-900 dark:border-slate-600 rounded-xl p-6 retro-shadow relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-yellow-400 to-orange-400"></div>
                <div className="relative mt-8 flex flex-col items-center">
                   <div className="w-24 h-24 bg-white p-1 rounded-full border-4 border-white shadow-lg overflow-hidden mb-4">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" className="w-full h-full bg-slate-100" />
                   </div>
                   <h2 className="font-pixel-bold-cn text-2xl text-slate-900 dark:text-white mb-1">李面条</h2>
                   <div className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-xs font-mono text-slate-600 dark:text-slate-300 mb-4">
                     Level 28 • 前端法师
                   </div>
                   
                   <p className="text-center text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                     致力于创造像素完美的 Web 体验。喜欢钻研底层原理，同时也热衷于游戏开发。
                   </p>

                   <div className="w-full space-y-4">
                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1 text-slate-500 dark:text-slate-400"><span>React / Next.js</span><span>90%</span></div>
                        <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                           <div className="h-full bg-blue-500 w-[90%]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1 text-slate-500 dark:text-slate-400"><span>WebGL / Three.js</span><span>75%</span></div>
                        <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                           <div className="h-full bg-purple-500 w-[75%]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1 text-slate-500 dark:text-slate-400"><span>Node.js</span><span>80%</span></div>
                        <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                           <div className="h-full bg-green-500 w-[80%]"></div>
                        </div>
                      </div>
                   </div>
                </div>
             </div>

             <div className="flex gap-4 justify-center">
                <button className="p-3 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 rounded-lg hover:-translate-y-1 transition-transform text-slate-700 dark:text-slate-300"><Github size={20}/></button>
                <button className="p-3 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 rounded-lg hover:-translate-y-1 transition-transform text-blue-500"><Twitter size={20}/></button>
                <button className="p-3 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 rounded-lg hover:-translate-y-1 transition-transform text-blue-700"><Linkedin size={20}/></button>
             </div>
          </div>

          {/* AI Chat (Right Column) */}
          <div className="lg:col-span-7 h-[600px] flex flex-col">
             <div className="bg-slate-900 rounded-t-xl p-4 border-2 border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                   <span className="ml-2 font-mono text-sm text-slate-400">AI_TERMINAL_V2.0</span>
                </div>
                <div className="flex items-center gap-2 text-green-500 text-xs font-mono">
                   <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                   ONLINE
                </div>
             </div>
             
             <div className="flex-grow bg-slate-950 border-x-2 border-slate-800 p-6 overflow-y-auto custom-scrollbar space-y-6 font-mono text-sm">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                     <div className={`max-w-[80%] p-4 rounded-lg ${
                       msg.role === 'user' 
                         ? 'bg-blue-600 text-white rounded-br-none' 
                         : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none'
                     }`}>
                        {msg.role === 'model' && <div className="text-[10px] text-green-400 mb-1 uppercase tracking-wider">System</div>}
                        <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                     </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                     <div className="bg-slate-800 border border-slate-700 p-4 rounded-lg rounded-bl-none flex gap-2 items-center">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></div>
                     </div>
                  </div>
                )}
                <div ref={chatEndRef} />
             </div>

             <div className="bg-slate-900 p-4 border-2 border-slate-800 rounded-b-xl flex gap-3">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="输入指令或问题..."
                  className="flex-grow bg-slate-950 border border-slate-700 text-white px-4 py-3 rounded focus:outline-none focus:border-green-500 font-mono transition-colors"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-green-600 hover:bg-green-500 text-white px-6 rounded font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <Send size={18} />
                </button>
             </div>
          </div>

       </div>
    </div>
  );
}
