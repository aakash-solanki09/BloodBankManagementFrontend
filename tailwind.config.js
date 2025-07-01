/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // enables Tailwind in all React files
  ],
  theme: {
    extend: {
      screens: {
        xs1: "50px",
        xs2: "300px",
        xs3: "500px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1800px",
        "4xl": "2200px",
        "5xl": "2600px",
        "6xl": "3000px",
        "7xl": "3500px",
        "8xl": "4000px",
        "9xl": "4500px",
        "10xl": "5000px"
      },
      colors: {
        primary: "#FF4C4C",    // blood red
        secondary: "#FFAFBD",  // light pink
        dark: "#2D2D2D",       // dark gray
        light: "#F8F8F8",      // light gray
      },
    },
  },
  plugins: [],
};
