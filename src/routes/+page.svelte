<script lang="ts">
	import { todos } from '$lib/store';
	import Form from '$lib/Form.svelte';
	import Todo from '$lib/Todo.svelte';

	const filter = ['All', 'Unfinished', 'Finished'] as const;
	type Filter = (typeof filter)[number];

	let state: Filter = 'All';

	const handleFilter = (sorted: Filter) => {
		switch (sorted) {
			case 'All':
				return $todos;
			case 'Unfinished':
				return $todos.filter((todo) => todo.completed === true);
			case 'Finished':
				return $todos.filter((todo) => todo.completed === false);
		}
	};

	$: filtered = handleFilter(state);
	$: notDone = $todos.filter((todo) => todo.completed === false).length;
	$: done = $todos.filter((todo) => todo.completed === true).length;
	$: console.log(state);
</script>

<div class="container">
	<h1>Todos</h1>
	<div class="todos">
		{#each filtered as todo}
			<Todo {todo} />
		{/each}
	</div>

	<div class="sorting">
		<button on:click={() => (state = 'All')}>All</button>
		<button on:click={() => (state = 'Unfinished')}>Unfinished</button>
		<button on:click={() => (state = 'Finished')}>Finished</button>
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
