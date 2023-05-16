<script lang="ts">
    import Nav from "./lib/nav.svelte";
    import {bgcolor} from "./store";
</script>

<main>
    <div class="h-screen flex flex-col p-3 space-y-3 {$bgcolor}">
        <Nav />
    </div>
</main>

<style>

</style>
