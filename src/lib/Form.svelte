<script lang="ts">
	import { todos } from './store';

	let titleInput = '';

	const handleSubmit = (e: SubmitEvent) => {
		const form = e.target as HTMLFormElement;
		titleInput = form.querySelector<HTMLInputElement>('#title')?.value ?? '';

		const newTodo: Todo = {
			id: $todos.length + 1,
			title: titleInput,
			completed: false
		};

		$todos = [...$todos, newTodo];

		titleInput = '';
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<label for="title">Todo title</label>
	<input type="text" id="title" bind:value={titleInput} required />
	<button type="submit">Create</button>
</form>

<style lang="scss">
	form {
		margin-block: 2rem;
	}
</style>
