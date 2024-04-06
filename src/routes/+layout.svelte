<script lang="ts">
	import '../global.css';
	import Header from '$lib/Header.svelte';
	import { darkMode } from '$lib/stores/ThemeStore';
	import { onMount } from 'svelte';

	onMount(() => {
		if (typeof window !== 'undefined') {
			$darkMode ? (document.body.dataset.theme = 'dark') : (document.body.dataset.theme = 'light');
		}
	});

	$: {
		if (typeof window !== 'undefined') {
			$darkMode ? (document.body.dataset.theme = 'dark') : (document.body.dataset.theme = 'light');
		}
	}
</script>

<svelte:head>
	<title>Svelte Todo</title>
</svelte:head>

<svelte:body />

<Header />

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
