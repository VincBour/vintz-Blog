module.exports = {
  content: ['./components/**/*.{html,js,ts,tsx,jsx}', './pages/**/*.{html,js,ts,tsx,jsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'main': "2fr 1fr",
      },
      colors: {
        'mauve': "#d8b4fe",
        "mikadoYellow": "#FEC601",
        "redCrayola": "#ED254E",
        "oxfordBlue":"#011936",
        "blueNCS": "#2E86AB",
        "blueNCSLight": "#4EA9D0",
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      fontFamily: {
        sans: ['League Spartan', 'Graphik', 'sans-serif'],
        cursive: ['Sriracha', 'cursive'],
        serif: ['Tinos', 'Merriweather', 'serif']
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
}
