import type { Meta, StoryObj } from '@storybook/vue3'
import Button from '@/components/button/ButtonDefine.vue'

const meta: Meta<typeof Button> = {
  title: 'deprecated/Button',
  component: Button,
  argTypes: {

  },
  args: {
    label: 'Button',
    bgColor: 'bg-green-400',
    reverse: false,
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  // name: 'I am the primary',
  args: {
    label: 'Primary',
    bgColor: 'primary',
  },
}
export const Secondary: Story = {
  args: {
    label: 'Secondary',
    bgColor: 'secondary',
  },
}
export const Danger: Story = {
  args: {
    label: 'Danger',
    bgColor: 'danger',
    reverse: true,
  },
}
