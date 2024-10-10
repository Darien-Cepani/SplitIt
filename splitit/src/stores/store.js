import { writable } from 'svelte/store';

export const darkMode = writable(false);

export const items = writable([]);

export const users = writable([]);