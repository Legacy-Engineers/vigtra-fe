import { defineConfig } from '@rsbuild/core';
import { pluginSvelte } from '@rsbuild/plugin-svelte';

export default defineConfig({
  plugins: [pluginSvelte()],
  module: { rules: [{ test: /\.css$/, use: ['postcss-loader'], type: 'css' }] },
});
