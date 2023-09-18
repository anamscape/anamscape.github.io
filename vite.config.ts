import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	base: "/anamscape/",
	plugins: [sveltekit()],
	server: {
		fs: {
		  // Allow serving files from one level up to the project root
		  allow: ['./public/'],
		},
	  },
});
