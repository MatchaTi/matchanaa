import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#141b1e',
        lighterBackground: '#232a2d',
        redCustom: '#e57474',
        greenCustom: '#8ccf7e',
        yellowCustom: '#e5c76b',
        blueCustom: '#67b0e8',
        magentaCustom: '#c47fd5',
        cyanCustom: '#6cbfbf',
        lightGrayCustom: '#b3b9b8',
        foreground: '#dadada'
      },
    },
  },
  plugins: [],
} satisfies Config;
