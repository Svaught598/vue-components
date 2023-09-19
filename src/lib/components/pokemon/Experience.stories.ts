import type { Meta, StoryObj } from '@storybook/vue3';
import Experience from './Experience.vue';
import TestData from '../../../../data/CrystalMapperClientTestData.json'

const meta = {
  title: 'atoms/Experience',
  component: Experience,
  tags: ['autodocs'],
} satisfies Meta<Experience>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: { pokemon: TestData.properties.battle.trainer.team[0] },
}

