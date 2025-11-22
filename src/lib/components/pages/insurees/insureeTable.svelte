<script lang="ts">
	import NoDataFound from '$lib/components/core/noDataFound.svelte';
	import type { InsureeGQLItemType } from '$lib/gql/types/insuree';
	import { m } from '$lib/paraglide/messages';
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		Checkbox
	} from 'flowbite-svelte';

	const insurees: Array<InsureeGQLItemType> = [];
</script>

<Table hoverable={true}>
	<TableHead>
		<TableHeadCell class="p-4!">
			<Checkbox />
		</TableHeadCell>
		<TableHeadCell>{m['insuree.chfid']()}</TableHeadCell>
		<TableHeadCell>{m['insuree.last_name']()}</TableHeadCell>
		<TableHeadCell>{m['insuree.other_names']()}</TableHeadCell>
		<TableHeadCell>{m['insuree.dob']()}</TableHeadCell>
		<TableHeadCell>Price</TableHeadCell>

		<TableHeadCell>
			<span class="sr-only">Edit</span>
		</TableHeadCell>
	</TableHead>
	<TableBody>
		{#if insurees.length > 0}
			{#each insurees as ins}
				<TableBodyRow>
					<TableBodyCell class="p-4!">
						<Checkbox />
					</TableBodyCell>
					<TableBodyCell>{ins.chfId}</TableBodyCell>
					<TableBodyCell>{ins.lastName}</TableBodyCell>
					<TableBodyCell>{ins.otherNames}</TableBodyCell>
					<TableBodyCell>{ins.dob}</TableBodyCell>
					<TableBodyCell>
						<a
							href="/tables"
							class="text-primary-600 dark:text-primary-500 font-medium hover:underline">Edit</a
						>
					</TableBodyCell>
				</TableBodyRow>
			{/each}
		{:else}
			<TableBodyCell colspan={6} class="text-center">
				<NoDataFound />
			</TableBodyCell>
		{/if}
	</TableBody>
</Table>
