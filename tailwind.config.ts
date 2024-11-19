import { Flowbite } from "flowbite-react";
import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");
import wallpaper from "/wallpaper.png"

const config: Config = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content()
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wallpaper': "url('/wallpaper2.png')",
      },
      fontFamily: {
        lusitana: ['Lusitana', 'serif'],
        crimson: ['CrimsonText', 'serif'],
      },
      colors:{
          yellow: {
              50: '#f4f5f0',
          },
          primary: '#d0d0d0',
          formazzi: '#263238',
          registerbt: '#A38DEB',
          fontIntro: '#D44EE6',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
  }),
    flowbite.plugin(),
  ],
};
export default config;
