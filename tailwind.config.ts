import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary))', // BLACK
        secondary: 'rgb(var(--secondary))', // PURPLE
        neutral: 'rgb(var(--neutral))', // WHITE
        danger: 'rgb(var(--danger))', // RED
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        poppins: ['var(--font-poppins)'],
        firaSans: ['var(font-fira-sans)'],
      }
    },
  },
  plugins: [],
};
export default config;
