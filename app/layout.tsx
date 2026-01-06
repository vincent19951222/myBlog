
import React from 'react';
import './globals.css';
import { ThemeProvider } from './components/ThemeContext';
import { NavBar, Footer } from './components/LayoutClient';
import { inter, vt323, pressStart2P } from './lib/fonts';

export const metadata = {
  title: '李面条的实验室',
  description: '一个充满像素、代码和复古梦想的数字角落。',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning className={`${inter.variable} ${vt323.variable} ${pressStart2P.variable}`}>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{__html: `
          tailwind.config = {
            darkMode: 'class',
            theme: {
              extend: {
                animation: {
                  'float-slow': 'float 8s ease-in-out infinite',
                  'float-medium': 'float 6s ease-in-out infinite',
                  'float-fast': 'float 4s ease-in-out infinite',
                  'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                },
                keyframes: {
                  float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                  }
                }
              }
            }
          }
        `}}></script>
      </head>
      <body suppressHydrationWarning className={`${inter.className} font-sans antialiased`}>
        <ThemeProvider>
          <div className="bg-pixel-grid min-h-screen flex flex-col transition-colors duration-300 bg-white dark:bg-[#050b14] selection:bg-yellow-500/30 selection:text-yellow-900">
            <NavBar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
