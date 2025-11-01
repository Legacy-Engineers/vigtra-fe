<script>
  import Router, { location, push } from 'svelte-spa-router';
  import routes from './routes';
  import DashboardLayout from './modules/core/components/dashboardLayout.svelte';
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import { getCookie } from './modules/core/utils/cookies';

  // 🧩 App state
  let useLayout = $state(false);
  let currentPath = $state(get(location)); // initialize from store

  // 🔄 Keep currentPath in sync with router location
  const unsubscribe = location.subscribe((path) => {
    currentPath = path;
  });

  // 💡 Reactive effects (auto-run when deps change)
  $effect(() => {
    console.log('Current route:', currentPath);

    useLayout = currentPath !== '/login';
  });

  onMount(() => {
    const cookie = getCookie('auth_token');
    if (!cookie && currentPath !== '/login') {
      console.log('need to be redirected to home page')
      // push('/login');
    }

    return () => unsubscribe(); // cleanup subscription
  });
</script>

{#if useLayout}
  <DashboardLayout>
    <Router {routes} />
  </DashboardLayout>
{:else}
  <Router {routes} />
{/if}
