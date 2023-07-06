/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      colors: {
        primaryGreenColor: "#229E50",
        primaryYellowColor: "#FFCF36",
        primaryRedColor: "#EF4F40",
        primaryWhiteColor: "#FAFAFF",
        primaryBlueColor: "#E6FAFC",
      },
      fontFamily: {
        mulish: ["Mulish"],
        ubuntu: ["Ubuntu"],
      },
      boxShadow: {
        custom: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
