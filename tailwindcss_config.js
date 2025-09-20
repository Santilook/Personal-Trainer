const flowbitePlugin = require("flowbite/plugin");

module.exports = {
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx,svelte,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbitePlugin, // modularizado (solo carga lo que uses)
  ],
};
