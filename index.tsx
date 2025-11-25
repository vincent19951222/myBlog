
import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { GoogleGenAI } from "@google/genai";
import { 
  Terminal, 
  Code2, 
  Gamepad2, 
  User, 
  Search, 
  Moon, 
  Sun,
  ArrowRight, 
  ArrowLeft,
  ExternalLink,
  Cpu,
  Zap,
  MessageSquare,
  Send,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Calendar,
  Clock,
  Trophy,
  Quote,
  Image as ImageIcon,
  ChevronDown,
  Lock,
  Unlock
} from "lucide-react";

// --- Configuration & Data ---

const USER_CONTEXT = `
  You are an AI assistant for a developer named "PixelDev". 
  PixelDev is a Senior Frontend Engineer who loves React, WebGL, and retro games.
  - Location: San Francisco, CA.
  - Tech Stack: React, TypeScript, Node.js, Three.js, Python.
  - Current Project: Building a retro-styled OS in the browser.
  - Interests: Pixel art, synthesizers, hiking.
  - Contact: pixeldev@example.com
  
  Your personality is helpful, slightly witty, and you use gaming terminology occasionally (e.g., "Level up", "Quest completed").
  Answer questions about PixelDev based on this info. If you don't know, say you need to check the archives.
`;

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Legend of React Hooks",
    excerpt: "Mastering useEffect and useState to control the flow of time and state in your application.",
    level: "Beginner",
    date: "Nov 12, 2023",
    readTime: "5 min read",
    xp: "500 XP",
    color: "bg-green-500",
    image: "https://placehold.co/600x300/166534/4ade80?text=React+Hooks",
    content: `
# The Legend of React Hooks

Long ago, in the kingdom of Class Components, state was trapped within complex \`this\` bindings and lifecycle methods. Developers struggled to share logic between components, leading to the dreaded **Wrapper Hell**.

Then came **Hooks** (v16.8), a set of magical artifacts that allowed functional components to wield the power of state and side effects.

## 1. The Hookshot: useState

The most fundamental tool in your inventory. It allows you to persist values between renders.

\`\`\`javascript
const [health, setHealth] = useState(100);

// Taking damage
setHealth(prev => prev - 10);
\`\`\`

## 2. The Time Stone: useEffect

Controls side effects—fetching data, subscriptions, or manually changing the DOM. It replaces \`componentDidMount\`, \`componentDidUpdate\`, and \`componentWillUnmount\`.

\`\`\`javascript
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick...");
  }, 1000);

  return () => clearInterval(timer); // Cleanup phase
}, []);
\`\`\`

### Key Rules of Hooks
1. Only call Hooks at the top level.
2. Only call Hooks from React function components.
3. Don't call Hooks inside loops, conditions, or nested functions.

> "With great power comes great responsibility. Do not forget the dependency array!" - The Elder Dev

## Visualizing the Flow

![React Flow Diagram](https://placehold.co/600x200/0f172a/FFF?text=Render+Cycle+Visualized)

## Custom Hooks

You can craft your own weapons by combining existing hooks. This is the true power of the functional paradigm.

- **useWindowSize**: Track viewport dimensions.
- **useLocalStorage**: Persist state to browser storage.
- **useFetch**: Simplified data fetching.

Master these tools, and you shall conquer the frontend realm!
    `
  },
  {
    id: 2,
    title: "CSS Grid Dungeons",
    excerpt: "Navigating the 2-dimensional layout system to build complex UI structures without tables.",
    level: "Intermediate",
    date: "Dec 05, 2023",
    readTime: "8 min read",
    xp: "750 XP",
    color: "bg-blue-500",
    image: "https://placehold.co/600x300/1e40af/60a5fa?text=CSS+Grid",
    content: `
# Entering the Grid Dungeon

CSS Grid Layout is the most powerful layout system available in CSS. It is a **2-dimensional system**, meaning it can handle both columns and rows, unlike Flexbox which is largely 1-dimensional.

## Defining the Map

To start a grid, you define the container as a grid and specify the columns and rows.

\`\`\`css
.dungeon-floor {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
\`\`\`

## Placing Items

You can place items into specific cells, spanning multiple rows or columns.

### The Coordinates
1. **grid-column-start**
2. **grid-column-end**
3. **grid-row-start**
4. **grid-row-end**

\`\`\`css
.treasure-chest {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
}
\`\`\`

![Grid Layout Example](https://placehold.co/600x250/1e3a8a/FFF?text=Grid+Inspector+Tool)

## Common Patterns

There are several legendary layouts you can build:

- **The Holy Grail Layout**: Header, Sidebar, Main, Footer.
- **The 12-Column Grid**: Standard design system foundation.
- **The Masonry Layout**: Staggered content blocks.

> "Grid is not the enemy of Flexbox. They are allies in the war against float."

Equip your CSS Grid skills to build layouts that adapt to any viewport size!
    `
  },
  {
    id: 3,
    title: "Boss Fight: WebGL Shaders",
    excerpt: "Writing GLSL code to create stunning visual effects that run directly on the GPU.",
    level: "Advanced",
    date: "Jan 20, 2024",
    readTime: "15 min read",
    xp: "2000 XP",
    color: "bg-purple-500",
    image: "https://placehold.co/600x300/6b21a8/d8b4fe?text=WebGL+Magic",
    content: `
# Boss Fight: The Shader Realm

Shaders are small programs that run on the GPU. They are written in **GLSL** (OpenGL Shading Language), which looks a lot like C.

## Vertex vs Fragment

There are two main types of shaders you need to master:

1. **Vertex Shader**: Handles the position of vertices in 3D space. It determines the shape.
2. **Fragment Shader**: Handles the color of each pixel. It determines the look.

### 1. Vertex Shader Example

\`\`\`glsl
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
\`\`\`

### 2. Fragment Shader Example

Here is a spell to color every pixel red:

\`\`\`glsl
void main() {
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}
\`\`\`

## Uniforms and Varyings

* **Uniforms**: Global variables that stay the same for all vertices/fragments in a draw call (e.g., Time, Resolution).
* **Varyings**: Variables passed from the vertex shader to the fragment shader, interpolated across the surface.

![Shader Pipeline](https://placehold.co/600x200/581c87/FFF?text=Vertex+To+Fragment+Pipeline)

## The Game Loop

To animate shaders, you pass a \`u_time\` uniform that increases every frame.

\`\`\`javascript
const material = new THREE.ShaderMaterial({
  uniforms: {
    u_time: { value: 0 }
  },
  vertexShader: vShader,
  fragmentShader: fShader
});
\`\`\`

> "Math is the language of the universe, and shaders are its poetry."

Defeating this boss unlocks the ability to create fluid simulations, particle systems, and post-processing effects!
    `
  },
  {
    id: 4,
    title: "The Typescript Temple",
    excerpt: "Exploring the ancient ruins of static typing to prevent runtime errors and improve developer experience.",
    level: "Advanced",
    date: "Feb 14, 2024",
    readTime: "10 min read",
    xp: "1500 XP",
    color: "bg-blue-600",
    image: "https://placehold.co/600x300/2563eb/93c5fd?text=TypeScript",
    content: `
# The TypeScript Temple

Many adventurers fear the strict guards of the TypeScript Temple, but those who follow its rules are rewarded with fewer bugs and better autocomplete.

## Interfaces vs Types

The eternal debate.

\`\`\`typescript
interface Hero {
  name: string;
  hp: number;
}

type Villian = {
  name: string;
  power: number;
}
\`\`\`

## Generics

The ability to create reusable components that work with any data type.

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}
\`\`\`

Master these scrolls!
    `
  }
];

