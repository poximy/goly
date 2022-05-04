module.exports = {
  content: ['./src/{pages,components}/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#262626',
      },
    },
    fontFamily: {
      mono: ['IBM Plex Mono', 'monospace'],
      sans: ['IBM Plex Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
