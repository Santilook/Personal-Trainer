// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import tailwindcss from '@tailwindcss/vite';
import critters from "astro-critters";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      target: "esnext", // evita JS viejo innecesario
    },
    optimizeDeps: {
      include: ["flowbite"], // asegura optimización de Flowbite
    },
  },
  output: 'server',
  adapter: netlify(),
  integrations: [
    critters({
      preload: "swap", // fonts optimizadas
    }),
  ],
});
