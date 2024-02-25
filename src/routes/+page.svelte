<script lang="ts">
	interface Todo {
		id: number;
		title: string;
		completed: boolean;
	}

	let todoTitle = '';

	let todos: Todo[] = [
		{
			id: 1,
			title: 'First',
			completed: false
		},
		{
			id: 2,
			title: 'Second',
			completed: false
		}
	];

	const handleSubmit = () => {
		console.log(event);
		const newTodo: Todo = {
			id: todos.length + 1,
			title: todoTitle,
			completed: false
		};

		todos = [...todos, newTodo];
	};

	// $: console.log(todos);
</script>

<div class="container">
	<h1>Todos</h1>
	<div class="todos">
		{#each todos as todo (todo.id)}
			<div class="card {todo.completed ? 'completed' : ''}">
				<h2 class="title">{todo.title}</h2>
				<label for={`${todo.id}`}>{todo.completed ? 'Uncheck' : 'Check'}</label>
				<input type="checkbox" id={`${todo.id}`} bind:checked={todo.completed} />
			</div>
		{/each}
	</div>
	<form on:submit|preventDefault={handleSubmit}>
		<label for="title">Todo title</label>
		<input type="text" name="title" id="title" bind:value={todoTitle} required />
		<button type="submit">Create</button>
	</form>
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
