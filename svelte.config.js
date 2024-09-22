import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		prerender: {
			entries: ["/blogs/Existential Diaries: A Book Review",
				"/blogs/Dewa Mela 2018: Strolling down memory lane",
				"/blogs/Struggles Unveiled: On Getting Published",
				"/blogs/हर पल बदलती ज़िंदगी",
				"/blogs/Writers on Writing",
				"/blogs/Under the Radiant Sky",
				"/blogs/An Exclusive Self-talk with Anam Fatima, Author of Nascent Poetry",
				"/blogs/Anam's Nascent Poetry: A Book Review",
				"/blogs/Book Review: The Struggle Between My Heart & My Brain by Mehr Bani",
				"/blogs/Discovering the Poetic Horizons: In Conversation with Yaseen Anwer",
				"/blogs/Let's Walk Along the Memory Lane (Part 1)",
				"/blogs/Just Another Day",
				"/blogs/Snow Love",
				"/blogs/A Younger Sister’s Story",
				"/blogs/Rohan and a Squirrel",
				"/blogs/A Broken Toy",
				"/blogs/Book Review: The Shadow of the Dark Soul by Sukhmani Gandhi",
				"/blogs/Channelizing Anger into Creativity",
				"/blogs/Photocapturasis Syndrome",
				"/blogs/Are You Free",
				"/blogs/Why Literature",
				"/blogs/Jannat ke Pattey by Nimrah Ahmed: A Review"]
		}
	}
};
export default config;