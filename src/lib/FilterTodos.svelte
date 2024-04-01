<script lang="ts">
	export let selectedFilter: FilterType;
	export let setFilter: (filter: FilterType) => void;

	let filters: FilterType[] = ['all', 'active', 'completed'];
</script>

<!-- <div class="filters">
	<button on:click={() => setFilter('all')} class="filter">All</button>
	<button on:click={() => setFilter('active')} class="filter">Active</button>
	<button on:click={() => setFilter('completed')} class="filter">Completed</button>
</div> -->

<div class="filters">
	{#each filters as filter}
		<button
			on:click={() => setFilter(filter)}
			class:selected={selectedFilter === filter}
			class="filter">{filter}</button
		>
	{/each}
</div>

<style>
	.filters {
		display: flex;
		gap: var(--spacing-4);
	}

	.filter {
		text-transform: capitalize;
		padding: var(--spacing-4) var(--spacing-8);
		border: 1px solid transparent;
		border-radius: var(--radius-base);
	}

	.filter:hover {
		border: 1px solid var(--color-highlight);
	}

	.selected {
		border-color: var(--color-highlight);
	}
</style>
