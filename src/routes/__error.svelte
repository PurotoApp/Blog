<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				status: status,
				message: error.message
			}
		};
	}
</script>

<script>
	export let status, message;
</script>

<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
	<div class="w-96">
		<h1 class="mb-4 block text-center text-5xl font-bold">
			{status}
		</h1>
		<h2 class="mt-4 block text-center text-xl">
			{message}
		</h2>
	</div>
</div>
