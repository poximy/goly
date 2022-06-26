/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,svelte}'],
  theme: {
    extend: {
      colors: {
        dark: '#333333',
        light: '#fdfffc',
        darker: '#1F1F1F',
        lighter: '#fbfbfb',
        primary: '#266dd3',
        secondary: '#379634',
        ternary: '#ffcc33',
        danger: '#ff0022',
      },
    },
    fontFamily: {
      mono: ['IBM Plex Mono', 'monospace'],
      sans: ['IBM Plex Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
