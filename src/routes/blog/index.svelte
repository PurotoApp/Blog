<script lang="ts">
	import { onMount } from 'svelte';
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	import { goto } from '$app/navigation';

	onMount(() => goto('/'));
</script>
