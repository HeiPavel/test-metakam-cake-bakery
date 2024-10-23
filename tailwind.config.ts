import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '480px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px'
    },
    container: {
      center: true,
      screens: {
        DEFAULT: '100%',
        xl: '1280px',
        '2xl': '1440px'
      }
    },
    extend: {
      colors: {
        white: '#FFFFFF',
        brown: '#482A20',
        pink: '#FEF1FA',
        grey: '#8E8B8B'
      },
      dropShadow: {
        'button': '3px 3px 5px rgba(12, 12, 12, 0.8)'
      },
      transitionProperty: {
        'filter': 'filter'
      }
    },
  },
  plugins: [],
};
export default config