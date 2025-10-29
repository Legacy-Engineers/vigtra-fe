<script lang="ts">
 	import Router from 'svelte-spa-router';
	import routes from './routes';
    import { onMount } from 'svelte';

	import moduleManager from './moduleManager';

	onMount( async () => {
		await moduleManager.loadModuleDefinitions();
	})
</script>

<main>
    <Router {routes} />
</main>
