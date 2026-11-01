/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'Menlo', 'monospace'],
      },
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          accent: '#00d2ff',
          glow: 'rgba(0, 210, 255, 0.15)',
        },
        editor: {
          bg: '#0c101c',
          panel: '#101524',
          border: '#1c253b',
          line: '#182033',
          sidebar: '#090d18',
          activeTab: '#141c2e',
          text: '#e2e8f0',
          muted: '#64748b',
          keyword: '#c084fc',
          atom: '#38bdf8',
          string: '#86efac',
          comment: '#475569',
          operator: '#fb923c',
          function: '#60a5fa',
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 35px -5px rgba(0, 210, 255, 0.25)',
        'glow-indigo': '0 0 35px -5px rgba(99, 102, 241, 0.25)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
