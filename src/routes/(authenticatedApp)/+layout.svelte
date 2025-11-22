<script lang="ts">
	import SideBar from '$lib/components/layout/sideBar.svelte';
	import TopBanner from '$lib/components/layout/topBanner.svelte';

	let { children } = $props();
</script>

<div class="relative">
	<div class="sticky left-0 top-0">
		<SideBar />
	</div>
	<div>
		<div>
			<TopBanner />
		</div>
		<div class=" overflow-auto py-2 px-4 md:ml-64">
			{@render children()}
		</div>
	</div>
</div>
