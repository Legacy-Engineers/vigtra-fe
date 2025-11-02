<script>
  import * as Sidebar from '$lib/components/ui/sidebar/index.js';
  import DefaultAppBar from './defaultAppBar.svelte';
  import { toggleMode } from "mode-watcher";
  import SunIcon from "@lucide/svelte/icons/sun";
  import MoonIcon from "@lucide/svelte/icons/moon";
    import Button from '$lib/components/ui/button/button.svelte';
  let { children } = $props();
</script>

<Sidebar.Provider>
  <DefaultAppBar />
  <main class="w-full">
    <div class="flex justify-between px-4 py-2 items-center-safe">
        <Sidebar.Trigger />
        <Button onclick={toggleMode} variant="outline" size="icon">
          <SunIcon
            class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 !transition-all dark:-rotate-90 dark:scale-0"
          />
          <MoonIcon
            class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 !transition-all dark:rotate-0 dark:scale-100"
          />
          <span class="sr-only">Toggle theme</span>
        </Button>

    </div>
    <div class="px-5">
        {@render children?.()}
    </div>
  </main>
</Sidebar.Provider>
