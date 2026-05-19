import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // This replaces the "homepage": "." trick and forces relative paths for Electron!
  build: {
    outDir: 'dist-react', // We change the output folder name so it doesn't conflict with Electron's /dist folder
  }
});