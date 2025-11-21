module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Tema claro
        beige: '#F5EEDC',
        beigeCard: '#E8DEC7',
        textDark: '#1A1A1A',

        // Tema escuro
        darkBg: '#0A0A0A',
        darkCard: '#1A1A1A',
        textLight: '#F5F5F5'
      }
    },
  },
  plugins: [],
}
