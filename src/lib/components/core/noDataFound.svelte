<script lang="ts">
	let { message = 'No data found' }: { message?: string } = $props();
</script>

<div>
	<h2>{message}</h2>
</div>
