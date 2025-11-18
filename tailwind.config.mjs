/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Cool Slate - from logo's dark grays
        primary: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#9da0a5',
          400: '#7c8186',
          500: '#4a565f',
          600: '#39444f',
          700: '#313b45',
          800: '#212b35',
          900: '#1a2229',
        },
        // Warm Terracotta - subtle warmth without being loud
        accent: {
          50: '#fdf8f6',
          100: '#f9ede8',
          200: '#f0ddd3',
          300: '#e4c4b3',
          400: '#d4a78f',
          500: '#c18a6d',
          600: '#a86f52',
          700: '#8b5a42',
          800: '#6f4936',
          900: '#5a3b2d',
        },
        // Muted Sage - natural, understated
        highlight: {
          50: '#f6f8f6',
          100: '#e8ede9',
          200: '#d4ddd6',
          300: '#b5c4b8',
          400: '#92a698',
          500: '#6f8675',
          600: '#586b5d',
          700: '#48574c',
          800: '#3a473e',
          900: '#2f3a33',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.animation-delay-2000': {
          'animation-delay': '2s',
        },
        '.animation-delay-4000': {
          'animation-delay': '4s',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
