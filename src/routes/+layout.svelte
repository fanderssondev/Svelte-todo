<script lang="ts">
	import '../global.css';
</script>

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
