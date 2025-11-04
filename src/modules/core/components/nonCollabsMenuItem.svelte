<script lang="ts">
  import * as Sidebar from '$lib/components/ui/sidebar/index.js';
  import Icon from '@iconify/svelte';
  import { link } from 'svelte-spa-router';

 let { menuItems = [] } = $props();
</script>
{#each menuItems ?? [] as item (item.title)}
  <Sidebar.MenuItem>
    <a
      href={item.url}
      use:link
      class="flex text-lg w-full items-center gap-3 rounded-md px-3 py-2 font-medium transition hover:bg-sidebar-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring"
    >
      {#if item.icon}
        <Icon icon={item.icon.name} class="h-7 w-7 shrink-0 transition-transform group-hover/label:scale-110" />
      {/if}
      {item.title}
    </a>
  </Sidebar.MenuItem>
{/each}
