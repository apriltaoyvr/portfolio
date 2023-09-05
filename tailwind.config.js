/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
    },
    fontFamily: {
      grotesque: ['var(--font-space-grotesk)', ...defaultTheme.fontFamily.sans],
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: '#191724',
            foreground: '#e0def4',
            divider: 'hsla(248deg, 13%, 36%, 0.15)',
            focus: '#eb6f92',
            content1: 'hsl(247deg, 23%, 15%)',
            content2: 'hsl(247deg, 21%, 19%)',
            content3: 'hsl(248deg, 25%, 18%)',
            content4: 'hsl(248deg, 23%, 21%)',
            primary: {
              DEFAULT: '#c4a7e7',
            },
            secondary: {
              DEFAULT: '#ebbcba',
            },
            tertiary: {
              DEFAULT: '#9ccfd8',
            },
          },
          layout: {},
        },
        light: {
          colors: {
            background: '#faf4ed',
            foreground: '#575279',
            divider: 'hsla(248deg, 12%, 52%, 0.15)',
            focus: '#eb6f92',
            content1: 'hsl(35deg, 100%, 98%)',
            content2: 'hsl(35deg, 50%, 96%)',
            content3: '#dfdad9',
            content4: '#cecacd',
            primary: {
              DEFAULT: '#907aa9',
            },
            secondary: {
              DEFAULT: '#d7827e',
            },
            tertiary: {
              DEFAULT: '#56949f',
            },
          },
          layout: {},
        },
      },
    }),
  ],
};
