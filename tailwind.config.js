/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
            "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderColor:{
        'red-500':'#EF4444',
        'green-500':'#10B981',
      }
    }
  },
  plugins: [],
}
