<script lang="ts">
    import Logo from "../assets/wakf.svg";
    import Body from "./body.svelte";
    import {bgcolor, common_color, common_txt_color, dark_mode, txt_color} from "../store";

    let body;
    let temp = "hover:" + $bgcolor
</script>

<nav class="flex h-16 items-center justify-between rounded-md {$common_color} px-20">
    <div>
        <a on:click={() => dark_mode()}>
            <img alt="Logo" class="h-14 w-14" src="{Logo}">
        </a>
    </div>
    <div class="space-x-28">
        <a class="px-3 text-2xl {$txt_color} py-3.5 hover:{$bgcolor} hover:{$common_txt_color}"
           on:click={() => body.load_tab(1)}>TAB 1</a>
        <a class="px-3 text-2xl {$txt_color} py-3.5 hover:{$bgcolor} hover:{$common_txt_color}"
           on:click={() => body.load_tab(2)}>TAB 2</a>
        <a class="px-3 text-2xl {$txt_color} py-3.5 hover:{$bgcolor} hover:{$common_txt_color}"
           on:click={() => body.load_tab(3)}>TAB 3</a>
    </div>
</nav>

<Body bind:this={body}/>

