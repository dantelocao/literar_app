import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    sourcemap: true, // Gera mapas de fonte
    outDir: 'dist',
  },
});

