import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['VT323', 'monospace'],
        'pixel-bold': ['"Press Start 2P"', '"ZCOOL KuaiLe"', 'cursive'],
        'pixel-bold-cn': ['"ZCOOL KuaiLe"', '"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
