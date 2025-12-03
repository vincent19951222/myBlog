'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Gamepad2 } from 'lucide-react';

export const PixelButton = () => {
  const [score, setScore] = useState<{ id: number; x: number; y: number; text: string }[]>([]);
  const [clickCount, setClickCount] = useState(0);
  const [cooldown, setCooldown] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Initialize Audio Context
  useEffect(() => {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioContext) {
      audioContextRef.current = new AudioContext();
    }
    
    return () => {
        if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
            audioContextRef.current.close();
        }
    }
  }, []);

  const play8BitSound = () => {
    if (!audioContextRef.current) return;
    
    // Resume context if suspended (browser policy)
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }

    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = 'square'; // 8-bit sound characteristic
    oscillator.frequency.setValueAtTime(440, ctx.currentTime); // A4
    oscillator.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1); // Slide up

    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start();
    oscillator.stop(ctx.currentTime + 0.1);
  };

  const playEasterEggSound = () => {
     if (!audioContextRef.current) return;
      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }
     const ctx = audioContextRef.current;
     
     // Simple arpeggio
     const notes = [523.25, 659.25, 783.99, 1046.50]; // C E G C
     notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'square';
        osc.frequency.value = freq;
        
        gain.gain.setValueAtTime(0.1, ctx.currentTime + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.1 + 0.1);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.1);
        osc.stop(ctx.currentTime + i * 0.1 + 0.1);
     });
  };

  const handleClick = (e: React.MouseEvent) => {
    if (cooldown) {
        // Optional: Play a "denied" sound
        return;
    }

    play8BitSound();
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 150);

    // Add score popup
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
        const newScore = {
            id: Date.now(),
            x: 0, // Relative to button center roughly
            y: -20,
            text: "SCORE +100"
        };
        setScore(prev => [...prev, newScore]);
        
        // Remove score after animation
        setTimeout(() => {
            setScore(prev => prev.filter(s => s.id !== newScore.id));
        }, 1000);
    }

    // Easter egg logic
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    if (newClickCount >= 3) {
        triggerEasterEgg();
        setClickCount(0);
    }
  };

  const triggerEasterEgg = () => {
      setCooldown(true);
      playEasterEggSound();
      
      const eggId = Date.now() + 'egg';
      setScore(prev => [...prev, {
          id: Date.now(),
          x: 0,
          y: -40,
          text: "别点了，鼠标要坏了!"
      }]);

      setTimeout(() => {
           setScore(prev => prev.filter(s => s.text !== "别点了，鼠标要坏了!"));
           setCooldown(false);
      }, 30000); // 30s cooldown
  };

  return (
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        onClick={handleClick}
        className={`
            relative
            bg-yellow-400 
            text-slate-900 
            px-2 md:px-4 py-1 
            font-pixel-bold-cn 
            text-sm md:text-lg 
            font-bold 
            rounded-sm 
            transition-all 
            duration-75
            border-2 
            border-yellow-600
            select-none
            flex items-center gap-2
            ${isPressed ? 'translate-y-[4px] border-b-2 shadow-none' : 'border-b-[6px] hover:border-b-[4px] hover:translate-y-[2px]'}
            ${cooldown ? 'opacity-50 cursor-not-allowed grayscale' : 'hover:bg-yellow-300'}
        `}
        disabled={cooldown}
      >
        <Gamepad2 size={18} className={isPressed ? 'scale-90' : ''} />
        START GAME
      </button>

      {/* Score Popups */}
      {score.map((s) => (
        <div
          key={s.id}
          className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none z-50 animate-float-up text-xs font-pixel-bold-cn text-green-500 whitespace-nowrap text-shadow-sm"
          style={{ top: s.y }}
        >
          {s.text}
        </div>
      ))}
      
      <style jsx>{`
        @keyframes float-up {
          0% { opacity: 1; transform: translate(-50%, 0) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -30px) scale(1.2); }
        }
        .animate-float-up {
          animation: float-up 1s ease-out forwards;
        }
        .text-shadow-sm {
            text-shadow: 1px 1px 0 #000;
        }
      `}</style>
    </div>
  );
};
