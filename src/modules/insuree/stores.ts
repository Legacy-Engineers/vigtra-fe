import { writable } from 'svelte/store';
import type { insureeTabType } from './types';

export const activeInsureeTab = writable<insureeTabType>('ins');
