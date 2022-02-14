<script context="module">
	export async function load({ params }) {
		let path = params.path;
		const res = await fetch(`https://blogapi.puroto.net/blog/${path}`);
		const data = await res.json();
		return { props: { data } };
	}
</script>

<script lang="ts">
    import {marked} from "marked";
	export let data;
    import { compareDates } from '$lib/compareDates';

	let blog = data.data;
	switch(blog.author.toLowerCase()) {
		case 'alex':
		blog.authorAvatar = '/avatars/Alex.png'
		break;
		case 'stax the fox':
		blog.authorAvatar = '/avatars/Stax.jpg'
		break;
		default:
		blog.authorAvatar = null
		break;
	}

	blog.color = "#DBBE76";
    blog.date = compareDates(Number(blog.date));
	blog.timeRead = `${Math.ceil(blog.content.split(' ').length / 250)} min read`;

	let showShareMenu = false;
	function share() {
		if(navigator.share) {
			navigator.share({
				title: blog.title,
				text: blog.content,
				url: `https://blog.puroto.net/blog/${blog.link}`
			})
		}else{
			showShareMenu = !showShareMenu;
		}
	}
</script>

<svelte:head>
	<title>Puroto Blog - {blog.title}</title>

	<meta property="og:type" content="website" />
    <meta property="og:url" content="https://blog.puroto.net/blog/{blog.link}" />
    <meta property="og:title" content="Puroto Blog - {blog.title}" />
    <meta
        property="og:description"
        content="{blog.description}"
    />
    <meta property="og:image" content="https://blogapi.puroto.net/images/{blog.link}" />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content="Puroto Blog - {blog.title}" />
    <meta property="twitter:site" content="blog.puroto.net/blog/{blog.link}" />
    <meta
        property="twitter:image"
        content="https://blogapi.puroto.net/images/{blog.link}"
    />
    <meta
        property="twitter:description"
        content="{blog.description}"
    />
</svelte:head>

