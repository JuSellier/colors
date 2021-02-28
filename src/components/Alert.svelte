<script>
  import { onMount } from "svelte";
  import { destroyDomEl } from "../utils/common";

  export let error = false;
  export let color;
  let alertEl;

  onMount(() => {
    alertEl.style.background = color;

    setTimeout(() => {
      destroyDomEl(alertEl);
    }, 2000);
  });
</script>

<style>
  section {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 10;

    padding: 10px 10px 10px 20px;
    width: max-content;
    max-width: 60vw;
    display: flex;
    align-items: center;
    column-gap: 15px;
    justify-content: space-between;

    box-shadow: 0 0 50px #000, 0 0 0 1px #808080;
  }

  span {
    text-shadow: 1px 1px var(--clr-bg), -1px -1px var(--clr-bg),
      -1px 1px var(--clr-bg), 1px -1px var(--clr-bg);
  }

  button {
    box-shadow: 0 0 0 1px #ffffff90;
    padding: 5px;
    font-size: 15px;
    min-width: 2rem;
    min-height: 2rem;
    justify-content: center;
  }
</style>

<section bind:this={alertEl}>
  <span>{error ? "Couldn't copy" : 'Copied'} {color} to your clipboard.</span>
  <button on:click={() => destroyDomEl(alertEl)}>X</button>
</section>
