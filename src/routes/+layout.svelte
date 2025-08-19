<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { themeStore } from '$lib/stores/theme';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { m } from '$lib/paraglide/messages.js';
	import ColorModeToggle from '$lib/components/ColorModeToggle.svelte';
	import LanguageSelector from '$lib/components/LanguageSelector.svelte';
	
	let { children } = $props();

	// Initialize theme on mount
	onMount(() => {
		themeStore.init();
	});

	const currentTheme = $derived($themeStore);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{m.welcome_title()}</title>
	<meta name="description" content={m.welcome_subtitle()} />
</svelte:head>

<div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
	<!-- Navigation Header -->
	<header class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
		<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<div class="flex items-center space-x-8">
					<a href="/" class="text-xl font-bold text-primary hover:text-primary-dark transition-colors">
						SvelteKit App
					</a>
					<div class="hidden md:flex space-x-4">
						<a 
							href="/" 
							class="nav-link"
							class:active={$page.url.pathname === '/'}
						>
							{m.home_page()}
						</a>
						<a 
							href="/demo" 
							class="nav-link"
							class:active={$page.url.pathname.startsWith('/demo')}
						>
							{m.demo_page()}
						</a>
					</div>
				</div>
				
				<div class="flex items-center space-x-4">
					<LanguageSelector class="hidden sm:block w-32" />
					<ColorModeToggle />
				</div>
			</div>
		</nav>
	</header>

	<!-- Main Content -->
	<main class="flex-1">
		{@render children?.()}
	</main>

	<!-- Footer -->
	<footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<div class="text-center text-gray-600 dark:text-gray-400">
				<p>{m.about_desc()}</p>
				<div class="mt-4 flex justify-center space-x-6">
					<a href="https://svelte.dev/docs/kit" target="_blank" class="text-primary hover:text-primary-dark transition-colors">
						{m.documentation()}
					</a>
					<a href="https://github.com" target="_blank" class="text-primary hover:text-primary-dark transition-colors">
						{m.github_repo()}
					</a>
				</div>
			</div>
		</div>
	</footer>
</div>

<style>
	.nav-link {
		padding: 0.5rem 0.75rem;
		border-radius: 0.375rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: rgb(55 65 81);
		transition: all 0.2s ease;
	}
	
	.dark .nav-link {
		color: rgb(209 213 219);
	}
	
	.nav-link:hover {
		color: rgb(17 24 39);
		background-color: rgb(243 244 246);
	}
	
	.dark .nav-link:hover {
		color: white;
		background-color: rgb(55 65 81);
	}
	
	.nav-link.active {
		color: var(--primary);
		background-color: rgba(59, 130, 246, 0.05);
	}
	
	.dark .nav-link.active {
		background-color: rgba(59, 130, 246, 0.1);
	}
</style>
