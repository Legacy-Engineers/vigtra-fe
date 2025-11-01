<script>
    import { push } from 'svelte-spa-router';

    function goHome() {
        push('/');
    }
</script>

<div class="min-h-screen flex flex-col items-center justify-center from-gray-900 via-gray-800 to-black text-center px-6">
	<h1 class="text-9xl font-extrabold text-transparent bg-clip-text from-pink-500 to-purple-500 drop-shadow-lg">
		404
	</h1>
	<h2 class="text-3xl md:text-4xl font-bold mt-4">Page Not Found</h2>
	<p class="mt-3 text-gray-400 max-w-md">
		The page you're looking for doesn't exist or has been moved.
	</p>
	<button
		on:click={goHome}
		class="mt-8 px-6 py-3 rounded-xl text-black transition-all duration-200 font-semibold shadow-lg cursor-pointer"
	>
		Go Home
	</button>
	<div class="mt-12 text-gray-500 text-sm">
		© {new Date().getFullYear()} Vigtra. All rights reserved.
	</div>
</div>
