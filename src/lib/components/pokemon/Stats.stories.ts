import type { Meta, StoryObj } from '@storybook/vue3';
import Stats from './Stats.vue';
import TestData from '../../../../data/CrystalMapperClientTestData.json'

const meta = {
  title: 'atoms/Stats',
  component: Stats,
  tags: ['autodocs'],
} satisfies Meta<Stats>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: { mapper: TestData },
}

