import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

import path from 'path';

export default defineConfig({
  plugins: [
    svgr({
      include: '**/*.svg',
    }),
    react(),
  ],
  resolve: {
    alias: {
      app: path.resolve(__dirname, './src/app'),
      shared: path.resolve(__dirname, './src/shared'),
      entities: path.resolve(__dirname, './src/entities'),
      features: path.resolve(__dirname, './src/features'),
      widgets: path.resolve(__dirname, './src/widgets'),
      pages: path.resolve(__dirname, './src/pages'),
    },
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
    __API__URL__: JSON.stringify('http://localhost:8000'),
    __PROJECT__: JSON.stringify('frontend'),
  },
});
