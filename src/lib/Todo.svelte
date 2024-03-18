<script lang="ts">
	import { todos } from '$lib/store';
	import { tick } from 'svelte';
	export let todo: Todo;

	const handleChecked = (checkedTodo: Todo) => {
		$todos = $todos.map((todo) => {
			if (todo.id === checkedTodo.id) {
				return { ...checkedTodo, completed: !checkedTodo.completed };
			}
			return todo;
		});
	};
</script>

<div class="card" class:completed={todo.completed}>
	<h2 class="title">{todo.title}</h2>
	<label for={`${todo.id}`}>{todo.completed ? 'Uncheck' : 'Check'}</label>
	<input
		type="checkbox"
		bind:checked={todo.completed}
		id={`${todo.id}`}
		on:change={() => handleChecked(todo)}
	/>
</div>

<style lang="scss">
	.card {
		border: 1px solid black;
		display: flex;
		align-items: center;
		padding: 1rem 2rem;

		h2 {
			font-size: 2em;
			flex: 1;
		}

		label {
			font-size: 1.5em;
		}

		input {
			height: 20px;
			aspect-ratio: 1;
			margin-left: 0.5em;
		}
	}

	.completed {
		background-color: grey;
	}
</style>
