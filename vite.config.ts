import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: 'huaan',
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0', // 允许外部访问
    port: 3000, // 设置端口号为 3000
    strictPort: true, // 若端口已被占用，则会报错
  },
})
