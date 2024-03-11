<script lang="ts">
	import { todos } from '$lib/store';

	let todoTitle = '';
</script>

<div class="container">
	<h1>Todos</h1>
	<div class="todos"></div>
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
