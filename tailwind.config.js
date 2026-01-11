/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-base': '#0A0A0A',
        'dark-blue': '#00264D',
        'itl-green': '#008000',
        'itl-dark-green': '#022c22',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['"IBM Plex Serif"', 'serif'],
        'ibm-sans': ['"IBM Plex Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, #0A0A0A 0%, #00264D 100%)',
      }
    },
  },
  plugins: [],
}
