/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: {
        1: "#CDFAFA",
        2: "#0AC8B9",
        3: "#0397AB",
        4: "#005A82",
        5: "#0A323C",
        6: "#091428",
        7: "#0A1428",
      },
      or: {
        1: "#F0E6D2",
        2: "#C8AA6E",
        3: "#C89B3C",
        4: "#785A28",
        5: "#463714",
        6: "#32281E",
      },
      grey: {
        1: "#A09B8C",
        2: "#5B5A56",
        3: "#3C3C41",
        4: "#1E2328",
        5: "#1E282D",
        6: "#010A13",
      },
      stats: {
        hp: "#01b70a",
        mp: "#116bca",
        energie: "#e88a32",
      },
    },

    extend: {
      gradientColors: {
        darkBlue: ["#091428", "#0A1428"],
        or: ["#785A28", "#C89B3C"],
        clearBlue: ["#005A82", "#0AC8B9"],
      },
      fontFamily: {
        BeaufortforLOL: ["BeaufortforLOL Bold"],
      },
    },
  },
  plugins: [],
};
