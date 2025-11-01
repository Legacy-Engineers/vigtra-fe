import { writable } from 'svelte/store';
import type { userGqlItemType } from './types';

export const userStore = writable<userGqlItemType>();
export const useLayout = $state({ value: true });
