import { writable } from 'svelte/store';

export interface Todo {
   id: number;
   title: string;
   completed: boolean;
}

const initialState: Todo[] = [
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

export let todos: Todo[] = writable([])

