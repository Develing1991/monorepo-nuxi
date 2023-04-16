<script setup lang="ts">
import { computed } from 'vue'
import type { Props } from './Button'

const { props: { label, bgColor } } = withDefaults(defineProps<{ props: Props }>(), {
  props: () => ({
    label: 'Button',
    bgColor: 'bg-green-400',
  }),
})

const backgroundColor = computed(() => bgColors(bgColor))
</script>

<script lang="ts">
function bgColors(color: string) {
  switch (color) {
    case 'primary':
      return 'bg-blue-400'
    case 'secondary':
      return 'bg-gray-400'
    case 'danger':
      return 'bg-red-400'
    default:
      return ''
  }
}
</script>

<template>
  <button class="rounded text-white py-2 px-4" :class="[backgroundColor]">
    {{ label }}
  </button>
</template>
