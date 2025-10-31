import { defineConfig } from '@rsbuild/core';
import { pluginSvelte } from '@rsbuild/plugin-svelte';

export default defineConfig({
  plugins: [pluginSvelte()],
  source: {
    entry: {
      index: './src/index.ts',
    },
  },
  server: {
    port: 3000,
  },
  dev: {
    hmr: false,
  },
});
