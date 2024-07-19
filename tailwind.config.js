/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        borderWidth: {
            DEFAULT: '1px',
            '0': '0',
            '2': '2px',
            '56': '56px',
            '4': '4px',
            '20': '20px',
            '350': '350px',
        },
        extend: {
            fontFamily: {
                custom: ['Rubik', 'sans-serif'],
            },
            textShadow: {
                'default': '12px 12px 12px rgba(0, 0, 0, 0.25)',
              },
        },
    },
    plugins: [],
  }