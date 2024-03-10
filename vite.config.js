import { defineConfig } from 'vite'
// import { resolve } from 'path'

export default defineConfig({
  plugins: [],
  build:{ 
    target: 'esnext',
    // rollupOptions: {
    //   input: {
    //     main: resolve(__dirname, 'index.html'),
    //     home: resolve(__dirname, 'views/home/index.html'),
    //   }
    // }
  }
})