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
    export let
        status,
        message;
</script>

<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div class="w-96">
        <h1 class="block text-5xl font-bold text-center mb-4">
            {status}
        </h1>
        <h2 class="text-xl block text-center mt-4">
            {message}
        </h2>
    </div>
</div>