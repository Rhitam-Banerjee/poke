/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        primary: "#060B28",
        bugType: "#7BCF00",
        darkType: "#5A566A",
        dragonType: "#0076FF",
        elecType: "#FFDE00",
        fairyType: "#FF76FF",
        fightingType: "#FF215B",
        fireType: "#FF9900",
        flyingType: "#89BDFF",
        ghostType: "#4E6AFF",
        grassType: "#1CD80E",
        groundType: "#FF6B0D",
        iceType: "#2EE4C6",
        normalType: "#9FA39D",
        poisonType: "#F149FF",
        psychicType: "#FF6C64",
        rockType: "#D8BC5A",
        steelType: "#23A1BD",
        waterType: "#14A8FF",
      },
      screens: {
        xs: { max: "450px" },
        sm: { max: "640px" },
      },
    },
  },
  plugins: [],
};
