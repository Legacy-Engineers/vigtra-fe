import { writable } from 'svelte/store';
import { type InsureeGqlSearchForm, type InsureeGqlItem, type insureeTabType } from './types';
import type { corePaginationInfoGqlType } from '../core/types';



export const activeInsureeTab = writable<insureeTabType>('ins');

export const queriedInsurees = writable<InsureeGqlItem[]>([]);
export const loadingInsureeData = writable<boolean>(true)
export const insureeSearchFormData = writable<InsureeGqlSearchForm>({
    first: 10,
    offset: 0,
})

export const queriedInsureePaginationInfo = writable<corePaginationInfoGqlType>({}); 