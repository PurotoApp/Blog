<script lang="ts">
    import {blogList} from '$lib/blogList'
    import Box from '../components/Box.svelte';
</script>

<svelte:head>
    <title>Puroto Blog - Home</title>
</svelte:head>

<!--    Title   -->
<div class="flex justify-center my-32">
    <div class="w-96">
        <h1 class="block text-5xl font-bold text-center mb-4">
            Puroto Blog
        </h1>
        <h2 class="text-xl block text-center mt-4">
            Get the latest news on Puroto!
        </h2>
    </div>
</div>
<!--    Blog list    -->
<div class="relative w-11/12 mx-auto">
    {#each $blogList as blog}
    <Box {blog}/>
    {:else}
    <div class="flex justify-center mt-40">
        <h2 class="text-lg block text-center mt-4 text-gray-10">
            We couldn't find any blog 😫
        </h2>
    </div>
    {/each}
</div>