<script>
	import { repoUrl } from '$lib/common/constants';
	import { base } from '$app/paths';
</script>

<img
	src="{repoUrl}images/main.jpg"
	alt="Nature"
	class="absolute top-0 -z-10 w-screen h-[36rem] object-cover"
/>

<div class="pt-20 text-white text-4xl text-center">
	Greetings! Welcome to Anamscape.<br />
	<div class="text-left inline-block pt-10">
		I am <span class="type inline-block">
			<span>
				<span>a Poet.</span>
				<span>a Mother.</span>
				<span>an Artist.</span>
			</span>
		</span>
	</div>
</div>
<div class="flex justify-center text-center pt-40">
	<div>
		<span class="m-4"
			><a href="{base}/poems" class="card m-auto inline-block w-64 h-64 text-center items-center"
				><img alt="Poems" src="{repoUrl}images/poems.jpg" /></a
			></span
		>
		<span class="m-4"
			><a href="{base}/books" class="card m-auto inline-block w-64 h-64 text-center items-center"
				><img alt="Books" src="{repoUrl}images/books.jpg" /></a
			></span
		>
		<span class="m-4"
			><a href="{base}/blogs" class="card m-auto inline-block w-64 h-64 text-center items-center"
				><img alt="Blog" src="{repoUrl}images/blog.jpg" /></a
			></span
		>
		<span class="m-4"
			><a
				href="{base}/calligraphy"
				class="card m-auto inline-block w-64 h-64 text-center items-center"
				><img alt="calligraphy" src="{repoUrl}images/calligraphy.jpg" /></a
			></span
		>
	</div>
</div>

<style>
	.type > span {
		display: grid;
		overflow: hidden;
		height: 1.2em;
	}
	.type span span {
		width: 0%;
		max-width: max-content;
		overflow: hidden;
		height: inherit;
		word-break: break-all;
		animation: c 0.5s infinite steps(1), t 1.5s linear infinite alternate, m 9s steps(3) infinite;
	}
	.type span span:before {
		content: ' ';
		display: inline-block;
	}
	@keyframes t {
		90%,
		100% {
			width: 100%;
		}
	}
	@keyframes c {
		0%,
		100% {
			box-shadow: 5px 0 0 #0000;
		}
		50% {
			box-shadow: 5px 0 0 red;
		}
	}
	@keyframes m {
		100% {
			transform: translateY(-300%);
		}
	}
</style>
