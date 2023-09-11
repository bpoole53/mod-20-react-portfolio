/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/Footer.jsx', './src/components/Header.jsx', './src/components/Navigation.jsx', './src/pages/About.jsx', './src/pages/Contact.jsx'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

