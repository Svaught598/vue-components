import type { Meta, StoryObj } from '@storybook/vue3';
import SmallStats from './SmallStats.vue';
import TestData from '../../../../data/CrystalMapperClientTestData.json'

const meta = {
  title: 'atoms/SmallStats',
  component: SmallStats,
  tags: ['autodocs'],
} satisfies Meta<SmallStats>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: { mapper: TestData, pokemon: TestData.properties.battle.trainer.team[0] },
}

