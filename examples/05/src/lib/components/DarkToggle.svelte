<DarkMode bind:theme />
<button class="text-sky-500 i-carbon-sun dark:i-carbon-moon" on:click={() => (theme = switchTheme)} >
</button>

<script>
import DarkMode from "svelte-dark-mode";
import {
    afterUpdate
} from "svelte";

let theme;

$: switchTheme = theme === "dark" ? "light" : "dark";
afterUpdate(() => {
    document.body.className = theme; // "dark" or "light"
});
</script>
