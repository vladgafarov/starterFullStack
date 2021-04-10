module.exports = {
   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      fontFamily: {
         'p': ['proxima'],
         'pm': ['proxima-medium'],
         'pb': ['proxima-bold'],
      },
      extend: {},
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
