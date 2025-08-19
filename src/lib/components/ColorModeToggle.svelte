<script lang="ts">
	import { themeStore } from '$lib/stores/theme';
	import { m } from '$lib/paraglide/messages.js';

	let { class: className = '' } = $props();

	const currentTheme = $derived($themeStore);

	function toggleColorMode() {
		themeStore.toggleColorMode();
	}
</script>

<button
	onclick={toggleColorMode}
	class="color-mode-toggle {className} p-2 rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
	aria-label={currentTheme.colorMode === 'light' ? m.dark_mode() : m.light_mode()}
	title={currentTheme.colorMode === 'light' ? m.dark_mode() : m.light_mode()}
>
	{#if currentTheme.colorMode === 'light'}
		<!-- Moon icon for dark mode -->
		<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
		</svg>
	{:else}
		<!-- Sun icon for light mode -->
		<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
		</svg>
	{/if}
</button>

<style>
	.color-mode-toggle {
		background-color: rgb(243 244 246);
		color: rgb(31 41 55);
		border: 1px solid rgb(209 213 219);
	}
	
	.dark .color-mode-toggle {
		background-color: rgb(31 41 55);
		color: rgb(229 231 235);
		border-color: rgb(75 85 99);
	}
	
	.color-mode-toggle:hover {
		background-color: rgb(229 231 235);
	}
	
	.dark .color-mode-toggle:hover {
		background-color: rgb(55 65 81);
	}
</style>