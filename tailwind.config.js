/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      scrollSnapType: {
        x: 'x',
        y: 'y',
        both: 'both',
        mandatory: 'mandatory',
        proximity: 'proximity',
      },
      scrollSnapAlign: {
        start: 'start',
        end: 'end',
        center: 'center',
        none: 'none',
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [function ({ addUtilities }) {
    addUtilities({
      '.scroll-snap-x': { 'scroll-snap-type': 'x proximity' },
      '.scroll-snap-y': { 'scroll-snap-type': 'y proximity' },
      '.scroll-snap-both': { 'scroll-snap-type': 'both proximity' },
      '.scroll-snap-center': { 'scroll-snap-align': 'center' },
      '.scroll-snap-start': { 'scroll-snap-align': 'start' },
      '.scroll-snap-end': { 'scroll-snap-align': 'end' },
    }, ['responsive']);
  },],
};