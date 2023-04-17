import { URL, fileURLToPath } from 'node:url'
// https://github.com/antfu/unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite'
// https://github.com/antfu/unplugin-vue-components
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://github.com/wheatjs/vite-plugin-vue-type-imports
import VueTypeImports from 'vite-plugin-vue-type-imports'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueTypeImports(),
    AutoImport({
      imports: ['vue'], // "vue-router"
      dirs: ['./composables', './hooks'],
      vueTemplate: false, // template X
    }),
    Components({
      dirs: ['./components'],
      dts: true, // enabled by default if `typescript` is installed
      directoryAsNamespace: false, // true: components/ui/test.vue -> UiTest.vue
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
})