const PROJECTS = [
  {
    id: 1,
    title: "Retro Snake",
    desc: "A classic snake game built with pure JavaScript and HTML5 Canvas.",
    tags: ["Game", "Canvas"],
    image: "https://placehold.co/400x250/1e293b/FACC15?text=SNAKE"
  },
  {
    id: 2,
    title: "Weather Quest",
    desc: "Gamified weather app. Earn XP for checking the forecast daily.",
    tags: ["API", "React"],
    image: "https://placehold.co/400x250/1e293b/4ADE80?text=WEATHER"
  },
  {
    id: 3,
    title: "Code Editor Pro",
    desc: "A lightweight code editor running entirely in the browser using WebAssembly.",
    tags: ["WASM", "Tool"],
    image: "https://placehold.co/400x250/1e293b/F472B6?text=EDITOR"
  },
  {
    id: 4,
    title: "Pixel Painter",
    desc: "A 16x16 grid painter to create your own pixel art assets.",
    tags: ["Tool", "Art"],
    image: "https://placehold.co/400x250/1e293b/A78BFA?text=PAINT"
  }
];

// --- Helper Components ---

// Enhanced Markdown Renderer
const MarkdownRenderer = ({ content }) => {
  const lines = content.split('\n');
  const elements = [];
  let inCodeBlock = false;
  let codeBlockContent = [];
  let codeLanguage = '';

  // Helper to parse inline formatting (Bold, Code)
  const parseInline = (text) => {
    const parts = [];
    let currentText = '';
    let i = 0;

    while (i < text.length) {
      // Check for bold (**text**)
      if (text.slice(i, i + 2) === '**') {
        if (currentText) parts.push(<span key={`t-${i}`}>{currentText}</span>);
        currentText = '';
        i += 2;
        let end = text.indexOf('**', i);
        if (end === -1) end = text.length;
        parts.push(<strong key={`b-${i}`} className="font-bold text-slate-900 dark:text-white">{text.slice(i, end)}</strong>);
        i = end + 2;
      }
      // Check for inline code (`text`)
      else if (text[i] === '`') {
        if (currentText) parts.push(<span key={`t-${i}`}>{currentText}</span>);
        currentText = '';
        i++;
        let end = text.indexOf('`', i);
        if (end === -1) end = text.length;
        parts.push(<code key={`c-${i}`} className="bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm font-mono text-pink-600 dark:text-pink-400">{text.slice(i, end)}</code>);
        i = end + 1;
      }
      else {
        currentText += text[i];
        i++;
      }
    }
    if (currentText) parts.push(<span key="last">{currentText}</span>);
    return parts;
  };

  lines.forEach((line, index) => {
    // Handle Code Blocks
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        // End of code block
        elements.push(
          <div key={`code-${index}`} className="my-6 bg-slate-900 rounded-md overflow-hidden border border-slate-700 retro-shadow">
            <div className="bg-slate-800 px-4 py-1 text-xs text-slate-400 font-mono border-b border-slate-700 flex justify-between">
              <span>{codeLanguage || 'CODE'}</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
            </div>
            <pre className="p-4 overflow-x-auto">
              <code className="font-mono text-sm text-green-400 leading-relaxed">
                {codeBlockContent.join('\n')}
              </code>
            </pre>
          </div>
        );
        inCodeBlock = false;
        codeBlockContent = [];
        codeLanguage = '';
      } else {
        // Start of code block
        inCodeBlock = true;
        codeLanguage = line.trim().replace('```', '').toUpperCase();
      }
      return;
    }

    if (inCodeBlock) {
      codeBlockContent.push(line);
      return;
    }

    const trimLine = line.trim();

    // Handle Headings (Standard Sans-Serif Font)
    if (line.startsWith('# ')) {
      elements.push(<h1 key={index} className="font-bold text-3xl md:text-4xl text-slate-900 dark:text-white mt-10 mb-6 tracking-tight">{line.replace('# ', '')}</h1>);
    } else if (line.startsWith('## ')) {
      elements.push(<h2 key={index} className="font-bold text-2xl md:text-3xl text-slate-800 dark:text-slate-100 mt-8 mb-4 border-b border-slate-200 dark:border-slate-700 pb-2 tracking-tight">{line.replace('## ', '')}</h2>);
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={index} className="font-bold text-xl md:text-2xl text-slate-800 dark:text-slate-200 mt-6 mb-3">{line.replace('### ', '')}</h3>);
    } else if (line.startsWith('#### ')) {
      elements.push(<h4 key={index} className="font-bold text-lg md:text-xl text-slate-700 dark:text-slate-300 mt-4 mb-2">{line.replace('#### ', '')}</h4>);
    }
    else if (line.startsWith('##### ')) {
      elements.push(<h5 key={index} className="font-bold text-base md:text-lg text-slate-700 dark:text-slate-300 mt-4 mb-2 uppercase tracking-wide">{line.replace('##### ', '')}</h5>);
    }
    // Handle Images: ![alt](url)
    else if (trimLine.startsWith('![') && trimLine.includes('](') && trimLine.endsWith(')')) {
      const altStart = trimLine.indexOf('![') + 2;
      const altEnd = trimLine.indexOf('](');
      const urlStart = altEnd + 2;
      const urlEnd = trimLine.length - 1;
      
      const alt = trimLine.substring(altStart, altEnd);
      const url = trimLine.substring(urlStart, urlEnd);
      
      elements.push(
        <div key={index} className="my-8">
          <div className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md">
            <img src={url} alt={alt} className="w-full h-auto" />
          </div>
          <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-2 italic">{alt}</p>
        </div>
      );
    }
    // Handle Blockquotes
    else if (trimLine.startsWith('> ')) {
      elements.push(
        <div key={index} className="border-l-4 border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 pl-4 pr-2 py-3 my-6 rounded-r text-slate-700 dark:text-slate-300 italic">
          {parseInline(line.replace('> ', ''))}
        </div>
      );
    }
    // Handle Unordered Lists
    else if (trimLine.startsWith('- ') || trimLine.startsWith('* ')) {
      elements.push(
        <div key={index} className="flex items-start gap-3 mb-2 ml-2">
           <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2.5 shrink-0"></div>
           <div className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
              {parseInline(line.replace(/^[-*]\s+/, ''))}
           </div>
        </div>
      );
    }
    // Handle Ordered Lists (Basic detection for "1. ", "2. ")
    else if (/^\d+\.\s/.test(trimLine)) {
      elements.push(
         <div key={index} className="flex items-start gap-3 mb-2 ml-2">
            <span className="font-mono font-bold text-yellow-600 dark:text-yellow-500 mt-0.5 shrink-0">
              {trimLine.match(/^\d+\./)[0]}
            </span>
            <div className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
               {parseInline(trimLine.replace(/^\d+\.\s/, ''))}
            </div>
         </div>
      );
    }
    // Handle Empty Lines (Paragraph breaks)
    else if (trimLine === '') {
      elements.push(<div key={index} className="h-4"></div>);
    }
    // Handle Standard Paragraphs
    else {
      elements.push(
        <p key={index} className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4 font-sans">
          {parseInline(line)}
        </p>
      );
    }
  });

  return <div className="animate-fade-in font-sans">{elements}</div>;
};


