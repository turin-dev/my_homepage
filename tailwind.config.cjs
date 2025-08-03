module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#f3f4f6',
          200: '#e5e7eb',
          800: '#1f2937',
          900: '#111827'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
};
