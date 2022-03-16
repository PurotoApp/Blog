<script context="module">
	import { get } from 'svelte/store';
	let lang = get(Lang);
	let Language = lang;
	if (lang == null) Language = 'en';

	export async function load() {
		const res = await fetch(`https://blogapi.puroto.net/list?lang=${Language}`);
		const data = await res.json();
		return {
			props: {
				data: data
			}
		};
	}
</script>

<script lang="ts">
	import Box from '../components/Box.svelte';
	import { Lang } from '$lib/setLang';

	export let data;
</script>

<svelte:head>
	<title>Puroto Blog - Home</title>

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://blog.puroto.net/" />
	<meta property="og:title" content="Puroto Blog - Home" />
	<meta
		property="og:description"
		content="The official blog of Puroto. Follow for deep insights into the community platform."
	/>
	<meta
		property="og:image"
		content="https://raw.githubusercontent.com/PurotoApp/Blog/main/static/preview.png"
	/>

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content="Puroto Blog - Home" />
	<meta property="twitter:site" content="blog.puroto.net" />
	<meta
		property="twitter:image"
		content="https://raw.githubusercontent.com/PurotoApp/Blog/main/static/preview.png"
	/>
	<meta
		property="twitter:description"
		content="The official blog of Puroto. Follow for deep insights into the community platform."
	/>
</svelte:head>

<!--    Title   -->
<div class="my-32 flex justify-center">
	<div class="w-96">
		<h1 class="mb-4 block text-center text-5xl font-bold">Puroto Blog</h1>
		<h2 class="mt-4 block text-center text-xl">Get the latest news on Puroto!</h2>
	</div>
</div>
<!--    Blog list    -->
<div class="relative mx-auto w-11/12">
	{#each data as blog}
		<Box lang={Language} {blog} />
	{:else}
		<div class="flex justify-center mt-40">
			<h2 class="text-lg block text-center mt-4 text-gray-10">We couldn't find any blog 😫</h2>
		</div>
	{/each}
</div>
