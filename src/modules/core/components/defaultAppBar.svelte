<script lang="ts">
  import * as Sidebar from '$lib/components/ui/sidebar/index.js';
  import { link } from 'svelte-spa-router';
  import { getModuleMenus, type ModuleDefinitionMenu } from '../..';
  import DashboardUserBar from './dashboardUserBar.svelte';
  import CollabsMenuItem from './collabsMenuItem.svelte';
  import NonCollabsMenuItem from './nonCollabsMenuItem.svelte';

  const navMain: ModuleDefinitionMenu[] = getModuleMenus();

  let userData = {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  };
</script>

<Sidebar.Root
  class="flex h-screen w-64 flex-col border-r border-sidebar-border bg-sidebar p-2"
>
  <Sidebar.Header
    class="flex items-center justify-center border-b border-sidebar-border py-4"
  >
    <a href="/" use:link class="block">
      <img
        src="/images/logo.png"
        alt="Vigtra Logo"
        class="h-auto w-32 opacity-90 transition hover:opacity-100"
      />
    </a>
  </Sidebar.Header>

  <Sidebar.Content
    class="flex flex-1 flex-col gap-1 overflow-y-auto px-2 py-4 w-full"
  >
    {#each navMain as menu (menu.title)}
      {#if menu.useCollabsible}
        <CollabsMenuItem {menu} />
      {:else}
        <NonCollabsMenuItem menuItems={menu.items} />
      {/if}
    {/each}
  </Sidebar.Content>

  <Sidebar.Footer class="border-t border-sidebar-border py-3 px-2">
    <DashboardUserBar user={userData} />
  </Sidebar.Footer>
</Sidebar.Root>
