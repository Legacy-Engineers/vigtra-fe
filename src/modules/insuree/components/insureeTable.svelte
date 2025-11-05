<script lang="ts">
  import * as Table from '$lib/components/ui/table/index.js';
  import { Button } from '$lib/components/ui/button/index.js';
  import { Spinner } from '$lib/components/ui/spinner/index.js';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
  import * as Pagination from '$lib/components/ui/pagination/index.js';

  import { onMount } from 'svelte';
  import { EllipsisVerticalIcon, EyeIcon, PencilIcon } from '@lucide/svelte';
  import { push } from 'svelte-spa-router';
  import {
    insureeSearchFormData,
    loadingInsureeData,
    queriedInsureePaginationInfo,
    queriedInsurees,
  } from '../stores';
  import { loadInsurees } from '../loaders';
  import { getGqlCursorInfo } from '../../core/utils/gql';

  onMount(async () => {
    await loadInsurees($insureeSearchFormData);

    console.log(
      'end cursor',
      getGqlCursorInfo($queriedInsureePaginationInfo.endCursor),
      $queriedInsureePaginationInfo.endCursor,
    );
  });

  let totalInsurees = $derived(() => {
    return getGqlCursorInfo($queriedInsureePaginationInfo.endCursor) * getGqlCursorInfo($queriedInsureePaginationInfo.endCursor)
  })
</script>

<div class="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
  <Table.Root class="w-full text-sm">
    <Table.Caption class="p-4 text-muted-foreground text-left font-medium">
      A list of your recent insurees
    </Table.Caption>

    <Table.Header class="bg-muted/50">
      <Table.Row>
        <Table.Head class="w-[100px] font-semibold text-foreground"
          >Row No.</Table.Head
        >
        <Table.Head class="w-[180px] font-semibold text-foreground"
          >CHFID Number</Table.Head
        >
        <Table.Head class="font-semibold text-foreground">Full Name</Table.Head>
        <Table.Head class="font-semibold text-foreground">Gender</Table.Head>
        <Table.Head class="font-semibold text-foreground"
          >Date of Birth - Age</Table.Head
        >
        <Table.Head class="font-semibold text-foreground">Location</Table.Head>
        <Table.Head class="font-semibold text-foreground"
          >Current Address</Table.Head
        >
        <Table.Head class="font-semibold text-foreground">Phone</Table.Head>
        <Table.Head class="text-right font-semibold text-foreground"
          >Email</Table.Head
        >
        <Table.Head class="text-right font-semibold text-foreground"
          >Actions</Table.Head
        >
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {#if $loadingInsureeData}
        <Table.Row>
          <Table.Cell
            colspan={10 as number}
            class="text-center py-6 text-muted-foreground"
          >
            <Button disabled size="sm">
              <Spinner />
              Loading...
            </Button>
          </Table.Cell>
        </Table.Row>
      {:else if $queriedInsurees.length > 0}
        {#each $queriedInsurees as insuree, index (insuree.id)}
          <Table.Row
            class="hover:bg-muted/30 transition-colors border-b border-border last:border-0"
          >
            <Table.Cell class="font-medium text-foreground"
              >{index + 1}</Table.Cell
            >
            <Table.Cell class="font-medium text-foreground"
              >{insuree.chfId}</Table.Cell
            >
            <Table.Cell class="font-medium text-foreground"
              >{insuree.fullName}</Table.Cell
            >
            <Table.Cell class="text-muted-foreground"
              >{insuree.genderName || 'N/A'}</Table.Cell
            >
            <Table.Cell class="text-muted-foreground"
              >{new Date(insuree.dob).toLocaleDateString()} - ({insuree.age} years)</Table.Cell
            >
            <Table.Cell class="text-muted-foreground"
              >{insuree.location.name || 'N/A'}</Table.Cell
            >
            <Table.Cell class="text-muted-foreground"
              >{insuree.currentAddress || 'N/A'}</Table.Cell
            >
            <Table.Cell class="text-muted-foreground"
              >{insuree.phone || 'N/A'}</Table.Cell
            >
            <Table.Cell class="text-right text-muted-foreground"
              >{insuree.email || 'N/A'}</Table.Cell
            >
            <Table.Cell>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger
                  class="w-full h-full flex items-center justify-center"
                >
                  <EllipsisVerticalIcon class="size-4 cursor-pointer" />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Item
                    onclick={() => {
                      push(`/insuree/${insuree.uuid}/detail`);
                    }}
                  >
                    <EyeIcon class="size-4" />
                    View Details
                  </DropdownMenu.Item>
                  <DropdownMenu.Item
                    onclick={() => {
                      push(`/insuree/${insuree.uuid}/edit`);
                    }}
                  >
                    <PencilIcon class="size-4" />
                    Edit Details
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </Table.Cell>
          </Table.Row>
        {/each}
      {:else}
        <Table.Row>
          <Table.Cell
            colspan={10 as number}
            class="text-center py-6 text-muted-foreground w-full"
          >
            No insurees found.
          </Table.Cell>
        </Table.Row>
      {/if}
    </Table.Body>
  </Table.Root>
  <Pagination.Root
    count={ totalInsurees() || 0}
    perPage={10}
  >
    {#snippet children({ pages, currentPage })}
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.PrevButton />
        </Pagination.Item>
        {#each pages as page (page.key)}
          {#if page.type === 'ellipsis'}
            <Pagination.Item>
              <Pagination.Ellipsis />
            </Pagination.Item>
          {:else}
            <Pagination.Item>
              <Pagination.Link {page} isActive={currentPage === page.value}>
                {page.value}
              </Pagination.Link>
            </Pagination.Item>
          {/if}
        {/each}
        <Pagination.Item>
          <Pagination.NextButton />
        </Pagination.Item>
      </Pagination.Content>
    {/snippet}
  </Pagination.Root>
</div>
