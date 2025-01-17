const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: "class", 
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans], // Inter를 기본 sans-serif로 설정
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        beige: '#e6dace',
        brightbeige: '#F4ECE6',
      },
    },
    fontSize: {
      ssm:['10px','15px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      plus:['17px','26px'],
      lg: ['20px', '28px'],
      xl: ['25px', '33px'],
      xxl:['32px', '40px'],
      extra:['100px','110px'],
    },
    screens:{
      'xs': '475px',
      'sm': '640px',
      'lg': '1024px',
      'xl': '1280px',
    },
    flexBasis: {
      '3/5': '60%',
      '2/5': '40%',
    },
    boxShadow: {
      'custom-dark': '0 2px 4px darkslategray',
    },
  },
  plugins: [],
};
