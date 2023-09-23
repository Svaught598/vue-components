import type { Meta, StoryObj } from '@storybook/vue3';
import BigStats from './BigStats.vue';
import TestData from '../../../../data/CrystalMapperClientTestData.json'

const meta = {
  title: 'atoms/Stats',
  component: BigStats,
  tags: ['autodocs'],
} satisfies Meta<BigStats>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: { mapper: TestData },
}

