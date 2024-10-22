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
        white: {
          light: '#F3F3F3',
          default: '#FDFDFD'
        },
        black: {
          light: '#303031',
          dark: '#0C0C0C'
        },
        brown: '#482A20',
        grey: {
          default: '#3C3C3D',
          light: '#D9D9D9',
          dark: '#474747',
          border: '#8E8B8B'
        }
      },
    },
  },
  plugins: [],
};
export default config