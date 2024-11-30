import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: './', // Define caminhos relativos
    build: {
        outDir: 'dist', // Diretório de saída para o build
    },
});
