
<script lang="ts">
    import {bgcolor} from "../../../store";
</script>


<div>
    <div class="space-y-2">
        <label class="block font-bold text-green-600" for="name">Name :</label>
        <input id="name" type="text" placeholder=" John Doe" class="rounded-md border border-green-600 {$bgcolor}">
    </div>
    <div class="space-y-2">
        <label class="block font-bold text-green-600" for="age">Age :</label>
        <input id="age" type="number" placeholder=" 00" class="rounded-md border border-green-600 {$bgcolor}">
    </div>
    <div class="space-y-2">
        <label class="block font-bold text-green-600" for="phone">Phone Number :</label>
        <input id="phone" type="tel" placeholder=" 00000 000 000" class="rounded-md border border-green-600 {$bgcolor}">
    </div>
    <div class="space-y-2">
        <label class="block font-bold text-green-600" for="birth">Birthday :</label>
        <input id="birth" type="date" class="rounded-md border border-green-600 {$bgcolor}">
    </div>
</div>