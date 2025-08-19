<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import ThemeSelector from '$lib/components/ThemeSelector.svelte';
	import LanguageSelector from '$lib/components/LanguageSelector.svelte';
	import ColorModeToggle from '$lib/components/ColorModeToggle.svelte';
</script>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<div class="text-center mb-12">
		<h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
			{m.demo_page()}
		</h1>
		<p class="text-xl text-gray-600 dark:text-gray-300">
			Explore themes and internationalization features
		</p>
	</div>

	<!-- Theme Controls Section -->
	<div class="grid md:grid-cols-2 gap-8 mb-12">
		<div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
			<h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
				Theme Controls
			</h2>
			<div class="space-y-6">
				<ThemeSelector />
				<div class="flex items-center justify-between">
					<span class="text-sm font-medium text-gray-700 dark:text-gray-300">
						Color Mode
					</span>
					<ColorModeToggle />
				</div>
			</div>
		</div>

		<div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
			<h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
				Language Settings
			</h2>
			<LanguageSelector />
			<div class="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
				<p class="text-sm text-gray-600 dark:text-gray-300">
					{m.hello_world({ name: 'Demo User' })}
				</p>
			</div>
		</div>
	</div>

	<!-- Component Showcase -->
	<div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
		<h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">
			Component Showcase
		</h2>
		
		<!-- Buttons -->
		<div class="mb-8">
			<h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Buttons</h3>
			<div class="flex flex-wrap gap-4">
				<button class="btn-primary px-4 py-2 rounded-lg">Primary</button>
				<button class="btn-secondary px-4 py-2 rounded-lg">Secondary</button>
				<button class="btn-accent px-4 py-2 rounded-lg">Accent</button>
				<button class="btn-outline px-4 py-2 rounded-lg">Outline</button>
			</div>
		</div>

		<!-- Cards -->
		<div class="mb-8">
			<h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Cards</h3>
			<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
				<div class="card p-4 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
					<h4 class="font-semibold text-gray-900 dark:text-white mb-2">Sample Card</h4>
					<p class="text-gray-600 dark:text-gray-300 text-sm">This is a sample card component.</p>
				</div>
				<div class="card p-4 rounded-lg bg-primary/10 border border-primary/20">
					<h4 class="font-semibold text-primary mb-2">Primary Card</h4>
					<p class="text-gray-600 dark:text-gray-300 text-sm">Card with primary theme colors.</p>
				</div>
				<div class="card p-4 rounded-lg bg-accent/10 border border-accent/20">
					<h4 class="font-semibold text-accent mb-2">Accent Card</h4>
					<p class="text-gray-600 dark:text-gray-300 text-sm">Card with accent theme colors.</p>
				</div>
			</div>
		</div>

		<!-- Color Palette -->
		<div>
			<h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Current Color Palette</h3>
			<div class="grid grid-cols-3 gap-4">
				<div class="text-center">
					<div class="w-full h-16 bg-primary rounded-lg mb-2 shadow-md"></div>
					<span class="text-sm text-gray-600 dark:text-gray-300">Primary</span>
				</div>
				<div class="text-center">
					<div class="w-full h-16 bg-secondary rounded-lg mb-2 shadow-md"></div>
					<span class="text-sm text-gray-600 dark:text-gray-300">Secondary</span>
				</div>
				<div class="text-center">
					<div class="w-full h-16 bg-accent rounded-lg mb-2 shadow-md"></div>
					<span class="text-sm text-gray-600 dark:text-gray-300">Accent</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Paraglide Demo Link -->
	<div class="text-center">
		<a 
			href="/demo/paraglide" 
			class="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200"
		>
			<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
			</svg>
			Advanced Paraglide Demo
		</a>
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
		background-color: var(--secondary);
		color: white;
		transition: all 0.2s ease;
	}
	
	.btn-secondary:hover {
		background-color: var(--secondary-dark);
		transform: scale(1.05);
	}
	
	.btn-secondary:focus {
		outline: none;
		box-shadow: 0 0 0 2px var(--secondary), 0 0 0 4px rgba(59, 130, 246, 0.1);
	}
	
	.btn-accent {
		background-color: var(--accent);
		color: white;
		transition: all 0.2s ease;
	}
	
	.btn-accent:hover {
		background-color: var(--accent-dark);
		transform: scale(1.05);
	}
	
	.btn-accent:focus {
		outline: none;
		box-shadow: 0 0 0 2px var(--accent), 0 0 0 4px rgba(59, 130, 246, 0.1);
	}
	
	.btn-outline {
		border: 2px solid var(--primary);
		color: var(--primary);
		background-color: transparent;
		transition: all 0.2s ease;
	}
	
	.btn-outline:hover {
		background-color: var(--primary);
		color: white;
		transform: scale(1.05);
	}
	
	.btn-outline:focus {
		outline: none;
		box-shadow: 0 0 0 2px var(--primary), 0 0 0 4px rgba(59, 130, 246, 0.1);
	}
	
	.card {
		transition: all 0.2s ease;
	}
	
	.card:hover {
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
		transform: translateY(-4px);
	}
	
	.dark .card:hover {
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
	}
</style>
