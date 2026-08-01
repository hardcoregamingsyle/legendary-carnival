/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blueberry: '#1B1B3A',
        leaf: '#2D5A27',
        ivory: '#FAF8F5',
        gold: '#D9A441',
        violet: '#7453C4'
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif']
      },
      boxShadow: {
        glow: '0 24px 90px rgba(116, 83, 196, 0.24)',
        card: '0 24px 80px rgba(27, 27, 58, 0.14)'
      },
      backgroundImage: {
        aurora: 'radial-gradient(circle at 20% 20%, rgba(217,164,65,.34), transparent 28%), radial-gradient(circle at 80% 10%, rgba(116,83,196,.38), transparent 30%), linear-gradient(135deg, #1B1B3A 0%, #25345C 52%, #2D5A27 100%)'
      }
    }
  },
  plugins: []
};
