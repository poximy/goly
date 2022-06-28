import { writable } from 'svelte/store';

const error = writable<string>('');

export { error };
