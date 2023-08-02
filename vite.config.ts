import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteEslint from 'vite-plugin-eslint';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteEslint({
      failOnError: false, //避免ESLint 的错误打断开发
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // src 路径
    },
  },
  server: {
    port: 5713, // 开发环境启动的端口
    // proxy: {
    //   '/api': {
    //     // 当遇到 /api 路径时，将其转换成 target 的值
    //     target: 'http://xx.xx.xx.xx:8080/api',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '') // 将 /api 重写为空
    //   }
    // }
  },
});
