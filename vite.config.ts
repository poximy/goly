import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// @ts-ignore
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@lib': path.resolve(__dirname, './src/lib'),
    },
  },
  plugins: [svelte()],
});
