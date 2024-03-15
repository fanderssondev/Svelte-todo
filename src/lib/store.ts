import { writable } from 'svelte/store';
import { initialState } from './initialState';

export let todos = writable<Todo[]>(initialState);