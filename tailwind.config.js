import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",
        accent: "#facc15",
        patriot: "#dc2626",
        base: "#f8fafc",
      },
    },
  },
  plugins: [typography],
};
