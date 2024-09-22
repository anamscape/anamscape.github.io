<script lang="ts">
	import { page } from '$app/stores';
	import SvgIcon from '$lib/common/svgIcon.svelte';
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import { dataUrl } from '$lib/common/constants';
	import { browser } from '$app/environment';

	const popupClick: PopupSettings = {
		event: 'click',
		target: 'popupClick',
		placement: 'top'
	};
	let htmlContent = ``;
	if (browser) {
		fetch(dataUrl + 'data' + $page.url.pathname + '.html')
			.then((response) => {
				console.log(dataUrl + 'data' + $page.url.pathname + '.html');
				return response.text();
			})
			.then((html) => {
				htmlContent = html;
			});
	}
</script>

{@html htmlContent}

<button class="btn bg-transparent mt-12" use:popup={popupClick}>
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M15.22 4.93a.42.42 0 0 1-.12.13h.01a.45.45 0 0 1-.29.08.52.52 0 0 1-.3-.13L12.5 3v7.07a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V3.02l-2 2a.45.45 0 0 1-.57.04h-.02a.4.4 0 0 1-.16-.3.4.4 0 0 1 .1-.32l2.8-2.8a.5.5 0 0 1 .7 0l2.8 2.8a.42.42 0 0 1 .07.5zm-.1.14zm.88 2h1.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2H8a.5.5 0 0 1 .35.14c.1.1.15.22.15.35a.5.5 0 0 1-.15.35.5.5 0 0 1-.35.15H6.4c-.5 0-.9.4-.9.9v10.2a.9.9 0 0 0 .9.9h11.2c.5 0 .9-.4.9-.9V8.96c0-.5-.4-.9-.9-.9H16a.5.5 0 0 1 0-1z"
			fill="currentColor"
		/>
	</svg>
</button>
<div data-popup="popupClick">
	<a
		href="https://twitter.com/intent/tweet?text=Reading blog '{$page.url.pathname
			.substring(7)}' 👇👇%0A{$page.url}"
		target="_blank"
		aria-label="Share on twitter"
		class="btn variant-glass-success"
	>
		<span>
			<SvgIcon class="!w-6 !h-6 !fill-[#1d9bf0]" name="twitter" />
		</span>
		<span>Share on Twitter</span>
	</a>
</div>

<style>
	:global(h) {
		font-weight: 400;
		font-size: 2rem;
		max-width: 768px;
		line-height: 2;
		text-align: justify;
	}

	:global(p),
	:global(question),
	:global(answer) {
		padding-top: 1.5rem;
		max-width: 768px;
		line-height: 1.4;
		text-align: justify;
		display: block;
	}

	:global(question) {
		font-weight: bold;
	}

	:global(answer) {
		padding-top: 0;
		margin-top: -24px;
	}

	:global(q) {
		font-family: Tahoma, sans-serif;
	}

	:global(q):before,
	:global(q):after {
		content: '“';
		font-family: Georgia;
		font-size: 8rem;
		margin: 2rem 0 0 -4rem;
		position: absolute;
		opacity: 0.5;
	}

	:global(q):after {
		content: '”';
		margin: 4rem 0 0 1rem;
	}

	:global(c) {
		opacity: 0.5;
		font-size: 1.2rem;
		/* text-align: center; */
	}

	:global(url) {
		font-size: 1.2rem;
		display: block !important;
		text-align: left;
		color: red !important;
		text-decoration-line: underline;
	}
</style>
