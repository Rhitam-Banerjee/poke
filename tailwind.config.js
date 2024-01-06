/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        primary: "#060B28",
        bug: "#7BCF00",
        dark: "#5A566A",
        dragon: "#0076FF",
        electric: "#FFDE00",
        fairy: "#FF76FF",
        fighting: "#FF215B",
        fire: "#FF9900",
        flying: "#89BDFF",
        ghost: "#4E6AFF",
        grass: "#1CD80E",
        ground: "#FF6B0D",
        ice: "#2EE4C6",
        normal: "#9FA39D",
        poison: "#F149FF",
        psychic: "#FF6C64",
        rock: "#D8BC5A",
        steel: "#23A1BD",
        water: "#14A8FF",
      },
      screens: {
        xs: { max: "450px" },
        sm: { max: "640px" },
      },
    },
  },
  plugins: [],
};