// --- Components ---

const NavBar = ({ activeTab, setActiveTab, theme, toggleTheme }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: <Terminal size={18} /> },
    { id: 'blog', label: 'Quests', icon: <Code2 size={18} /> },
    { id: 'lab', label: 'Lab', icon: <Cpu size={18} /> },
    { id: 'me', label: 'Character', icon: <User size={18} /> },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-[#050b14]/90 backdrop-blur-md border-b border-slate-300 dark:border-gray-800 h-16 flex items-center justify-between px-4 md:px-8 transition-colors duration-300">
      <div 
        className="flex items-center gap-2 cursor-pointer group"
        onClick={() => setActiveTab('home')}
      >
        <div className="w-8 h-8 bg-yellow-400 flex items-center justify-center rounded-sm retro-shadow-yellow group-hover:translate-y-1 transition-transform">
          <Gamepad2 className="text-black" size={20} />
        </div>
        <span className="font-pixel-bold text-lg md:text-xl tracking-tighter text-slate-900 dark:text-white">Pixel<span className="text-yellow-400">Dev</span></span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center gap-2 font-pixel text-xl transition-colors ${
              activeTab === item.id 
                ? 'text-yellow-600 dark:text-yellow-400' 
                : 'text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Search className="text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white cursor-pointer" size={20} />
        
        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme}
          className="p-2 border-2 border-slate-300 dark:border-gray-700 rounded-sm hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors text-slate-700 dark:text-yellow-400 bg-white dark:bg-slate-900"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button className="bg-yellow-400 text-black px-4 py-1 font-pixel text-xl font-bold rounded-sm hover:bg-yellow-300 transition-colors hidden sm:block border-2 border-b-4 border-yellow-600 hover:border-b-2 hover:translate-y-[2px]">
          Login
        </button>
      </div>
    </nav>
  );
};

