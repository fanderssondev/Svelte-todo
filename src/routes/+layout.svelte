<script>
	import '../app.css';
	import Button from '$lib/Button.svelte';

	let dark = false;

	const handleDarkMode = () => {
		window.document.body.classList.toggle('dark');
	};
</script>

<header>
	<h1>My todo app</h1>
	<Button on:dark-mode={handleDarkMode} />
</header>

<slot />

<style lang="scss">
	:global(body) {
		background-color: #ccc;
	}

	:global(body.dark) {
		background-color: #333;
	}

	header {
		display: flex;
		justify-content: space-between;
		padding: 1em 3em;
	}
</style>
