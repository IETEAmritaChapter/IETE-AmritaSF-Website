module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'ipad': '820px',
        'custom-sm': {'max': '1024px'},
        'custom-md': {'max': '820px'},
      },
    },
  },
  plugins: [],
};
