
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#171621",
        "black-100": "#13181F",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        custom:"500px" 
        },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/space-cube.gif')",
        "tech-animados": "url('/src/assets/animados.gif')",
        "card-back": "url('/src/assets/web.jpg')",
        "hero-gif": "url('/src/assets/cube.gif')",
        'custom-gradient': 'linear-gradient(to right, #020202,#312C31, #1B3977, #0D1B2D)',

      },
    },
  },
  plugins: [],
};

