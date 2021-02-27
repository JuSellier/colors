<script>
  import Color from "./Color.svelte";

  export let name;
  export let colors;
  console.log(colors);
  export let description;
</script>

<style>
  div {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    column-gap: 10px;
  }
</style>

<section>
  <h2>{name}</h2>
  <p>{description}</p>
  <div>
    {#each colors as color}
      <Color {...color} />
    {/each}
  </div>
</section>
