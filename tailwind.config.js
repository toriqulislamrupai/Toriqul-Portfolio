module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Define the paths to all your files
  ],
  theme: {
    screens: {
      sm: "640px", // Small devices
      md: "768px", // Medium devices
      lg: "1024px", // Large devices
      xl: "1280px", // Extra large devices
    },
    extend: {}, // Extend or customize the theme here
  },
  plugins: [], // Add plugins as needed
};
