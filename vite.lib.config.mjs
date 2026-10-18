import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// Preserve the classic script API used by Solomon and other embedded players.
export default defineConfig({
  publicDir: false,
  build: {
    outDir: 'dist/scripts',
    emptyOutDir: false,
    minify: true,
    lib: {
      entry: resolve(import.meta.dirname, 'src/firenice.js'),
      name: 'FireNIce',
      formats: ['iife'],
      fileName: () => 'firenice.min.js',
    },
  },
});
