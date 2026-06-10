/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        plum: {
          50: '#fff6fb',
          100: '#f7e9f8',
          200: '#edd7f3',
          300: '#e2bff0',
          400: '#ce95eb',
          500: '#b86bdc',
          600: '#9348b8',
          700: '#6f2f85',
          800: '#4a1d59',
          900: '#2b1236',
          950: '#12060f',
        },
        blush: {
          50: '#fff5f6',
          100: '#fdeef1',
          200: '#fbd6dc',
          300: '#f8bfc6',
          400: '#f49fb0',
          500: '#ef7990',
          600: '#d85574',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(0, 0, 0, 0.1)',
        card: '0 4px 24px -8px rgba(0, 0, 0, 0.08)',
      },
      keyframes: {
        'fade-up': { '0%': { opacity: 0, transform: 'translateY(16px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease both',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
