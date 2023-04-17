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
