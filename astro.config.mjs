// @ts-check
import { defineConfig } from 'astro/config';

import reveal from 'astro-reveal';

// https://astro.build/config
export default defineConfig({
  integrations: [reveal()]
});