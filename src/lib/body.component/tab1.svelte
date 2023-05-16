<script lang="ts">
    import First from "./tab1.components/first.part.svelte";
    import Second from "./tab1.components/second.part.svelte";
    import Third from "./tab1.components/third.part.svelte";
    import Forth from "./tab1.components/forth.part.svelte";
    import {common_shape} from "../../store.ts";
</script>

<form class="flex flex-col m-5 p-5 {$common_shape} space-y-5 bg-emerald-100 w-[40vw]">
    <div class="flex h-full space-x-10">
        <First/>
        <Second/>
    </div>
    <div class="flex h-full space-x-10 items-center justify-between">
        <Third/>
        <Forth/>
    </div>
</form>