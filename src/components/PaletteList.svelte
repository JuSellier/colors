<script>
  import Palette from "./Palette.svelte";

  export let palettes;
  console.log(palettes);
</script>

<style>
</style>

<section>
  {#each palettes as palette}
    <Palette {...palette} />
  {/each}
</section>
