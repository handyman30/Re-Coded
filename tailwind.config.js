/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'recoded-purple': '#8B5CF6',
        'recoded-pink': '#EC4899',
        'recoded-dark': '#1F2937',
        'recoded-light': '#F9FAFB',
      },
      backgroundImage: {
        'purple-gradient': 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
        'ink-gradient': 'linear-gradient(45deg, #6366F1, #8B5CF6, #EC4899)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'ink-flow': 'ink-flow 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'ink-flow': {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.1) rotate(180deg)' },
        },
      },
    },
  },
  plugins: [],
} 