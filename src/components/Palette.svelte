<script>
  import Color from "./Color.svelte";

  export let name;
  export let colors;
  console.log(colors);
  export let description;
</script>

<style>
  section {
    padding: 10px;
    box-shadow: 0 0 0 1px #80808080;

    display: flex;
    flex-direction: column;
    /* row-gap: 1rem; */
  }

  h2 {
    position: relative;
    font-weight: 400;
    font-family: var(--font);
  }

  span {
    position: absolute;
    display: flex;
    top: 0;
    right: 0;
  }
  div {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    column-gap: 10px;
  }
</style>

<section>
  <h2>
    {name}
    <span>
      {#each colors as color}
        <Color {...color} miniMode />
      {/each}
    </span>
  </h2>
  {#if description}
    <p>{description}</p>
  {/if}

  <div>
    {#each colors as color}
      <Color {...color} />
    {/each}
  </div>
</section>
