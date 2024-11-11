/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        powder: '#A2BCE0',
        oxford: '#03254E',
        lapis: '#145C9E',
        lilac: '#D4A3F4',
        sweet: '#6E07F3',
        slate: '#A259FB',
      },
      fontFamily: {
        poiret: ['Poiret One', 'sans-serif'],
        ewert: ['Ewert', 'serif'],
        stylish: ['Stylish', 'serif'],
        rye: ['Rye', 'serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        suwannaphum: ['Suwannaphum', 'serif'],
        monoton: ['Monoton', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
