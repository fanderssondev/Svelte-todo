<script lang="ts">
	import ThemeButton from './ThemeButton.svelte';
</script>

<header>
	<div class="header">
		<div class="logo">LOGO</div>
		<ThemeButton />
	</div>
</header>

<style>
	header {
		background-color: var(--color-bg-2);
		padding-block: 0.5em;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 90%;
		margin: 0 auto;
		min-height: 3rem;
	}

	button {
		display: grid;
		align-items: center;
		background-color: var(--color-bg-3);
		/* font-size: 3rem; */
		padding: 0.4rem;
		border-radius: 50%;
	}

	svg {
		--size: 2rem;

		color: var(--color-text-2);
		width: var(--size);
		aspect-ratio: 1;
		/* height: 50px; */
	}
</style>
