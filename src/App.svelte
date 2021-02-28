<script>
	import Footer from "./components/Footer.svelte";
	import Intro from "./components/Intro.svelte";
	import PaletteList from "./components/PaletteList.svelte";
	import { testPaletteList } from "./db/palettes";
</script>

<style>
	main {
		padding: 20px var(--size-sides);
		display: flex;
		flex-direction: column;
		row-gap: 2rem;
	}
</style>

<main>
	<Intro />
	<PaletteList palettes={testPaletteList} />
</main>
<Footer />
