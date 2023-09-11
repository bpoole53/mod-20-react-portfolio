/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/Footer.jsx', './src/components/Header.jsx', './src/components/Navigation.jsx', './src/pages/About.jsx', './src/pages/Contact.jsx', './src/pages/Portfolio.jsx', './src/pages/Resume.jsx', './src/components/Project.jsx'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

