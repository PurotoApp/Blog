<script lang="ts">
	import { compareDates } from '$lib/compareDates';

	export let blog = {
		link: 'null',
		title: 'Title',
		description: 'Description',
		image: null,
		date: compareDates(new Date().getTime())
	};
</script>

<a
	href="/blog/{blog.link}"
	class="group mx-auto mb-6 grid cursor-pointer rounded-lg p-1 transition hover:bg-gray-1 sm:max-w-full lg:w-1/3"
>
	<div class="h-64 w-full rounded-lg bg-gray-4">
		<div class="h-40 w-full overflow-hidden rounded-t-lg">
			{#if blog.image}
				<div
					class="h-40 w-full rounded-t-lg bg-cover bg-center bg-no-repeat transition group-hover:scale-110"
					style="background-image: url({blog.image})"
				/>
			{:else}
				<div class="rounded-t-lg w-full h-40 bg-gold-5" />
			{/if}
		</div>
		<div class="mx-2 my-1">
			<span class="max-w-10/12 inline-block h-8 overflow-hidden text-ellipsis break-all text-xl"
				>{blog.title}</span
			>
			<span class="float-right inline h-8 w-max select-none overflow-hidden text-sm text-gray-10"
				>• {blog.date}</span
			>
			<span class="block h-12 overflow-hidden text-ellipsis break-all text-sm text-gray-10"
				>{blog.description}</span
			>
		</div>
	</div>
</a>
