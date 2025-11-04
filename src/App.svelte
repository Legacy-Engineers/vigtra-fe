<script lang="ts">
  import Router, { location } from 'svelte-spa-router';
  import routes from './routes';
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import { useLayout, userStore } from './modules/core/stores.svelte';
  import { ModeWatcher } from 'mode-watcher';
  import DashboardLayout from './modules/core/components/dashboardLayout.svelte';

  let currentPath = $state(get(location));

  const unsubscribe = location.subscribe((path) => {
    currentPath = path;
    updateLayoutForRoute(path);
  });

  function updateLayoutForRoute(path: string) {
    // Check if path matches 404 route (either /404 or the wildcard *)
    if (path === '/login' || path === '*' || !path || path === '/404') {
      useLayout.value = false;
    } else {
      useLayout.value = true;
    }
  }

  onMount(() => {
    updateLayoutForRoute(currentPath);
    if (!$userStore && currentPath !== '/login') {
      // push('/login');
    }
    return () => {
      unsubscribe();
    };
  });
</script>

<ModeWatcher />
{#if useLayout.value}
  <DashboardLayout>
    <Router {routes} />
  </DashboardLayout>
{:else}
  <Router {routes} />
{/if}
