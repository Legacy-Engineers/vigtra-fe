// svelte.config.js

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    alias: {
      '@/*': './src/lib/*',
    },
  },
};

export default config;
