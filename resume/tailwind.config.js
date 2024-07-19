/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      textShadow: {
        'default': '12px 12px 12px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}

