<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let dark = false;

	const handleDarkMode = () => {
		dark = !dark;
		dispatch('dark-mode', dark);
	};
</script>

<button class="dark-mode" on:click={handleDarkMode}>{dark ? 'Light mode' : 'Dark mode'}</button>
