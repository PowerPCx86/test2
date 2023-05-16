
<script lang="ts">

    import Tab1 from "./body.component/tab1.svelte";
    import Tab2 from "./body.component/tab2.svelte";
    import Tab3 from "./body.component/tab3.svelte";

    let Curr_tab;

    export function load_tab(tab_number: number) {
        switch (tab_number) {
            case 1: Curr_tab = Tab1; break;
            case 2: Curr_tab = Tab2; break;
            case 3: Curr_tab = Tab3; break;
        }
    }
    load_tab(1); //as default

</script>

<div class="flex flex-grow rounded-md border border-green-600">
    <svelte:component this={Curr_tab}/>
</div>