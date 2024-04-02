import { writable, type Writable } from 'svelte/store';

export const useStorage = <T>(key: string, initialValue: T): Writable<T> => {
   const serialize = JSON.stringify;
   const deserialize = JSON.parse;

   let storedValue: T | null = null;

   if (localStorage.getItem(key) !== null) {
      storedValue = deserialize(localStorage.getItem(key)!);
   }

   let store = writable(storedValue ? storedValue : initialValue);
   store.subscribe((value) => localStorage.setItem(key, serialize(value)));

   return store;
};