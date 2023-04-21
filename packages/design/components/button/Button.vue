<template>
  <button
    class="rounded font-bold transition-all duration-300 border-2 "
    :class="`${buttonConfig[size]}
             ${(buttonConfig[color] as Options).bgColor}
             ${(buttonConfig[color] as Options).textColor}
             ${(buttonConfig[color] as Options).outline}`"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
import type { ButtonConfig, ConfigOptions, Props } from '@/types/Button'

interface Options extends ConfigOptions {}

export default defineComponent({
  props: {
    label: {
      type: String as PropType<string>,
      default: 'Button',
    },
    color: {
      type: String as PropType<string>,
      default: 'primary',
    },
    size: {
      type: String as PropType<string>,
      default: 'small',
    },
    toggle: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  setup(props: Props) {
    const buttonConfig = computed<ButtonConfig>(() => {
      return {
      // Colors
        primary: {
          bgColor: `${props.toggle ? 'bg-blue-400' : 'bg-white'} hover:opacity-80`,
          textColor: `${props.toggle ? 'text-white' : 'text-blue-400'}`,
          outline: 'border-blue-400',
        },
        secondary: {
          bgColor: `${props.toggle ? 'bg-gray-400' : 'bg-white'} hover:opacity-80`,
          textColor: `${props.toggle ? 'text-white' : 'text-gray-400'}`,
          outline: 'border-gray-400',
        },
        danger: {
          bgColor: `${props.toggle ? 'bg-red-400' : 'bg-white'} hover:opacity-80`,
          textColor: `${props.toggle ? 'text-white' : 'text-red-400'}`,
          outline: 'border-red-400',
        },

        // Sizes
        small: 'px-3 py-2 text-sm',
        medium: 'px-5 py-2 text-lg',
        large: 'px-7 py-2 text-2xl',
      }
    })
    return {
      buttonConfig,
    }
  },
})
</script>
