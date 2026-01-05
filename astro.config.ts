// @ts-check

import node from "@astrojs/node";
import solidJs from "@astrojs/solid-js";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { visualizer } from "rollup-plugin-visualizer";

// https://astro.build/config
export default defineConfig({
	integrations: [solidJs({ devtools: true })],
	vite: {
		plugins: [
			tailwindcss(),
			visualizer({
				emitFile: true,
				filename: "stats.html",
			}),
		],
	},
	adapter: node({
		mode: "standalone",
	}),
});
