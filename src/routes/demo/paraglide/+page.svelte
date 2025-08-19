<script lang="ts">
	import { setLocale, getLocale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages.js';
	import LanguageSelector from '$lib/components/LanguageSelector.svelte';

	const currentLocale = $derived(getLocale());

	const languages = [
		{ code: 'en', name: 'English', flag: '🇺🇸', description: 'English language support' },
		{ code: 'es', name: 'Español', flag: '🇪🇸', description: 'Soporte completo en español' },
		{ code: 'fr', name: 'Français', flag: '🇫🇷', description: 'Support complet en français' }
	];
</script>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<!-- Header -->
	<div class="text-center mb-12">
		<h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
			Paraglide Internationalization Demo
		</h1>
		<p class="text-xl text-gray-600 dark:text-gray-300">
			{m.hello_world({ name: 'SvelteKit User' })}
		</p>
	</div>

	<!-- Language Selector Section -->
	<div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
			{m.language_selector()}
		</h2>
		
		<div class="max-w-md mx-auto mb-8">
			<LanguageSelector />
		</div>

		<!-- Quick Language Buttons -->
		<div class="flex justify-center space-x-4 mb-6">
			{#each languages as lang}
				<button
					onclick={() => setLocale(lang.code as any)}
					class="language-btn px-4 py-2 rounded-lg border-2 transition-all duration-200"
					class:active={currentLocale === lang.code}
				>
					<span class="text-2xl mr-2">{lang.flag}</span>
					<span class="font-medium">{lang.name}</span>
				</button>
			{/each}
		</div>

		<!-- Current Language Info -->
		<div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center">
			<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
				Current Language: {languages.find(l => l.code === currentLocale)?.name}
			</h3>
			<p class="text-gray-600 dark:text-gray-300">
				{languages.find(l => l.code === currentLocale)?.description}
			</p>
		</div>
	</div>

	<!-- Feature Showcase -->
	<div class="grid md:grid-cols-2 gap-8 mb-8">
		<div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
			<h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
				{m.features_title()}
			</h3>
			<ul class="space-y-3">
				<li class="flex items-start">
					<svg class="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
					</svg>
					<span class="text-gray-700 dark:text-gray-300">{m.feature_themes()}</span>
				</li>
				<li class="flex items-start">
					<svg class="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
					</svg>
					<span class="text-gray-700 dark:text-gray-300">{m.feature_i18n()}</span>
				</li>
				<li class="flex items-start">
					<svg class="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
					</svg>
					<span class="text-gray-700 dark:text-gray-300">{m.feature_responsive()}</span>
				</li>
				<li class="flex items-start">
					<svg class="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
					</svg>
					<span class="text-gray-700 dark:text-gray-300">{m.feature_modern()}</span>
				</li>
			</ul>
		</div>

		<div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
			<h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
				Developer Tools
			</h3>
			<p class="text-gray-600 dark:text-gray-300 mb-4">
				If you use VSCode, install the <a href="https://marketplace.visualstudio.com/items?itemName=inlang.vs-code-extension" target="_blank" class="text-primary hover:text-primary-dark underline">Sherlock i18n extension</a> for a better i18n experience.
			</p>
			<div class="space-y-2">
				<div class="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
					<span class="text-sm font-mono text-gray-800 dark:text-gray-200">Current Locale: {currentLocale}</span>
				</div>
				<div class="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
					<span class="text-sm font-mono text-gray-800 dark:text-gray-200">Available: en, es, fr</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Back to Demo -->
	<div class="text-center">
		<a 
			href="/demo" 
			class="inline-flex items-center px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition-colors duration-200"
		>
			<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12"></path>
			</svg>
			Back to Demo
		</a>
	</div>
</div>

<style>
	.language-btn {
		background-color: white;
		border-color: rgb(209 213 219);
		color: rgb(55 65 81);
		transition: all 0.2s ease;
	}
	
	.dark .language-btn {
		background-color: rgb(55 65 81);
		border-color: rgb(75 85 99);
		color: rgb(209 213 219);
	}
	
	.language-btn:hover {
		border-color: var(--primary);
		color: var(--primary);
		transform: translateY(-1px);
	}
	
	.language-btn.active {
		border-color: var(--primary);
		background-color: rgba(59, 130, 246, 0.1);
		color: var(--primary);
	}
</style>
