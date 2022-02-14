<script lang=ts>
    import type { IBox } from '$lib/interface';
    import { compareDates } from '$lib/compareDates';

    export let blog: IBox = {
        link: "null",
        title: "Title",
        description: "Description",
        date: compareDates(new Date().getTime())
    };
</script>

<a href="/blog/{blog.link}" class="group mx-auto mb-6 grid cursor-pointer rounded-lg p-1 transition hover:bg-gray-1 sm:max-w-full lg:w-1/3">
    <div class="bg-gray-4 rounded-lg w-full h-64">
        <div class="rounded-t-lg w-full h-40 overflow-hidden">
            {#if blog.image}
                <div class="rounded-t-lg w-full bg-cover bg-no-repeat bg-center h-40 transition group-hover:scale-110" style="background-image: url({blog.image})"/>
            {:else}
                <div class="rounded-t-lg w-full h-40 bg-gold-5"/>
            {/if}
            </div>
        <div class="mx-2 my-1">
            <span class="inline-block text-xl h-8 max-w-10/12 text-ellipsis break-all overflow-hidden">{blog.title}</span>
            <span class="text-sm float-right h-8 w-max text-gray-10 inline overflow-hidden">• {blog.date}</span>
            <span class="text-sm text-ellipsis h-12 break-all overflow-hidden block text-gray-10">{blog.description}</span>
        </div>
    </div>
</a>