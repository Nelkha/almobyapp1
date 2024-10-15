import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/almobyapp1/', // Cambia esto al nombre de tu repositorio
  build: {
    outDir: 'dist', // Asegúrate de que esto sea correcto
  },
});