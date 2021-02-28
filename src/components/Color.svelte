<script>
  import { onMount } from "svelte";
  import { updateClipboard } from "../utils/common";
  import Alert from "./Alert.svelte";

  export let hex;
  export let miniMode = false;

  let colorEl;

  onMount(() => {
    colorEl.style.background = hex;
  });

  function onClick() {
    // copy color hex code to clipboard
    updateClipboard(
      hex,
      () => {
        new Alert({
          target: document.body,
          props: {
            color: hex,
          },
        });
      },
      () => {
        new Alert({
          target: document.body,
          props: {
            error: true,
            color: hex,
          },
        });
      }
    );
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
  {#if !miniMode}<button on:click={onClick}>{hex}</button>{/if}
</section>
