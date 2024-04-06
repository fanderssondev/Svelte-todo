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
</style>
