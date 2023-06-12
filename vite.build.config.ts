import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsConfigFilePath: resolve(__dirname, './tsconfig.build.json'),
    }),
  ],
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VueSwitchAppearance',
      formats: ['es', 'cjs'],
      fileName: format => {
        return format === 'es' ? 'index.js' : `index.${format}.js`
      },
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
