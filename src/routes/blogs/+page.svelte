<script lang="ts">
	import { getData } from '$lib/common/utlis';
	import { base } from '$app/paths';
	import { dataUrl } from '$lib/common/constants';

	let blogsURL = dataUrl + `data/collections.json`;
	let allBlogsPromise: Promise<any> = getData(blogsURL);
</script>

{#await allBlogsPromise}
	<div class="block pt-4 max-w-2xl m-auto">
		<span class="mx-4 h-48">
			<div>
				<div class="placeholder bg-slate-200 w-40 animate-pulse mt-2" />
				<div class="placeholder bg-slate-200 w-40 animate-pulse mt-2" />
				<div class="placeholder bg-slate-200 animate-pulse mt-2" />
				<div class="placeholder bg-slate-200 animate-pulse mt-2" />
				<hr class="my-5" />
			</div>
		</span>
	</div>
	<div class="block pt-4 max-w-2xl m-auto">
		<span class="mx-4 h-48">
			<div>
				<div class="placeholder bg-slate-200 w-40 animate-pulse mt-2" />
				<div class="placeholder bg-slate-200 w-40 animate-pulse mt-2" />
				<div class="placeholder bg-slate-200 animate-pulse mt-2" />
				<div class="placeholder bg-slate-200 animate-pulse mt-2" />
				<hr class="my-5" />
			</div>
		</span>
	</div>
{:then allBlogs}
	<div class="block pt-4">
		<span class="mx-4">
			{#each allBlogs['blogs'] as blog}
				<a href="{base}/blogs/{blog['name']}" class="h-48">
					<div class="text-xs text-left">
						{blog['author']} • {blog['date']}
						<div>
							<div class="text-2xl">{blog['name']}</div>
							<div class="text-base">{blog['preview']}</div>
						</div>
					</div>
				</a>
				<hr class="mb-16" />
			{/each}
		</span>
	</div>
{/await}
