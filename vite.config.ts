import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default ({ mode }: { mode: string }) => {
  return defineConfig({
    plugins: [react(),svgr()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    publicDir: 'assets',
    define: { 'process.env': { ...loadEnv(mode, process.cwd()) } },
    server: {
      proxy: {
        '^/assets': {
          target: 'http://localhost:3000/'
        }
      }
    }
  });
};