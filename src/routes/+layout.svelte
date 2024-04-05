<script lang="ts">
	import '../global.css';
	import Header from '$lib/Header.svelte';
</script>

<svelte:head>
	<title>Svelte Todo</title>
</svelte:head>

<Header></Header>

<main>
	<h1 class="title">todos</h1>
	<slot />
</main>

<style>
	.title {
		font-size: var(--font-80);
		font-weight: inherit;
		text-align: center;
		color: var(--color-title);
	}
</style>
