import { defineConfig } from 'vite'
// import { resolve } from 'path'

export default defineConfig({
  plugins: [],
  build:{
    rollupOptions: {
      input: {
        main: './src-flow/index.html',
      }
    },
    target: 'esnext',
    // rollupOptions: {
    //   input: {
    //     main: resolve(__dirname, 'index.html'),
    //     home: resolve(__dirname, 'views/home/index.html'),
    //   }
    // }
  }
})