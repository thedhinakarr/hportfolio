/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'dblue': '#064ACB',
      'blue': '#008DDA',
      'orange': '#F3A953',
      'ivory': '#F2F3F3',
      'gray': '#111827'
    }
  },
  plugins: [require('@tailwindcss/forms')],
}
