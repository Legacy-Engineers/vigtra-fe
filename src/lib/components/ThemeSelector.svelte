<script lang="ts">
	import { themeStore, themes, type Theme } from '$lib/stores/theme';
	import { m } from '$lib/paraglide/messages.js';

	let { class: className = '' } = $props();

	const currentTheme = $derived($themeStore);

	function selectTheme(theme: Theme) {
		themeStore.setTheme(theme);
	}
</script>

<div class="theme-selector {className}">
	<label for="theme-selector-grid" class="block text-sm font-medium mb-2">
		{m.theme_selector()}
	</label>
	<div id="theme-selector-grid" class="grid grid-cols-2 md:grid-cols-3 gap-2" role="radiogroup" aria-labelledby="theme-selector-grid">
		{#each Object.entries(themes) as [themeKey, themeConfig]}
			<button
				onclick={() => selectTheme(themeKey as Theme)}
				class="theme-option p-3 rounded-lg border-2 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
				class:active={currentTheme.theme === themeKey}
				style="--primary: {themeConfig.colors.primary}; --secondary: {themeConfig.colors.secondary}; --accent: {themeConfig.colors.accent};"
			>
				<div class="flex items-center space-x-2">
					<div class="w-4 h-4 rounded-full" style="background-color: var(--primary);"></div>
					<div class="w-4 h-4 rounded-full" style="background-color: var(--secondary);"></div>
					<div class="w-4 h-4 rounded-full" style="background-color: var(--accent);"></div>
				</div>
				<div class="text-xs mt-1 font-medium">
					{#if themeKey === 'default'}{m.theme_default()}
					{:else if themeKey === 'ocean'}{m.theme_ocean()}
					{:else if themeKey === 'forest'}{m.theme_forest()}
					{:else if themeKey === 'sunset'}{m.theme_sunset()}
					{:else if themeKey === 'purple'}{m.theme_purple()}
					{:else if themeKey === 'rose'}{m.theme_rose()}
					{:else}{themeConfig.name}{/if}
				</div>
			</button>
		{/each}
	</div>
</div>

<style>
	.theme-option {
		background-color: white;
		border-color: rgb(229 231 235);
	}
	
	.dark .theme-option {
		background-color: rgb(31 41 55);
		border-color: rgb(55 65 81);
	}
	
	.theme-option:hover {
		border-color: rgb(156 163 175);
	}
	
	.dark .theme-option:hover {
		border-color: rgb(75 85 99);
	}
	
	.theme-option.active {
		border-color: var(--primary);
		background-color: rgba(59, 130, 246, 0.05);
	}
	
	.dark .theme-option.active {
		background-color: rgba(59, 130, 246, 0.1);
	}
	
	.theme-option:focus {
		outline: none;
		box-shadow: 0 0 0 2px var(--primary);
	}
</style>