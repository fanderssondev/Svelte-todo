<script lang="ts">
	import { todos } from '$lib/store';
	import Form from '$lib/Form.svelte';
	import Todo from '$lib/Todo.svelte';

	type Filter = 'all' | 'unfinished' | 'finished';

	let state: Filter = 'all';

	const handleFilter = (sorted: Filter) => {
		switch (sorted) {
			case 'all':
				return $todos;
			case 'unfinished':
				return $todos.filter((todo) => todo.completed === false);
			case 'finished':
				return $todos.filter((todo) => todo.completed === true);
		}
	};

	$: filtered = handleFilter(state);
	$: notDone = $todos.filter((todo) => todo.completed === false).length;
	$: done = $todos.filter((todo) => todo.completed === true).length;
	$: console.log(`state: ${state}, `, `filtered:`, filtered);
</script>

<div class="container">
	<h1>Todos</h1>
	<div class="todos">
		{#each $todos as todo}
			<Todo {todo} />
		{/each}
	</div>

	<div class="sorting">
		<button on:click={() => (state = 'all')}>All</button>
		<button on:click={() => (state = 'unfinished')}>Unfinished</button>
		<button on:click={() => (state = 'finished')}>Finished</button>
	</div>

	<Form />

	<div class="stats">
		<div class="notDone">
			Not done: {notDone}
		</div>

		<div class="done">
			Not done: {done}
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		max-width: min(960px, 80%);
		margin-inline: auto;
	}

	.todos {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.stats {
		display: flex;
		gap: 5rem;
	}
</style>
