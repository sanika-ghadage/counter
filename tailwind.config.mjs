module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Ensures Tailwind scans all JS/JSX files in the src directory
    './pages/**/*.{js,ts,jsx,tsx}', // If you have any pages folder
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class', // Enable dark mode if you're using it
  plugins: [],
};

