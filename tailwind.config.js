module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main":"#deb37e",
        'second':'#e2a355',
        'third':'#7f7770',
        'search':'#c3bfbc',
        'txt1':'#54524f',
        'txt2':'#3f3f3f',
      },
      backgroundImage: {
        "shadow": "url('/src/assets/shadow.png')",
        "shadow1": "url('/src/assets/shadow1.png')",
        "shadow2": "url('/src/assets/shadow2.png')",
        "shadow3": "url('/src/assets/shadow3.png')",
        "intro": "url('/src/assets/intro.png')",
        "explore": "url('/src/assets/explore.png')",
      },
      height : {
        'header':'135px'
      },
      fontFamily: {
        'Neo':['Neonderthaw', 'cursive']
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}