<script>
  import Router from 'svelte-spa-router';
  import routes from './routes';
  import DashboardLayout from './modules/core/components/dashboardLayout.svelte';
</script>

<DashboardLayout>
  <Router {routes} />
</DashboardLayout>
