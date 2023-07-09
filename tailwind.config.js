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
      grotesque: [
        'var(--font-darker-grotesque)',
        ...defaultTheme.fontFamily.sans,
      ],
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
