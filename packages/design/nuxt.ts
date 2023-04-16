import { join } from 'node:path'
import { defineNuxtModule } from '@nuxt/kit'
// https://nuxtjs.org/docs/configuration-glossary/configuration-components#library-authors

export default defineNuxtModule({
  hooks: {
    'components:dirs': (dirs) => {
      dirs.push({
        path: join(__dirname, 'components'),
        pathPrefix: false, // vite.config.ts의 directoryAsNamespace: false과 상관없이.. 설정이 추가되야 실 nuxt에서 module로 받을 시 pathPrefix 무시 됨..
      })
    },
  },
})
