const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./src/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


module.exports = {
  theme: {
    // ...
    colors: {
      black: colors.black,
      white: colors.white,
      lightWhite : "#eee",
      black_500 : "#2e2e2e",
      black_400 : "#363841",
      gray_50: "#F9FAFB",
      gray_200: "#ddd",
      gray_100: "#E5E7EB",
      red_500: "#EF4444",
      red_600: "#f3103c",
      red_700 : "#B91C1C",
      gray_500: "#6B7280",
      gray_700: "#374151",
      lightBlack: "#222222",
      gray_400: "#9CA3AF",
      pink_600: "#DB2777",
      pink_900: "#831843",
      indigo_800: "#3730A3",
      indigo_500: "#6366f1",
      indigo_900: "#312E81",
      purple_900: "#4C1D95",
      purple_800: "#5B21B6",
      blue_300: "#93C5FD",
      green_500 : "#10B981",
      yellow_100: "#d3c2ae",
      yellow_400 : "#FBBF24",
      yellow_500 : "#F59E0B",
      yellow_600: "#c89551",
      yellow_700: "#c16717",
      yellow_800: "#57371f",
      brown_800: "#251606",
      brown_700: "#2d2621",
    },
    screens: {
      'sm': '575px',
      // => @media (min-width: 640px) { ... }

      'md': '766px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': "1800px"
    },
    // extend: {
    //   borderOpacity: {
    //     10: "0.1",
    //     20: "0.2",
    //     50: ".5",
    //     95: "0.95",
    //     100: "1"
    //   },
    // },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    // ...
  ],
};
