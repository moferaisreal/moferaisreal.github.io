import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Para repositório usuario.github.io, a base é SEMPRE '/'
  // porque o site é servido na raiz do domínio
  base: '/',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/styles': path.resolve(__dirname, './src/styles'),
      '@/hooks': path.resolve(__dirname, './src/hooks'),
      '@/contexts': path.resolve(__dirname, './src/contexts'),
      '@/data': path.resolve(__dirname, './src/data'),
      '@/utils': path.resolve(__dirname, './src/utils'),
    },
  },

  server: {
    port: 3000,
    open: true,
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'styled-vendor': ['styled-components'],
          'icons-vendor': ['react-icons'],
        },
      },
    },
  },
});
