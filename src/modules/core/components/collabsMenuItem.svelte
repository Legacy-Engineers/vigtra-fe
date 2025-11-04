<script lang="ts">
  import * as Collapsible from '$lib/components/ui/collapsible/index.js';
  import * as Sidebar from '$lib/components/ui/sidebar/index.js';
  import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
  import Icon from '@iconify/svelte';
  import Separator from '$lib/components/ui/separator/separator.svelte';
  import { link } from 'svelte-spa-router';

  let { menu } = $props()

</script>

<Collapsible.Root title={menu.title} >
  <Sidebar.Group class="">
    <Sidebar.GroupLabel
      class="group/label rounded-lg transition-all duration-200 w-full"
    >
      {#snippet child({ props })}
        <Collapsible.Trigger
          {...props}
          class="flex w-full items-center gap-3 px-2 rounded-lg py-2.5 text-lg font-semibold text-sidebar-foreground transition-all duration-200 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring"
        >
          {#if menu.icon}
            <Icon
              icon={menu.icon.name}
              class={menu.icon.class ?? "h-7 w-7 shrink-0 transition-transform group-hover/label:scale-110"}
              aria-hidden="true"
            />
          {/if}
          <span class="flex-1 text-left text-lg">{menu.title}</span>
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
                    class="flex items-center gap-3 rounded-md mx-3 py-2 text-sm text-sidebar-foreground/80 transition-all duration-200 hover:bg-sidebar-accent/50 hover:pl-4 hover:text-sidebar-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring active:scale-[0.98]"
                    use:link
                  >
                    {#if subItem.icon}
                      <Icon
                        icon={subItem.icon.name}
                        class={subItem.icon.class ?? "h-7 w-7 shrink-0 transition-transform group-hover/label:scale-110"}
                        aria-hidden="true"
                      />
                    {/if}
                    <span class="truncate text-lg">{subItem.title}</span>
                  </a>
                  {#if subItem.separator}
                      <Separator class="ml-2" />
                  {/if}
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>

          {/each}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Collapsible.Content>
  </Sidebar.Group>
</Collapsible.Root>
