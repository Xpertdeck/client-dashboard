/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "*/Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      
      extend: {
          fontFamily: {
              poppins: ["Poppins", "sans-serif"],
          },
          colors: {
              dark: {
                  100: "#151515",
                  200: "#091115"
              },
              bluee: "#2D9CDB"
          },
          transitionProperty: {
              'width': 'width'
          },
          screens: {
              'fold': '364px',
              // => @media (min-width: 364) { ... }
              'iphse': '385px',
          },
      },
  },
  plugins: [],
};
