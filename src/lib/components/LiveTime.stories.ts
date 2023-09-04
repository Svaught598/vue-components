import type { Meta, StoryObj } from '@storybook/vue3';
import LiveTime from './LiveTime.vue';

const meta = {
  title: 'atoms/LiveTime',
  component: LiveTime,
  tags: ['autodocs'],
} satisfies Meta<LiveTime>;

type Story = StoryObj<typeof meta>;

export default meta;

// static data
export const Default: Story = {
  args: { show: true, title: "Border" },
}

