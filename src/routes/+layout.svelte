<script lang="ts">
	import '../app.css';
	import Button from '$lib/Button.svelte';

	let dark = false;

	const handleDarkMode = () => {
		dark = !dark;
		window.document.body.classList.toggle('dark');
	};
</script>

<header style={dark ? 'background-color: #aaa' : ''}>
	<h1>My todo app</h1>
	<Button on:dark-mode={handleDarkMode} />
</header>

<slot />

<style lang="scss">
	:global(body) {
		background-color: #ccc;
		color: #333;
	}

	:global(body.dark) {
		background-color: #333;
		color: #ccc;
	}

	header {
		display: flex;
		justify-content: space-between;
		padding: 1em 3em;
		background-color: #222;
	}
</style>
