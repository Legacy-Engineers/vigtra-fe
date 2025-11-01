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
    proxy: {
      '/api': {
        target: process.env.BACKEND_API_URL || 'http://localhost:8000',
        changeOrigin: true,
        // 🚀 Remove the `/api` prefix entirely before sending to backend
        pathRewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  dev: {
    hmr: false,
    watchFiles: {
      paths: 'src/**/*.svelte',
    },
  },
});
