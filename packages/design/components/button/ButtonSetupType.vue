<!-- https://github.com/wheatjs/vite-plugin-vue-type-imports -->
<!-- vite.config.ts, plugins:[VueTypeImports()] -->
<script setup lang="ts">
// import type { Props ,Emits} from '@/types/Button'
import type { IData, Props } from '@/types/Button'

const { label, bgColor } = withDefaults(defineProps<Props>(), {
  label: 'Button',
  bgColor: 'bg-green-400',
  reverse: false,
})

defineEmits<{
  emit: Emits
}>()

interface Emits {
  (e: 'click', id: number): void
}

const data = ref<IData>('')

const backgroundColor = computed(() => bgColors(bgColor))

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
</script>

<template>
  <button class="rounded text-white py-2 px-4" :class="[backgroundColor]">
    {{ label }}
  </button>
</template>
