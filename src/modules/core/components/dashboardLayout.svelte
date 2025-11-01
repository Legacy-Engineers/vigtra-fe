<script>
  import * as Sidebar from '$lib/components/ui/sidebar/index.js';
  import DefaultAppBar from './defaultAppBar.svelte';

  let { children } = $props();

</script>

<Sidebar.Provider>
  <DefaultAppBar />
  <main class="w-full">
    <Sidebar.Trigger />
    {@render children?.()}
  </main>
</Sidebar.Provider>
