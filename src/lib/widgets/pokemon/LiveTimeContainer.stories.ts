import type { Meta, StoryObj } from '@storybook/vue3'
import LiveTimeContainer from './LiveTimeContainer.vue'

const meta = {
  title: 'Widgets/Pokemon/LiveTime',
  component: LiveTimeContainer,
  tags: ['autodocs'],
  argTypes: {
    show: { type: "boolean", default: true },
    title: { type: "string", default: "LiveTimeContainer" },
  },
} satisfies Meta<LiveTimeContainer>

type Story = StoryObj<typeof meta>;

export default meta;

// static data
export const Default: Story = {
  args: { show: true, title: "Border" },
}

