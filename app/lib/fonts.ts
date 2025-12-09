import { Inter, VT323, Press_Start_2P, ZCOOL_KuaiLe, Noto_Sans_SC } from 'next/font/google';

// 英文字体
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vt323',
  display: 'swap',
});

export const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start',
  display: 'swap',
});

// 中文字体 - 使用 Google Fonts
export const zcoolKuaiLe = ZCOOL_KuaiLe({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-zcool-kuaile',
  display: 'swap',
  fallback: ['PingFang SC', 'Microsoft YaHei', 'SimHei'],
});

export const notoSansSC = Noto_Sans_SC({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-sc',
  display: 'swap',
  fallback: ['PingFang SC', 'Microsoft YaHei', 'SimHei'],
});