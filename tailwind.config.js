/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xpx: { max: "440px" },
      px: { max: "639px" },
      xs: "320px",
      xsx: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1745px",
      "4xl": "1920px",
      "5xl": "2133px",
      x5xl: { max: "2132px" },
      xsm: { max: "767px" },
      xlg: { max: "1023px" },
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // This makes Roboto the default sans-serif font
      },
      width: {
        //size/1920*600 = find base value
        "20px": "calc(6.3px + (1028 - 9.3) * ((100vw - 300px) / (1920 - 300)))",
      },
      height: {
        //size/1920*600 = find base value
        "30px": "calc(9.3px + (1028 - 9.3) * ((100vw - 300px) / (1920 - 300)))",
      },
      padding: {
        "128px": "calc(40px + (128 - 40) * ((100vw - 300px) / (1920 - 300)))",
      },
      margin: {
        "128px": "calc(40px + (128 - 40) * ((100vw - 300px) / (1920 - 300)))",
      }
    },
  },
  plugins: [],
};
