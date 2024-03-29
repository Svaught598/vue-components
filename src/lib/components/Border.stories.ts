import type { Meta, StoryObj } from '@storybook/vue3'
import Border from './Border.vue'

const meta = {
  title: 'atoms/Border',
  component: Border,
  tags: ['autodocs'],
  argTypes: {
    show: { type: "boolean", default: true },
    title: { type: "string", default: "Border" },
  },
} satisfies Meta<Border>;

type Story = StoryObj<typeof meta>;

export default meta;

// static data
export const Default: Story = {
  args: { show: true, title: "Border" },
}

