<script>
	import Intro from "./components/Intro.svelte";
	import PaletteList from "./components/PaletteList.svelte";
	import { testPaletteList } from "./db/palettes";
</script>

<style>
	main {
		padding: 2rem var(--size-sides);
		display: flex;
		flex-direction: column;
		row-gap: 2rem;
	}
</style>

<main>
	<Intro />
	<PaletteList palettes={testPaletteList} />
</main>
