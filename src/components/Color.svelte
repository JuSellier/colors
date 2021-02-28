<script>
  import { onMount } from "svelte";

  export let name;
  export let hex;
  export let miniMode = false;

  let colorEl;

  onMount(() => {
    colorEl.style.background = hex;
  });

  function onClick() {
    // copy color hex code to clipboard
  }
</script>

<style>
  section.top {
    display: inline-flex;
    padding: 10px;

    justify-content: flex-end;
    column-gap: 10px;
    row-gap: 10px;
  }
  button {
    background: var(--clr-bg);
  }
</style>

<section bind:this={colorEl} class="top">
  {#if !miniMode}<button>{hex}</button>{/if}
</section>
