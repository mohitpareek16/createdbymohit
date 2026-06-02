/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#051A24',
        'ink-soft': '#0D212C',
        accent: '#C41E3A',
        muted: '#273C46',
        cream: '#F5F3EE',
        line: '#D8D4CB',
      },
      fontFamily: {
        mondwest: ['"PP Mondwest"', 'Georgia', '"Times New Roman"', 'serif'],
        montreal: ['"PP Neue Montreal"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-fast': 'marquee 12s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      boxShadow: {
        'btn-primary': '0 1px 2px 0 rgba(5,26,36,0.1), 0 4px 4px 0 rgba(5,26,36,0.09), 0 9px 6px 0 rgba(5,26,36,0.05), 0 17px 7px 0 rgba(5,26,36,0.01), inset 0 2px 8px 0 rgba(255,255,255,0.5)',
        'btn-secondary': '0 0 0 0.5px rgba(0,0,0,0.05), 0 4px 30px rgba(0,0,0,0.08)',
        'card': '0 4px 16px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
