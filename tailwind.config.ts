import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primaries: {
          primary: '#0041C2',
          hover: '#00349B',
          active: '#004EE9',
        },
        secondary: {
          primary: '#3C3C3C',
          hover: '#303030',
          active: '#484848',
        },
        text: {
          100: '#000E28',
          80: '#404A5E',
          60: '#808693',
          40: '#BFC3C9',
          20: '#FFFFFF',
        },
        background: {
          20: '#F0F2F5',
        },
      },
      screens: {
        mobile: '480px',
        tablet: '768px',
        laptop: '1024px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        GoldenPlains: ['GoldenPlains'],
      },
    },
  },
  plugins: [],
} satisfies Config;
