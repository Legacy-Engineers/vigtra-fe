<script lang="ts">
	import { setLocale, getLocale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages.js';

	let { class: className = '' } = $props();

	const languages = [
		{ code: 'en', name: 'English', flag: '🇺🇸' },
		{ code: 'es', name: 'Español', flag: '🇪🇸' },
		{ code: 'fr', name: 'Français', flag: '🇫🇷' }
	];

	const currentLocale = $derived(getLocale());

	function changeLanguage(langCode: string) {
		setLocale(langCode as any);
	}
</script>

<div class="language-selector {className}">
	<label for="language-select" class="block text-sm font-medium mb-2">
		{m.language_selector()}
	</label>
	<div class="relative">
		<select
			id="language-select"
			value={currentLocale}
			onchange={(e) => changeLanguage(e.currentTarget.value)}
			class="language-select w-full p-2 pr-8 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
		>
			{#each languages as lang}
				<option value={lang.code}>
					{lang.flag} {lang.name}
				</option>
			{/each}
		</select>
		<div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
			<svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
			</svg>
		</div>
	</div>
</div>

<style>
	.language-select {
		background-color: white;
		border-color: rgb(209 213 219);
		color: rgb(17 24 39);
		appearance: none;
	}
	
	.dark .language-select {
		background-color: rgb(31 41 55);
		border-color: rgb(75 85 99);
		color: rgb(243 244 246);
	}
	
	.language-select:hover {
		border-color: rgb(156 163 175);
	}
	
	.dark .language-select:hover {
		border-color: rgb(107 114 128);
	}
	
	.language-select:focus {
		border-color: var(--primary);
		outline: none;
		box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
	}
</style>