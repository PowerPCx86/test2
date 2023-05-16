
<script lang="ts">
    import {bgcolor, inv_txt_color} from "../../store";

    let technologies = [
        ['Svelte.JS', 'https://raw.githubusercontent.com/sveltejs/svelte/29052aba7d0b78316d3a52aef1d7ddd54fe6ca84/site/static/images/svelte-android-chrome-512.png'],
        ['Vite', 'https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png'],
        ['PostCSS', 'http://maddesigns.de/wp-content/uploads/2016/02/postcss-logo.png'],
        ['Tailwind CSS', 'https://iconape.com/wp-content/files/an/351546/png/tailwind-css-logo.png']
    ];
</script>


<div class=" flex-grow flex flex-col items-center justify-center space-y-20">
    <h1 class="text-3xl {$inv_txt_color}">Technologies used in this project</h1>

    <div class="flex space-x-32">
        {#each technologies as technology}
        <div class="flex flex-col items-center justify-center space-y-10">
            <img alt={technology[0]} src={technology[1]}>
            <p class="{$inv_txt_color}">{technology[0]}</p>
        </div>
        {/each}
    </div>

</div>

<style>
    img {
        height: 150px;
    }
</style>