<script>
  import { onMount } from "svelte";

  export let name;
  export let hex;
  let colorEl;

  onMount(() => {
    colorEl.style.background = hex;
  });

  function onClick() {
    // copy color hex code to clipboard
  }
</script>

<style>
  span.top {
    display: inline-flex;
  }
</style>

<span bind:this={colorEl} class="top">{name}</span>
