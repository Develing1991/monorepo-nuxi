import type { Meta, StoryObj } from '@storybook/vue3'
import Button from '@/components/button/Button.vue'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  // name: 'I am the primary',
  args: {
    props: {
      label: 'Primary',
      bgColor: 'primary',
    },
  },
}
export const Secondary: Story = {
  args: {
    props: {
      label: 'Secondary',
      bgColor: 'secondary',
    },
  },
}
export const Danger: Story = {
  args: {
    props: {
      label: 'Danger',
      bgColor: 'danger',
    },
  },
}
