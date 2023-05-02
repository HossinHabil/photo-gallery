/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '80vh': '80vh',
        '90vh': '90vh',
        '99vh': '99vh',
      },
    },
  },
  plugins: [],
}

