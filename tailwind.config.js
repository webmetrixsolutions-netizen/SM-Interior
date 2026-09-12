/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        wine: {
          50: '#fdf2f4',
          100: '#fce7ea',
          200: '#f9d0d8',
          300: '#f0a7b8',
          400: '#e27496',
          500: '#cf4a73',
          600: '#b8325c',
          700: '#9c244a',
          800: '#832043',
          900: '#6f1f3d',
          950: '#3d0d1f',
        },
        gold: {
          50: '#fbf9ef',
          100: '#f6f1d7',
          200: '#ece0a8',
          300: '#e0c96f',
          400: '#d6b34a',
          500: '#c89a30',
          600: '#a87c26',
          700: '#855f23',
          800: '#6e4d23',
          900: '#5d4121',
          950: '#352210',
        },
        charcoal: {
          50: '#f6f6f7',
          100: '#e2e2e4',
          200: '#c5c5ca',
          300: '#9d9da7',
          400: '#6f6f7d',
          500: '#525260',
          600: '#40404c',
          700: '#33333d',
          800: '#26262e',
          900: '#1a1a20',
          950: '#0f0f14',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdfaf4',
          200: '#faf3e7',
          300: '#f5e8d0',
          400: '#eed7b0',
          500: '#e4c088',
          600: '#d6a362',
          700: '#c08a4e',
          800: '#a07042',
          900: '#855d3a',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'scale-in': 'scale-in 0.4s ease-out forwards',
        'slide-down': 'slide-down 0.3s ease-out forwards',
      },
      boxShadow: {
        'premium': '0 10px 40px -10px rgba(15, 15, 20, 0.15)',
        'luxury': '0 20px 60px -15px rgba(15, 15, 20, 0.25)',
        'gold': '0 4px 20px -2px rgba(200, 154, 48, 0.3)',
      },
    },
  },
  plugins: [],
};