const PixelLandscape = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Theme-based Sky Gradient handled by parent Hero component */}
      
      {/* Pixel Stars (Only visible in Dark Mode via parent class or opacity) */}
      <div className="absolute inset-0 bg-pixel-stars opacity-0 dark:opacity-100 transition-opacity duration-1000 animate-pulse-slow"></div>
      
      {/* Pixel Sun/Moon Glow */}
      <div className="absolute top-20 right-20 w-24 h-24 rounded-full bg-yellow-300 dark:bg-slate-200 blur-[60px] opacity-60 dark:opacity-30 transition-colors duration-1000"></div>

      {/* Floating Pixel Clouds */}
      <div className="absolute top-20 left-[10%] pixel-cloud animate-float-slow opacity-80 dark:opacity-20 transition-opacity duration-1000"></div>
      <div className="absolute top-40 left-[60%] pixel-cloud animate-float-fast scale-75 opacity-60 dark:opacity-10 transition-opacity duration-1000"></div>
      <div className="absolute top-10 left-[80%] pixel-cloud animate-float-medium scale-50 opacity-50 dark:opacity-10 transition-opacity duration-1000"></div>

      {/* Landscape Layers */}
      {/* Back Mountains */}
      <div className="absolute bottom-0 left-0 right-0 h-64 flex items-end justify-center opacity-80 dark:opacity-60 transition-opacity duration-1000">
         <div className="w-full h-full relative">
            <div className="absolute bottom-0 left-[-10%] w-full h-48 bg-indigo-300 dark:bg-slate-800" style={{ clipPath: 'polygon(0% 100%, 20% 20%, 45% 100%, 60% 60%, 80% 100%)' }}></div>
            <div className="absolute bottom-0 right-[-10%] w-full h-64 bg-indigo-400 dark:bg-slate-700" style={{ clipPath: 'polygon(10% 100%, 40% 10%, 70% 100%)' }}></div>
         </div>
      </div>

      {/* Front Hills */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-emerald-500 dark:bg-slate-900 transition-colors duration-1000" style={{ clipPath: 'polygon(0% 100%, 0% 40%, 15% 30%, 30% 50%, 50% 20%, 70% 60%, 85% 40%, 100% 80%, 100% 100%)' }}>
      </div>
      
      {/* Decorative Trees (Simple Triangles) */}
      <div className="absolute bottom-10 left-[10%] w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[40px] border-b-emerald-700 dark:border-b-slate-800"></div>
      <div className="absolute bottom-20 left-[15%] w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[60px] border-b-emerald-800 dark:border-b-slate-700"></div>
      <div className="absolute bottom-12 right-[20%] w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[40px] border-b-emerald-700 dark:border-b-slate-800"></div>
      
      {/* Overlay Gradient to blend with content */}
      <div className="absolute inset-0 bg-gradient-to-t from-sky-50 via-transparent to-transparent dark:from-[#050b14] dark:via-transparent dark:to-transparent transition-colors duration-1000"></div>
    </div>
  );
};

const Hero = ({ setActiveTab }) => {
  return (
    <div className="relative h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center px-4 overflow-hidden transition-colors duration-1000 bg-gradient-to-b from-sky-200 to-sky-50 dark:from-[#0f172a] dark:to-[#050b14]">
      
      <PixelLandscape />

      <div className="z-10 max-w-4xl animate-fade-in-up relative flex flex-col items-center">
        <div className="inline-block px-3 py-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-sm text-xs font-mono text-blue-600 dark:text-blue-300 mb-6 border border-slate-200 dark:border-gray-700 shadow-sm retro-shadow-hover cursor-default">
          ✨ New Course: Advanced TypeScript Patterns
        </div>
        <h1 className="font-pixel-bold text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 text-slate-900 dark:text-white text-shadow-lg transition-colors duration-300">
          START YOUR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 dark:from-yellow-400 dark:via-orange-400 dark:to-red-400">
            CODING ADVENTURE
          </span>
        </h1>
        <p className="font-pixel text-2xl md:text-3xl text-slate-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto transition-colors duration-300 drop-shadow-sm">
          The most fun and retro-styled way to explore my digital garden, learn to code, and build cool stuff.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button 
            onClick={() => setActiveTab('blog')}
            className="px-8 py-3 bg-yellow-400 text-black font-pixel-bold text-sm md:text-base border-2 border-black dark:border-white rounded-sm retro-shadow-yellow hover:translate-y-1 hover:shadow-none transition-all w-full sm:w-auto"
          >
            START READING
          </button>
          <button 
            onClick={() => setActiveTab('lab')}
            className="px-8 py-3 bg-white dark:bg-[#1e293b] text-slate-900 dark:text-white font-pixel-bold text-sm md:text-base border-2 border-slate-400 dark:border-gray-500 rounded-sm retro-shadow hover:translate-y-1 hover:shadow-none transition-all w-full sm:w-auto"
          >
            VIEW PROJECTS
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-20 flex flex-col items-center justify-center animate-bounce text-slate-600 dark:text-gray-400">
         <span className="font-pixel text-lg mb-1">SCROLL TO UNLOCK</span>
         <ChevronDown size={28} />
      </div>
    </div>
  );
};

