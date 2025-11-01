<script lang="ts">
  import * as Collapsible from '$lib/components/ui/collapsible/index.js';
  import * as Sidebar from '$lib/components/ui/sidebar/index.js';
  import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
  import Icon from '@iconify/svelte';
  import { link } from 'svelte-spa-router';
    import { getModuleMenus } from '../..';
    import type { ComponentProps } from 'svelte';

  interface MenuItem {
    title: string;
    url: string;
    icon?: string;
  }

  interface NavMenu {
    title: string;
    icon?: string;
    items?: MenuItem[];
  }

  const navMain: NavMenu[] = getModuleMenus();

  let {
    ref = $bindable(null),
    ...restProps
  }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root bind:ref {...restProps}>
  <Sidebar.Header
    class="flex items-center justify-center border-b border-sidebar-border p-6"
  >
    <a href="/" use:link>
      <img
        src="/images/logo.png"
        alt="Vigtra Logo"
        class="h-auto w-full transition-opacity hover:opacity-90"
      /></a
    >
  </Sidebar.Header>

  <Sidebar.Content class="gap-1 px-2 py-4">
    {#each navMain as menu (menu.title)}
      <Collapsible.Root title={menu.title} class="group/collapsible">
        <Sidebar.Group class="mb-1">
          <Sidebar.GroupLabel
            class="group/label rounded-lg transition-all duration-200"
          >
            {#snippet child({ props })}
              <Collapsible.Trigger
                {...props}
                class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-sidebar-foreground transition-all duration-200 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring"
              >
                {#if menu.icon}
                  <Icon
                    icon={menu.icon}
                    class="h-5 w-5 shrink-0 transition-transform group-hover/label:scale-110"
                    aria-hidden="true"
                  />
                {/if}
                <span class="flex-1 text-left">{menu.title}</span>
                <ChevronRightIcon
                  class="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                  aria-hidden="true"
                />
              </Collapsible.Trigger>
            {/snippet}
          </Sidebar.GroupLabel>

          <Collapsible.Content
            class="overflow-hidden transition-all data-[state=closed]:animate-collapse-up data-[state=open]:animate-collapse-down"
          >
            <Sidebar.GroupContent>
              <Sidebar.Menu class="space-y-0.5 pl-2 pt-1">
                {#each menu.items ?? [] as subItem (subItem.title)}
                  <Sidebar.MenuItem>
                    <Sidebar.MenuButton class="group/item w-full">
                      {#snippet child({ props })}
                        <a
                          href={subItem.url}
                          {...props}
                          class="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-sidebar-foreground/80 transition-all duration-200 hover:bg-sidebar-accent/50 hover:pl-4 hover:text-sidebar-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring active:scale-[0.98]"
                          use:link
                        >
                          {#if subItem.icon}
                            <Icon
                              icon={subItem.icon}
                              class="h-4 w-4 shrink-0 transition-transform group-hover/item:scale-110"
                              aria-hidden="true"
                            />
                          {/if}
                          <span class="truncate">{subItem.title}</span>
                        </a>
                      {/snippet}
                    </Sidebar.MenuButton>
                  </Sidebar.MenuItem>
                {/each}
              </Sidebar.Menu>
            </Sidebar.GroupContent>
          </Collapsible.Content>
        </Sidebar.Group>
      </Collapsible.Root>
    {/each}
  </Sidebar.Content>

  <Sidebar.Rail />
</Sidebar.Root>
