/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["FiraCode", "Inter", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        128: "32rem",
        160: "40rem",
        256: "64rem",
      },
    },
  },
  plugins: [],
};
