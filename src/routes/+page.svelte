<script lang="ts">
	import { tick } from 'svelte';

	import AddTodo from '$lib/AddTodo.svelte';
	import ClearTodos from '$lib/ClearTodos.svelte';
	import FilterTodos from '$lib/FilterTodos.svelte';
	import Todo from '$lib/Todo.svelte';
	import TodosLeft from '$lib/TodosLeft.svelte';
	import { useStorage } from '$lib/stores/useStorage';

	let todos = useStorage<TodoType[]>('todos', []);

	let selectedFilter: FilterType = 'all';
	let filtering = false;

	$: todosAmount = $todos.length;
	$: incompleteTodos = $todos.filter((todo) => !todo.completed).length;
	$: filteredTodos = filterTodos($todos, selectedFilter);
	$: completedTodos = $todos.filter((todo) => todo.completed).length;
	$: duration = filtering ? 0 : 250;

	const generateRandomId = (): string => {
		return Math.random().toString(16).slice(2);
	};

	const addTodo = (text: string): void => {
		const newTodo: TodoType = {
			id: generateRandomId(),
			text,
			completed: false
		};

		$todos = [...$todos, newTodo];
	};

	const toggleCompleted = (event: MouseEvent): void => {
		const { checked } = event.target as HTMLInputElement;

		$todos = $todos.map((todo) => ({
			...todo,
			completed: checked
		}));
	};

	const completeTodo = (id: string): void => {
		$todos = $todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
	};

	const removeTodo = (id: string): void => {
		$todos = $todos.filter((todo) => todo.id !== id);
	};

	const editTodo = (id: string, newText: string): void => {
		const index = $todos.findIndex((todo) => todo.id === id);
		$todos[index].text = newText;
	};

	const setFilter = async (filter: FilterType): Promise<void> => {
		filtering = true;
		await tick();
		selectedFilter = filter;
		filtering = false;
		await tick();
	};

	const filterTodos = (todos: TodoType[], filter: FilterType): TodoType[] => {
		switch (filter) {
			case 'all':
				return todos;
			case 'active':
				return todos.filter((todo) => !todo.completed);
			case 'completed':
				return todos.filter((todo) => todo.completed);
		}
	};

	const clearCompleted = (): void => {
		$todos = $todos.filter((todo) => todo.completed === false);
	};
</script>

<section class="todos">
	<AddTodo {addTodo} {toggleCompleted} {todosAmount} />

	{#if todosAmount}
		<ul class="todo-list">
			{#each filteredTodos as todo (todo.id)}
				<Todo {todo} {completeTodo} {removeTodo} {editTodo} {duration} />
			{/each}
		</ul>

		<div class="actions">
			<TodosLeft {incompleteTodos} />
			<FilterTodos {selectedFilter} {setFilter} />
			<ClearTodos {clearCompleted} {completedTodos} />
		</div>
	{/if}
</section>

<style>
	.todos {
		--width: 500px;
		--todos-bg: hsl(0 0% 98%);
		--todos-text: hsl(220 20% 14%);

		width: var(--width);
		color: var(--todos-text);
		background-color: var(--todos-bg);
		border-radius: var(--radius-base);
		border: 1px solid var(--color-gray-90);
		box-shadow: 0 0 4px var(--shadow-1);
	}

	.todo-list {
		list-style: none;
	}

	.actions {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--spacing-8) var(--spacing-16);
		font-size: 0.9rem;
		border-top: 1px solid var(--color-gray-90);
	}

	.actions:before {
		content: '';
		height: 40px;
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		box-shadow:
			0 1px 1px hsla(0, 0%, 0%, 0.2),
			0 8px 0 -3px hsl(0, 0%, 96%),
			0 9px 1px -3px hsla(0, 0%, 0%, 0.2),
			0 16px 0 -6px hsl(0, 0%, 96%),
			0 17px 2px -6px hsla(0, 0%, 0%, 0.2);
		z-index: -1;
	}
</style>
