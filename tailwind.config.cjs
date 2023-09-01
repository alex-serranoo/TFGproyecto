/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blueButton: '#000093',
        buttonText: '#FCCB3D',
      },
    },
  },
  plugins: [],
};
