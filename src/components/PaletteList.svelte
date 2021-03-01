<script>
  import Palette from "./Palette.svelte";

  export let palettes;
  console.log(palettes);
</script>

<style>
  section.top {
  }

  div {
    --spacing: calc(1rem + 10vh);
    padding: var(--spacing) 0;
    display: flex;
    flex-direction: column;
    row-gap: var(--spacing);
  }
</style>

<section class="top">
  <div>
    {#each palettes as palette}
      <Palette {...palette} />
    {/each}
  </div>
</section>
