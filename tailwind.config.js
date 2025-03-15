/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        Container: '1362px',
      },
      colors: {
        textColor: '#6B7280',
      },
      fontFamily: {
        Inter: "Inter",
      },
    },
  },
  plugins: [],
};

