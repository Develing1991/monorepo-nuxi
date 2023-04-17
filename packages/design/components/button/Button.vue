<!-- _ButtonSetup:
      1. 방안: props타입 문제... <{props:Props}>로 문제를 해결할 수 있지만,,
         이슈: storybook args에도 객체로 전달되서 애드온 기능에 별로 좋지 않음
      2. 방안: <script setup lang="ts"> 또는 <script lang="ts">에 직접 타입을 작성할 수 있음
         이슈: 타입이 분리되지 않아 코드가 너저분해 보임
-->
<!-- _ButtonSetupType:
      1. 방안: https://github.com/wheatjs/vite-plugin-vue-type-imports
         vite.config.ts, plugins:[VueTypeImports()] 플러그인 추가
         이슈: 아직 .. 개발단계 검토 필
-->
<!-- _ButtonDefine(현 적용):
      1. 방안: defineComponent 컴파일러 매크로에서 props와 setup조합 .. 문제 없고 가장 무난
-->

<template>
  <button class="rounded text-white py-2 px-4" :class="[backgroundColor]">
    {{ label }}
  </button>
</template>

<script lang="ts">
import type { Props } from '@/types/Button'

export default defineComponent({
  props: {
    label: {
      type: String as PropType<string>,
      default: 'Button',
    },
    bgColor: {
      type: String as PropType<string>,
      default: 'bg-green-400',
    },
    reverse: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  setup(props: Props) {
    const backgroundColor = computed(() => bgColors(props.bgColor))

    function bgColors(color: string) {
      switch (color) {
        case 'primary':
          return 'bg-blue-400'
        case 'secondary':
          return 'bg-gray-400'
        case 'danger':
          return 'bg-red-400'
        default:
          return 'bg-green-400'
      }
    }
    return {
      backgroundColor,
    }
  },
})
</script>
