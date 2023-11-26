/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
      boxShadow: {
        'btnShadow': '0px 0px 12px 4px #9aefef',
        'blueShadow': ' 0px 0px 12px 4px rgb(154, 239, 239)',
        'cardShadow': '0px 4px 4px 4px rgba(127, 127, 127, 0.5)',
        'sideShadow': '-10px 2px 4px 0px rgba(217, 217, 217, 0.39)'
      },
      container: {
        'sd':'630px'
      },
      colors: {
        'welcomeColor': '#0fd2d2',
        'grayColor': '#7f7f7f',
        'borderColor': '#efefef',
        'logoColor': '#7f0d7f',
        'btnColor':'rgb(209, 209, 209)',
        'accountColor': 'rgb(15, 210, 210)'
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(2, 300px))',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      '6xl': '50px',
      'circle':'100px'
    },
    width: {
      '100': '450px',
      '300': '300px'
    },
    height: {
      'max-con': 'max-content'
    },
    maxWidth: {
      'tab': ' 630px',
      'shorTab': '600px'
    },
    maxHeight: {
      'content': 'max-content'
    },
  }
  },
  plugins: [],
}

