import type { Meta, StoryObj } from '@storybook/vue3'
import Border from './Border.vue'

const meta = {
  title: 'Components/Border',
  component: Border,
  tags: ['autodocs'],
  argTypes: {
    title: { type: 'string' }
  },
} satisfies Meta<Border>

export default meta;
type Story = StoryObj<typeof meta>

export const Visible: Story = {
  args: { show: true, title: null }
}

export const Hidden: Story = {
  args: { show: false, title: null }
}

export const WithTitle: Story = {
  args: { show: true, title: 'Game Time at 2x Speed' }
}