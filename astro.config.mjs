import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  server: {
    port: 3000
  },
  integrations: [tailwind(), react()],
  adapter: vercel()
});