<div class="absolute left-1/2 -translate-x-1/2 mt-32 w-11/12 md:w-8/12">
	{#if blog.image}
	<div class="rounded-lg w-full bg-cover bg-no-repeat bg-center bg-gold-5 h-40" style=";background-image: url({blog.image})"/>
	{:else}
	<div class="rounded-lg w-full bg-cover bg-no-repeat bg-center bg-gold-5 h-40"/>
	{/if}
	<div class="my-4">
		<span class="text-4xl font-semibold">{blog.title}</span>
	</div>
	<hr class="mb-8 border-gray-4">
	<div class="my-8 flex flex-col md:grid md:grid-cols-[20%_60%_20%]">
		<!-- DESKTOP -->
		<div class=" my-6 md-hidden">
			<div class="flex flex-nowrap">
				{#if blog.authorAvatar == null}
				<div class="h-16 w-16 bg-gold-5 rounded-lg"/>
				{:else}
				<div class="h-16 w-16 bg-gold-5 rounded-lg bg-cover bg-no-repeat bg-center" style="background-image: url({blog.authorAvatar})"/>
				{/if}
			</div>
			<span class="text-center font-semibold text-lg select-none">{blog.author}</span>
		</div>

		<div class="md-hidden prose prose-invert prose-img:rounded-md">
			{@html marked(blog.content)}
		</div>

		<div class="my-6 md-hidden select-none">
			<div class="flex flex-row-reverse">
				<span class="float-right text-gray-10 ml-1">{blog.timeRead}</span>
				<svg xmlns="http://www.w3.org/2000/svg" class="mr-1 text-gray-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			</div>
			<div class="flex flex-row-reverse mt-4">
				<span class="float-right text-gray-10 ml-1">{blog.date}</span>
				<svg xmlns="http://www.w3.org/2000/svg" class="mr-1 text-gray-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
				</svg>
			</div>
			<div class="flex flex-row-reverse mt-4">
				<div>
					<div on:click={share} class="bg-gray-3 px-2 py-1 rounded-lg hover:bg-gray-4 active:bg-gray-5 transition cursor-pointer">
						<span class="float-right text-gray-10 ml-1">Share</span>
						<svg xmlns="http://www.w3.org/2000/svg" class="mr-1 text-gray-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
						</svg>
					</div>
					{#if showShareMenu}
					<div class="absolute flex justify-between bg-gray-4 rounded-lg p-1 right-0 translate-y-2">
						<div><a href="https://twitter.com/intent/tweet?url=https://blog.puroto.net/blog/{blog.link}" target="blank" rel="noopener noreferrer"><img class="h-8 w-8" src="/icons/twitter.png" alt="Share on Twitter" /></a></div>
						<div class="mx-4"><a href="https://www.facebook.com/sharer.php?u=https://blog.puroto.net/blog/{blog.link}" target="blank" rel="noopener noreferrer"><img class="h-8 w-8" src="/icons/facebook.png" alt="Share on Facebook" /></a></div>
						<div><a href="https://www.linkedin.com/sharing/share-offsite/?url=https://blog.puroto.net/blog/{blog.link}" target="blank" rel="noopener noreferrer"><img class="h-8 w-8" src="/icons/linkedin.png" alt="Share on LinkedIn" /></a></div>
					</div>
					{/if}
				</div>
			</div>
		</div>

		<!-- MOBILE -->
		<div class="mb-6 md:hidden flex justify-between select-none">
			<div class="flex flex-row-reverse">
				<span class="float-right text-gray-10 ml-1">{blog.timeRead}</span>
				<svg xmlns="http://www.w3.org/2000/svg" class="mr-1 text-gray-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			</div>
			<div class="flex flex-row-reverse">
				<span class="float-right text-gray-10 ml-1">{blog.date}</span>
				<svg xmlns="http://www.w3.org/2000/svg" class="mr-1 text-gray-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
				</svg>
			</div>
			<div class="flex flex-row-reverse">
				<div on:click={share} class="bg-gray-3 px-2 py-1 rounded-lg hover:bg-gray-4 active:bg-gray-5 transition cursor-pointer">
					<span class="float-right text-gray-10 ml-1">Share</span>
					<svg xmlns="http://www.w3.org/2000/svg" class="mr-1 text-gray-10 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
					</svg>
				</div>
				{#if showShareMenu}
				<div class="absolute flex justify-between bg-gray-4 rounded-lg p-1 right-0 -translate-y-12">
					<div><a href="https://twitter.com/intent/tweet?url=https://blog.puroto.net/{blog.link}" target="blank" rel="noopener noreferrer"><img class="h-8 w-8" src="/icons/twitter.png" alt="Share on Twitter" /></a></div>
					<div class="mx-4"><a href="https://www.facebook.com/sharer.php?u=https://blog.puroto.net/{blog.link}" target="blank" rel="noopener noreferrer"><img class="h-8 w-8" src="/icons/facebook.png" alt="Share on Facebook" /></a></div>
					<div><a href="https://www.linkedin.com/sharing/share-offsite/?url=https://blog.puroto.net/{blog.link}" target="blank" rel="noopener noreferrer"><img class="h-8 w-8" src="/icons/linkedin.png" alt="Share on LinkedIn" /></a></div>
				</div>
				{/if}
			</div>
		</div>

		<div class="md:hidden prose prose-invert prose-img:rounded-md">
			{@html marked(blog.content)}
		</div>

		<hr class="md:hidden my-8 border-gray-4">

		<div class=" my-6 md:hidden">
			<div class="flex flex-nowrap">
				{#if blog.authorAvatar == null}
				<div class="h-16 w-16 bg-gold-5 rounded-lg"/>
				{:else}
				<div class="h-16 w-16 bg-gold-5 rounded-lg bg-cover bg-no-repeat bg-center" style="background-image: url({blog.authorAvatar})"/>
				{/if}
			</div>
			<span class="float-left font-semibold text-lg select-none">{blog.author}</span>
		</div>
	</div>
</div>