/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "rgb(17,21,33)",

        "green-primary" : "rgb(37,255,146)",
      },
      keyframes: {
        'modify-bounce': {
          '0%, 100%' : {
            transform : 'translate(0,0)'
          },
          '50%' : {
            transform : 'translateY(-10%)'
          }
        }
      },
      animation: {
        'modify-bounce' : 'modify-bounce 2s infinite'
      }
    },
    backgroundImage: {
      'bg-form' : 'url(./assets/bg-form.svg)',
    }
  },
  plugins: [],
}

