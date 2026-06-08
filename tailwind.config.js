/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B1E3D',    // Azul Profundo
        accent: '#c2a878',     // Dorado Lujo
        background: '#F8F7F4', // Blanco Hueso (Off-white)
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}