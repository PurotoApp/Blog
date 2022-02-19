<script lang="ts">
	import { onMount } from 'svelte';
	import '../global.css';
	import Header from '../components/Header.svelte';
	import Icon from '../components/Icon.svelte';

	let loading = true;
	onMount(() => (loading = false));
</script>

{#if loading}
	<div class="absolute z-50 h-full w-full bg-background">
		<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
			<Icon size="6rem" stroke="#DBBE76" />
		</div>
	</div>

	<div class="hidden">
		<slot />
	</div>
{:else}	
	<Header />

<main class="h-full w-full">
	<slot />
</main>

{/if}