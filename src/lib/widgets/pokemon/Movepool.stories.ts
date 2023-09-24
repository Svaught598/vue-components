import type { Meta, StoryObj } from '@storybook/vue3'
import Component from './Movepool.vue'
import TestData from '../../../../data/CrystalMapperClientTestData.json'

const meta = {
  title: 'Widgets/Pokemon/Movepool',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<Component>

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { pokemon: TestData.properties.player.team[0] }
}