const HomeQuests = ({ setActiveTab, setPost }) => {
  return (
    <div className="py-20 bg-white dark:bg-[#0f172a] border-t-4 border-slate-200 dark:border-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center rounded-sm border-2 border-black">
                <Unlock size={20} className="text-black" />
             </div>
             <div>
               <h2 className="font-pixel-bold text-2xl md:text-3xl text-slate-900 dark:text-white">Recent Quests</h2>
               <p className="text-sm font-mono text-slate-500 dark:text-gray-400">Level 1 - Knowledge Base</p>
             </div>
          </div>
          <button onClick={() => setActiveTab('blog')} className="hidden sm:flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:underline">
            View All <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOG_POSTS.slice(0, 4).map((post) => (
             <div 
               key={post.id} 
               onClick={() => { setActiveTab('blog'); setPost(post.id); }}
               className="bg-slate-50 dark:bg-[#162032] border border-slate-200 dark:border-gray-700 rounded-lg overflow-hidden group cursor-pointer hover:border-yellow-400 transition-all hover:scale-[1.02]"
             >
                <div className="h-32 bg-slate-200 dark:bg-gray-800 relative">
                  <img src={post.image} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity image-pixelated" />
                  <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/60 rounded text-[10px] font-mono text-white">
                    {post.xp}
                  </div>
                </div>
                <div className="p-4">
                  <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-white ${post.color} mb-2`}>{post.level}</span>
                  <h3 className="font-pixel text-xl leading-tight mb-2 text-slate-900 dark:text-white line-clamp-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400">{post.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                     <Calendar size={12} /> {post.date}
                  </div>
                </div>
             </div>
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <button onClick={() => setActiveTab('blog')} className="px-6 py-2 bg-slate-200 dark:bg-gray-800 text-slate-900 dark:text-white rounded font-bold">
            View All Quests
          </button>
        </div>
      </div>
    </div>
  );
};

const HomeLabs = ({ setActiveTab }) => {
  return (
    <div className="py-20 bg-slate-100 dark:bg-[#0b1221] border-t-4 border-slate-300 dark:border-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-purple-500 flex items-center justify-center rounded-sm border-2 border-black text-white">
                <Zap size={20} />
             </div>
             <div>
               <h2 className="font-pixel-bold text-2xl md:text-3xl text-slate-900 dark:text-white">Active Experiments</h2>
               <p className="text-sm font-mono text-slate-500 dark:text-gray-400">Level 2 - The Laboratory</p>
             </div>
          </div>
          <button onClick={() => setActiveTab('lab')} className="hidden sm:flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold hover:underline">
            Enter Lab <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.slice(0, 4).map((proj) => (
             <div key={proj.id} onClick={() => setActiveTab('lab')} className="bg-white dark:bg-[#0f172a] p-3 rounded-lg border border-slate-300 dark:border-gray-800 hover:border-purple-500 transition-colors cursor-pointer group">
                <div className="rounded border border-black dark:border-gray-900 overflow-hidden mb-3 h-32 relative">
                   <img src={proj.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <h3 className="font-pixel text-lg text-slate-900 dark:text-white mb-1 truncate">{proj.title}</h3>
                <div className="flex flex-wrap gap-1">
                  {proj.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="px-1.5 py-0.5 bg-slate-100 dark:bg-gray-800 text-[10px] font-mono text-slate-600 dark:text-gray-400 rounded">#{tag}</span>
                  ))}
                </div>
             </div>
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <button onClick={() => setActiveTab('lab')} className="px-6 py-2 bg-slate-200 dark:bg-gray-800 text-slate-900 dark:text-white rounded font-bold">
            All Projects
          </button>
        </div>
      </div>
    </div>
  );
}

const Home = ({ setActiveTab, setPost }) => {
   return (
      <div className="animate-fade-in">
         <Hero setActiveTab={setActiveTab} />
         <HomeQuests setActiveTab={setActiveTab} setPost={setPost} />
         <HomeLabs setActiveTab={setActiveTab} />
      </div>
   );
}


// --- Blog Components ---

const BlogPostDetail = ({ post, onBack }) => {
  if (!post) return null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <button 
        onClick={onBack}
        className="group flex items-center gap-2 text-slate-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 mb-8 font-pixel text-xl transition-colors"
      >
        <div className="p-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-gray-700 rounded-sm group-hover:-translate-x-1 transition-transform">
           <ArrowLeft size={20} />
        </div>
        Back to Quest Log
      </button>

      <article className="max-w-4xl mx-auto bg-white dark:bg-[#0f172a] rounded-lg border-2 border-slate-200 dark:border-gray-800 overflow-hidden retro-shadow shadow-xl">
        
        {/* Hero Image */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden border-b-2 border-slate-200 dark:border-gray-800">
           <img src={post.image} alt={post.title} className="w-full h-full object-cover image-pixelated" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
           <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <div className="flex items-center gap-3 mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white ${post.color}`}>
                  {post.level}
                </span>
                <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-bold text-yellow-400 border border-yellow-600/50 flex items-center gap-1">
                   <Trophy size={12} /> {post.xp}
                </span>
              </div>
              <h1 className="font-pixel-bold text-3xl md:text-5xl text-white leading-tight text-shadow-lg">
                {post.title}
              </h1>
           </div>
        </div>

        {/* Metadata Bar */}
        <div className="flex items-center gap-6 px-6 md:px-8 py-4 bg-slate-50 dark:bg-[#162032] border-b border-slate-200 dark:border-gray-800 text-sm font-mono text-slate-500 dark:text-gray-400 overflow-x-auto">
           <div className="flex items-center gap-2 whitespace-nowrap">
              <Calendar size={16} />
              {post.date}
           </div>
           <div className="flex items-center gap-2 whitespace-nowrap">
              <Clock size={16} />
              {post.readTime}
           </div>
           <div className="flex items-center gap-2 whitespace-nowrap">
              <User size={16} />
              PixelDev
           </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 lg:p-12">
           <MarkdownRenderer content={post.content} />
        </div>

        {/* Footer of Article */}
        <div className="p-8 border-t-2 border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-[#162032] flex flex-col sm:flex-row justify-between items-center gap-4">
           <div>
              <p className="font-pixel-bold text-slate-900 dark:text-white mb-1">Quest Complete?</p>
              <p className="text-xs font-mono text-slate-500 dark:text-gray-500">Don't forget to commit your progress.</p>
           </div>
           <button 
             onClick={onBack}
             className="px-6 py-2 bg-yellow-400 text-black font-pixel-bold text-sm border-2 border-black rounded-sm hover:bg-yellow-300 hover:shadow-none retro-shadow-yellow transition-all w-full sm:w-auto"
           >
             RETURN
           </button>
        </div>

      </article>
    </div>
  );
};

const BlogList = ({ initialPostId, clearInitialPost }) => {
  const [selectedPostId, setSelectedPostId] = useState<number | null>(initialPostId || null);

  const selectedPost = BLOG_POSTS.find(p => p.id === selectedPostId);

  useEffect(() => {
    if (initialPostId) setSelectedPostId(initialPostId);
  }, [initialPostId]);

  if (selectedPostId && selectedPost) {
    return <BlogPostDetail post={selectedPost} onBack={() => { setSelectedPostId(null); clearInitialPost?.(); }} />;
  }

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="mb-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
           <Code2 className="text-green-600 dark:text-green-400" size={32} />
        </div>
        <h2 className="font-pixel-bold text-3xl md:text-4xl mb-4 text-slate-900 dark:text-white transition-colors duration-300">Quest Log</h2>
        <p className="font-pixel text-xl text-slate-600 dark:text-gray-400 transition-colors duration-300">Tutorials, thoughts, and devlogs from the journey.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <div 
            key={post.id} 
            onClick={() => setSelectedPostId(post.id)}
            className="bg-white dark:bg-[#0f172a] border-2 border-slate-200 dark:border-gray-800 rounded-lg overflow-hidden hover:border-slate-400 dark:hover:border-gray-600 transition-colors group cursor-pointer flex flex-col h-full shadow-sm hover:shadow-md dark:shadow-none transform hover:-translate-y-1 duration-300"
          >
            <div className="relative h-48 overflow-hidden border-b border-slate-100 dark:border-gray-800">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 image-pixelated" />
              <div className="absolute top-2 right-2 px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs font-mono border border-gray-600 text-white flex items-center gap-1">
                <Calendar size={10} /> {post.date}
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${post.color} retro-shadow-sm`}></span>
                  <span className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider font-mono">{post.level}</span>
                </div>
                <span className="text-xs font-bold text-yellow-600 dark:text-yellow-500 font-pixel flex items-center gap-1">
                   +{post.xp}
                </span>
              </div>
              <h3 className="font-pixel text-2xl mb-2 text-slate-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-slate-600 dark:text-gray-400 text-sm mb-6 flex-1 font-mono leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-bold group-hover:translate-x-2 transition-transform">
                Start Quest <ArrowRight size={16} className="ml-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const LabGrid = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
           <Zap className="text-purple-600 dark:text-purple-400" size={32} />
        </div>
        <h2 className="font-pixel-bold text-3xl md:text-4xl mb-4 text-slate-900 dark:text-white transition-colors duration-300">The Laboratory</h2>
        <p className="font-pixel text-xl text-slate-600 dark:text-gray-400 transition-colors duration-300">Experimental projects and mini-games.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROJECTS.map((proj) => (
          <div key={proj.id} className="bg-white dark:bg-[#0f172a] p-4 rounded-xl border border-slate-300 dark:border-gray-800 hover:bg-slate-50 dark:hover:bg-[#162032] transition-colors relative group shadow-sm dark:shadow-none transform hover:-translate-y-1 duration-200 cursor-pointer">
             {/* Cartridge Style Header */}
             <div className="h-3 bg-slate-300 dark:bg-gray-700 rounded-t-lg mb-1 w-20 mx-auto opacity-50"></div>
             
             <div className="rounded-lg overflow-hidden border-2 border-black mb-4 relative">
                <img src={proj.image} className="w-full h-40 object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-pixel-bold text-white text-lg animate-pulse">PLAY NOW</span>
                </div>
             </div>

             <h3 className="font-pixel text-2xl text-slate-900 dark:text-white mb-2 transition-colors">{proj.title}</h3>
             <p className="text-sm text-slate-600 dark:text-gray-400 font-mono mb-4 transition-colors">{proj.desc}</p>

             <div className="flex gap-2">
               {proj.tags.map(tag => (
                 <span key={tag} className="px-2 py-1 bg-slate-200 dark:bg-gray-800 text-slate-600 dark:text-gray-300 text-xs font-mono rounded transition-colors">
                   #{tag}
                 </span>
               ))}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AIChat = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: "Greetings, Traveler! I am PixelDev's virtual assistant. Ask me anything about his projects, skills, or favorite games." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null); // To store the chat session instance

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    try {
      if (!process.env.API_KEY) {
         throw new Error("API Key missing");
      }
      
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Initialize chat if not already done, or if we want a fresh one for the component lifetime
      if (!chatRef.current) {
        chatRef.current = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: USER_CONTEXT,
          }
        });
      }

      const result = await chatRef.current.sendMessage({ message: userMessage });
      const responseText = result.text;

      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Connection error... The mainframe is offline. (Check API Key)" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-[#0f172a] border-2 border-slate-300 dark:border-gray-700 rounded-lg overflow-hidden flex flex-col h-[500px] retro-shadow w-full transition-colors duration-300">
      {/* Terminal Header */}
      <div className="bg-slate-200 dark:bg-gray-800 p-2 flex items-center justify-between border-b border-slate-300 dark:border-gray-700 transition-colors">
        <div className="flex gap-1.5 ml-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="font-mono text-xs text-slate-500 dark:text-gray-400">TERMINAL_RELAY_V2.5</div>
        <div className="w-4"></div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-sm">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
             <div 
                className={`max-w-[85%] p-3 rounded-lg ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-slate-100 dark:bg-gray-800 text-slate-800 dark:text-green-400 border border-slate-200 dark:border-green-900/50 rounded-bl-none transition-colors'
                }`}
             >
                {msg.role === 'model' && <span className="block text-xs text-slate-500 dark:text-green-600 mb-1 opacity-70">SYSTEM</span>}
                {msg.text}
             </div>
          </div>
        ))}
        {loading && (
           <div className="flex justify-start">
             <div className="bg-slate-100 dark:bg-gray-800 text-slate-800 dark:text-green-400 p-3 rounded-lg rounded-bl-none border border-slate-200 dark:border-green-900/50 transition-colors">
               <span className="animate-pulse">_processing_query...</span>
             </div>
           </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-3 bg-slate-100 dark:bg-gray-900 border-t border-slate-300 dark:border-gray-700 flex gap-2 transition-colors">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask about PixelDev..."
          className="flex-1 bg-white dark:bg-black border border-slate-300 dark:border-gray-700 rounded px-3 py-2 text-slate-900 dark:text-green-400 font-mono focus:outline-none focus:border-blue-500 dark:focus:border-green-500 placeholder-slate-400 dark:placeholder-gray-600 transition-colors"
        />
        <button 
          onClick={handleSend}
          disabled={loading}
          className="bg-green-600 hover:bg-green-500 text-white dark:text-black p-2 rounded transition-colors disabled:opacity-50"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}

const CharacterSheet = () => {
  return (
    <div className="container mx-auto px-4 py-12">
       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Stats & Bio */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-yellow-400 rounded-full border-4 border-white overflow-hidden retro-shadow-yellow shrink-0">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=PixelDev&backgroundColor=b6e3f4" className="w-full h-full" />
              </div>
              <div>
                <h1 className="font-pixel-bold text-3xl md:text-5xl text-slate-900 dark:text-white mb-2 transition-colors duration-300">PixelDev</h1>
                <div className="flex gap-2 mb-2">
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 px-2 py-0.5 rounded text-xs font-mono border border-purple-300 dark:border-purple-500 transition-colors">LVL 24</span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-2 py-0.5 rounded text-xs font-mono border border-blue-300 dark:border-blue-500 transition-colors">WIZARD CLASS</span>
                </div>
                <div className="flex gap-3 text-slate-500 dark:text-gray-400">
                  <Github className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors" size={20} />
                  <Twitter className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors" size={20} />
                  <Linkedin className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors" size={20} />
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#0f172a] p-6 rounded-lg border-2 border-slate-300 dark:border-gray-800 transition-colors duration-300 shadow-sm dark:shadow-none">
              <h3 className="font-pixel text-2xl text-yellow-600 dark:text-yellow-400 mb-4 border-b border-slate-200 dark:border-gray-800 pb-2">Stats</h3>
              <div className="space-y-4 font-mono text-sm">
                 <div>
                   <div className="flex justify-between text-slate-600 dark:text-gray-300 mb-1"><span>JavaScript</span> <span>95%</span></div>
                   <div className="h-2 bg-slate-200 dark:bg-gray-700 rounded-full overflow-hidden"><div className="h-full bg-yellow-400 w-[95%]"></div></div>
                 </div>
                 <div>
                   <div className="flex justify-between text-slate-600 dark:text-gray-300 mb-1"><span>React/Next.js</span> <span>90%</span></div>
                   <div className="h-2 bg-slate-200 dark:bg-gray-700 rounded-full overflow-hidden"><div className="h-full bg-blue-400 w-[90%]"></div></div>
                 </div>
                 <div>
                   <div className="flex justify-between text-slate-600 dark:text-gray-300 mb-1"><span>WebGL</span> <span>75%</span></div>
                   <div className="h-2 bg-slate-200 dark:bg-gray-700 rounded-full overflow-hidden"><div className="h-full bg-purple-400 w-[75%]"></div></div>
                 </div>
              </div>
            </div>

            <div className="bg-white dark:bg-[#0f172a] p-6 rounded-lg border-2 border-slate-300 dark:border-gray-800 transition-colors duration-300 shadow-sm dark:shadow-none">
               <h3 className="font-pixel text-2xl text-pink-500 dark:text-pink-400 mb-4 border-b border-slate-200 dark:border-gray-800 pb-2">Bio</h3>
               <p className="text-slate-600 dark:text-gray-400 font-mono leading-relaxed transition-colors">
                 I build pixel-perfect interfaces and explore the intersection of retro aesthetics and modern web technology. Currently based in the digital realm, looking for party members to build the next big thing.
               </p>
            </div>
          </div>

          {/* Right Column: AI Chat */}
          <div className="animate-slide-in-right">
             <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="text-green-600 dark:text-green-400" />
                <h3 className="font-pixel text-2xl text-slate-900 dark:text-white transition-colors">Comms Link</h3>
             </div>
             <p className="text-slate-500 dark:text-gray-500 font-mono text-sm mb-4 transition-colors">
               Establish a direct link to my AI proxy. Ask questions to retrieve data from my archives.
             </p>
             <AIChat />
          </div>

       </div>
    </div>
  );
}

const Footer = ({ setActiveTab }) => {
  return (
    <footer className="bg-slate-100 dark:bg-[#020617] border-t-4 border-slate-300 dark:border-slate-800 pt-16 pb-8 text-slate-600 dark:text-slate-400 transition-colors duration-300 relative overflow-hidden font-sans">
      
      {/* Decorative Pixel Strip */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 opacity-80"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 group cursor-pointer w-fit" onClick={() => setActiveTab('home')}>
              <div className="w-8 h-8 bg-yellow-400 flex items-center justify-center rounded-sm retro-shadow-yellow group-hover:-translate-y-1 transition-transform">
                <Gamepad2 className="text-black" size={20} />
              </div>
              <span className="font-pixel-bold text-xl tracking-tighter text-slate-900 dark:text-white">Pixel<span className="text-yellow-400">Dev</span></span>
            </div>
            <p className="font-mono text-sm leading-relaxed max-w-xs text-slate-500 dark:text-slate-400">
              Leveling up the web, one pixel at a time. I craft digital experiences with code, coffee, and creativity.
            </p>
            <div className="flex gap-4 pt-2">
               {/* Social Icons Mini Row */}
               <a href="#" className="p-2 bg-white dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-700 hover:text-blue-500 hover:border-blue-500 transition-all retro-shadow-sm hover:translate-y-[-2px]"><Github size={18} /></a>
               <a href="#" className="p-2 bg-white dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-700 hover:text-sky-400 hover:border-sky-400 transition-all retro-shadow-sm hover:translate-y-[-2px]"><Twitter size={18} /></a>
               <a href="#" className="p-2 bg-white dark:bg-slate-800 rounded border border-slate-300 dark:border-slate-700 hover:text-blue-700 hover:border-blue-700 transition-all retro-shadow-sm hover:translate-y-[-2px]"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-pixel-bold text-lg text-slate-900 dark:text-white mb-6 uppercase tracking-widest border-b-2 border-yellow-400/50 inline-block pb-1">Explore</h3>
            <ul className="space-y-3 font-pixel text-xl">
              {['Home', 'Quests', 'Lab', 'Character'].map((item) => {
                 const id = item.toLowerCase() === 'quests' ? 'blog' : item.toLowerCase() === 'character' ? 'me' : item.toLowerCase();
                 return (
                  <li key={item}>
                    <button 
                      onClick={() => setActiveTab(id)}
                      className="hover:text-yellow-600 dark:hover:text-yellow-400 hover:translate-x-1 transition-all flex items-center gap-2 group"
                    >
                      <span className="text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0">›</span> {item}
                    </button>
                  </li>
                 )
              })}
            </ul>
          </div>

          {/* Column 3: Recent Posts (Mock) - or maybe "Guild" info */}
          <div>
            <h3 className="font-pixel-bold text-lg text-slate-900 dark:text-white mb-6 uppercase tracking-widest border-b-2 border-green-400/50 inline-block pb-1">Latest Logs</h3>
            <ul className="space-y-4 font-mono text-sm">
              <li className="group cursor-pointer" onClick={() => setActiveTab('blog')}>
                <span className="text-xs text-slate-400 block mb-1">Nov 12, 2023</span>
                <span className="group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">The Legend of React Hooks</span>
              </li>
              <li className="group cursor-pointer" onClick={() => setActiveTab('blog')}>
                <span className="text-xs text-slate-400 block mb-1">Dec 05, 2023</span>
                <span className="group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">CSS Grid Dungeons</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-300 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} PixelDev. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors hover:underline decoration-yellow-400 decoration-2 underline-offset-4">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors hover:underline decoration-yellow-400 decoration-2 underline-offset-4">Terms of Service</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors hover:underline decoration-yellow-400 decoration-2 underline-offset-4">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [theme, setTheme] = useState('dark');
  const [initialPost, setInitialPost] = useState<number | null>(null);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleSetPost = (id) => {
    setInitialPost(id);
  };

  return (
    <div className="min-h-screen bg-sky-50 dark:bg-[#050b14] flex flex-col text-slate-900 dark:text-slate-200 selection:bg-yellow-500 selection:text-black transition-colors duration-300 bg-pixel-grid">
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} theme={theme} toggleTheme={toggleTheme} />
      
      <main className="flex-1">
        {activeTab === 'home' && <Home setActiveTab={setActiveTab} setPost={handleSetPost} />}
        {activeTab === 'blog' && <BlogList initialPostId={initialPost} clearInitialPost={() => setInitialPost(null)} />}
        {activeTab === 'lab' && <LabGrid />}
        {activeTab === 'me' && <CharacterSheet />}
      </main>

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
