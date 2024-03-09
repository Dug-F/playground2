import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        spaceGrotesk: ["var(--font-spaceGrotesk)", "sans-serif"],
        mono: ["var(--font-roboto-mono)"],
      },
      height: {
        'screen-3x': '300vh'
      }
    },
  },
  plugins: [],
};
export default config;
