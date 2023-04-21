import type { Meta, StoryObj } from '@storybook/vue3'
import Button from '@/components/button/Button.vue'

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  argTypes: {
    // color: { control: 'color' },
    color: { control: 'select', options: ['primary', 'secondary', 'danger'] },
    // size: { control: 'radio', options: ['primary', 'secondary', 'danger'] },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },

  },
  args: {
    label: 'Button',
    color: 'primary',
    size: 'small',
    toggle: false,
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const BasicButton: Story = {
  // name: 'I am the primary',
  args: {
    label: 'Button',
    color: 'primary',

  },
}
// export const Secondary: Story = {
//   args: {
//     label: 'Secondary',
//     color: 'secondary',
//   },
// }
// export const Danger: Story = {
//   args: {
//     label: 'Danger',
//     color: 'danger',
//     reverse: true,
//   },
// }
