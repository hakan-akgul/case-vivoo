module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'yankees-blue': '#181a37',
        'pearl-aqua': '#74c6b8',
        'cultured': '#f4f6fa',
        'mango-tango': '#ff7a45',
        'pastel-red': '#ff6264',
        'arsenic': '#3e424b',
        'cool-black': '#07255b',
        'auro-metal-saurus': '#66737f',
        'detail-1': '#023E96',
        'detail-2': '#ED427D',
        'detail-3': '#FE8364',
        'detail-4': '#112C56',

      },
      fontFamily: {
        'poppins': ['Poppins']
      },
      spacing: {
        '1.25': '5px',
        '1.5': '6px',
        '1.75': '7px',
        '2.25': '10px',
        '3.5': '14px',
        '4.5': '18px',
        '13': '52px',
        '128': '512px',
        '160': '640px',
        '196': '768px',
        '256': '1024px',
        '400': '1200px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
