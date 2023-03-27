import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
	integrations: [preact()],
	buildOptions: {
		site: "https://gstein314github.io/",
    base: "https://github.com/gstein314/astro-test"
	},
});