const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens: {
      'md': '1025px',
      'mobile': {'max': '1024px'}
      },

      fontFamily: {
        Nunito: ['Nunito']
      },

      fontFamily:{
        Syne: ["Syne"]
      },

      fontFamily:{
        Khula: ["Khula"]
      },


    },
  },
  plugins: [
    //To make the glassmorphic navbar work on firefox
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
  ],
};
