import { URL, fileURLToPath } from 'node:url'
// https://github.com/antfu/unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite'
// https://github.com/antfu/unplugin-vue-components
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'], // "vue-router"
      dirs: ['./composables', './hooks'],
      vueTemplate: false, // template X
    }),
    Components({
      dirs: ['./components'],
      dts: true, // enabled by default if `typescript` is installed
      directoryAsNamespace: false, // true: components/ui/test.vue -> UiTest.vue
      // nuxt.config.ts에도 디렉토리 네임스페이스 설정 false
      // components: [
      //   {
      //     path: '~/components',
      //     pathPrefix: false,
      //   },
      // ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
})
