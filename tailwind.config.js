/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-50": "#eeeffa",
        "primary-100": "#d7d9f3",
        "primary-200": "#b7baea",
        "primary-300": "#959ae1",
        "primary-400": "#757cd8",
        primary: "#575fcf",
        "primary-600": "#4a51b0",
        "primary-700": "#3e4393",
        "primary-800": "#323676",
        "primary-900": "#272b5d",

        "dark-primary-50": "#eaeaec",
        "dark-primary-100": "#dfe0e3",
        "dark-primary-200": "#bdbec4",
        "dark-primary-300": "#2b2d42",
        "dark-primary-400": "#27293b",
        "dark-primary": "#222435",
        "dark-primary-600": "#202232",
        "dark-primary-700": "#1a1b28",
        "dark-primary-800": "#13141e",
        "dark-primary-900": "#0f1017",

        "secondary-50": "#edf0f3",
        "secondary-100": "#e4e8ed",
        "secondary-200": "#c7cfd9",
        "secondary-300": "#4b6584",
        "secondary-400": "#445b77",
        secondary: "#3c516a",
        "secondary-600": "#384c63",
        "secondary-700": "#2d3d4f",
        "secondary-800": "#222d3b",
        "secondary-900": "#1a232e",

        error: "#F04438",
        "error-hover": "#C4173A",

        warning: "#F8B112",
        "warning-hover": "#FAC050",

        success: "#12B76A",

        diamond: "#1e3799",
        platinum: "#01a3a4",
        bronze: "#AD8A56",
      },
      fontFamily: {
      },
    },
    screens: {
      xs: "375px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xll: "1440px",

      "3xl": "1920px",
    },
  },
  plugins: [],
}

