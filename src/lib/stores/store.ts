import { writable } from 'svelte/store';
import { useStorage } from './useStorage';

export const customStore = () => {
   let todos = writable(useStorage<TodoType[]>('todos', []));

   const { subscribe } = todos;

   const getLength = () => {
      return todos.subscribe.length;
   };

   return {
      subscribe,
      getLength,
   };

};