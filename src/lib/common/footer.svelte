<script lang="ts">
	import { repoUrl } from '$lib/common/constants';
	import SvgIcon from '$lib/common/svgIcon.svelte';
</script>

<div class="p-8 sticky top-[100vh]">
	<section
		class="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-5 lg:space-y-0"
	>
		<span class="pr-4">
			<p class="px-10 inline-flex text-2xl">
				<img src="{repoUrl}images/AnamAzkaLogo.png" alt="Logo" class="w-9 mx-2" /> ANAM
			</p>
		</span>
		<div class="px-4 logo-cloud grid-cols-2 gap-1">
			<a
				class="btn bg-[#ea4335] text-white"
				href="mailto:fatimaanam4@gmail.com"
				target="_blank"
				rel="noreferrer"
			>
				<SvgIcon name="mail" fill="fill-white" />
				<span class="hidden lg:inline-block ml-2 text-white pt-1">Mail</span>
			</a>
			<a
				class="btn bg-[#d2295f] text-white"
				href="https://www.instagram.com/anamscape/"
				target="_blank"
				rel="noreferrer"
			>
				<a title="Instagram" href="https://commons.wikimedia.org/wiki/File:Instagram_logo_2016.svg">
					<img
						width="32"
						alt="Instagram logo 2016"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/32px-Instagram_logo_2016.svg.png"
					/>
				</a>
				<span class="hidden lg:inline-block ml-2 text-white pt-1">Instagram</span>
			</a>
		</div>
	</section>
</div>
