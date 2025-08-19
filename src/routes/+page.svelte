<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import ThemeSelector from '$lib/components/ThemeSelector.svelte';
	import { themeStore } from '$lib/stores/theme';

	const currentTheme = $derived($themeStore);
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<!-- Hero Section -->
	<div class="text-center mb-16">
		<h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
			{m.welcome_title()}
		</h1>
		<p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
			{m.welcome_subtitle()}
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a 
				href="/demo" 
				class="btn-primary px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
			>
				{m.get_started()}
			</a>
			<a 
				href="/demo/paraglide" 
				class="btn-secondary px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
			>
				{m.demo_page()}
			</a>
		</div>
	</div>

	<!-- Features Section -->
	<div class="mb-16">
		<h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
			{m.features_title()}
		</h2>
		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
			<div class="feature-card p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
				<div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
					<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
					</svg>
				</div>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
					{m.feature_themes()}
				</h3>
				<p class="text-gray-600 dark:text-gray-300">
					{m.feature_themes_desc()}
				</p>
			</div>

			<div class="feature-card p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
				<div class="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
					<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
					</svg>
				</div>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
					{m.feature_i18n()}
				</h3>
				<p class="text-gray-600 dark:text-gray-300">
					{m.feature_i18n_desc()}
				</p>
			</div>

			<div class="feature-card p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
				<div class="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
					<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
					</svg>
				</div>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
					{m.feature_responsive()}
				</h3>
				<p class="text-gray-600 dark:text-gray-300">
					{m.feature_responsive_desc()}
				</p>
			</div>

			<div class="feature-card p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
				<div class="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-4">
					<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
					</svg>
				</div>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
					{m.feature_modern()}
				</h3>
				<p class="text-gray-600 dark:text-gray-300">
					{m.feature_modern_desc()}
				</p>
			</div>
		</div>
	</div>

	<!-- Theme Showcase Section -->
	<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-16">
		<h2 class="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
			{m.theme_selector()}
		</h2>
		<ThemeSelector class="max-w-2xl mx-auto" />
		
		<!-- Current Theme Preview -->
		<div class="mt-8 p-6 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
			<div class="text-center">
				<h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
					Current Theme Preview
				</h3>
				<div class="flex justify-center space-x-4 mb-4">
					<div class="w-16 h-16 rounded-full bg-primary shadow-lg"></div>
					<div class="w-16 h-16 rounded-full bg-secondary shadow-lg"></div>
					<div class="w-16 h-16 rounded-full bg-accent shadow-lg"></div>
				</div>
				<div class="space-y-2">
					<button class="btn-primary px-4 py-2 rounded-lg font-medium">Primary Button</button>
					<button class="btn-secondary px-4 py-2 rounded-lg font-medium ml-2">Secondary Button</button>
				</div>
			</div>
		</div>
	</div>

	<!-- About Section -->
	<div class="text-center">
		<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
			{m.about_section()}
		</h2>
		<p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
			{m.about_desc()}
		</p>
	</div>
</div>

<style>
	.btn-primary {
		background-color: var(--primary);
		color: white;
		transition: all 0.2s ease;
	}
	
	.btn-primary:hover {
		background-color: var(--primary-dark);
		transform: scale(1.05);
	}
	
	.btn-primary:focus {
		outline: none;
		box-shadow: 0 0 0 2px var(--primary), 0 0 0 4px rgba(59, 130, 246, 0.1);
	}
	
	.btn-secondary {
		border: 2px solid var(--primary);
		color: var(--primary);
		background-color: transparent;
		transition: all 0.2s ease;
	}
	
	.btn-secondary:hover {
		background-color: var(--primary);
		color: white;
		transform: scale(1.05);
	}
	
	.btn-secondary:focus {
		outline: none;
		box-shadow: 0 0 0 2px var(--primary), 0 0 0 4px rgba(59, 130, 246, 0.1);
	}
	
	.feature-card {
		border: 1px solid rgb(229 231 235);
		transition: all 0.3s ease;
	}
	
	.dark .feature-card {
		border-color: rgb(55 65 81);
	}
	
	.feature-card:hover {
		transform: translateY(-2px);
		border-color: var(--primary);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
	}
	
	.dark .feature-card:hover {
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
	}
</style>
