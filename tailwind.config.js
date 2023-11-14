/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.liquid'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter',
      },
      backgroundImage: {
        'hero-image': 'url(../assets/snowboarding-hero.jpg)',
        'our-story': 'url(../assets/our-story.jpg)',
      },
      maxHeight: {
        cardHeight: '395px',
        collectionHeight: '480px',
      },
    },
  },
  plugins: [],
};
