// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
   namespace App {
      // interface Error {}
      // interface Locals {}
      // interface PageData {}
      // interface PageState {}
      // interface Platform {}
   }
   export interface Todo {
      id: number;
      title: string;
      completed: boolean;
   }
}

export {};
