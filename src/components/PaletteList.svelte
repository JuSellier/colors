<script>
  import Palette from "./Palette.svelte";

  export let palettes;
  console.log(palettes);
</script>

<style>
  section.top {
    padding: 20px 0 0;
    border-top: 1px solid var(--clr-txt);
    min-height: 90vh;
  }

  div {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }
</style>

<section class="top">
  <div>
    {#each palettes as palette}
      <Palette {...palette} />
    {/each}
  </div>
</section>
