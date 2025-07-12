<script lang="ts">
	import TopNavBar from '$lib/components/layout/topNavBar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div>
	<div>
		<TopNavBar />
	</div>
	<main>
		{@render children()}
	</main>
</div>
