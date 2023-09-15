<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
    import { base } from '$app/paths';
	import '../app.postcss';
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import Footer from '$lib/common/footer.svelte';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { repoUrl } from "$lib/common/constants";

	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<AppBar
	gridColumns="grid-cols-3"
	slotDefault="place-self-center"
	slotTrail="place-content-end"
	class="!bg-transparent text-white"
>
	<svelte:fragment slot="lead">
		<a href="{base}/" class="px-10 inline-flex text-black dark:text-white">
			<img
				src="{repoUrl}images/AnamAzkaLogo.png"
				alt="Logo"
				class="w-6 mx-2"
			/> ANAM
		</a>
	</svelte:fragment>
	<span class="hidden lg:block">
		<a class="btn variant-glass text-black dark:text-white px-5" href="/">Home</a>
		<a class="btn variant-glass text-black dark:text-white px-5" href="/books">Books</a>
		<a class="btn variant-glass text-black dark:text-white px-5" href="/poems">Poems</a>
		<a class="btn variant-glass text-black dark:text-white px-5" href="/calligraphy">Calligraphy</a>
		<a class="btn variant-glass text-black dark:text-white px-5" href="/blogs">Blogs</a>
	</span>
		<svelte:fragment slot="trail"
		><div class="px-10">
			<LightSwitch />
		</div></svelte:fragment
	>
</AppBar>
<slot />

<Footer />
