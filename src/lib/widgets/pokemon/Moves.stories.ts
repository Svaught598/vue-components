import type { Meta, StoryObj } from '@storybook/vue3'
import Component from './Moves.vue'
import TestData from '../../../../data/CrystalMapperClientTestData.json'

const meta = {
  title: 'Widgets/Pokemon/Moves',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<Component>

export default meta;
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { pokemon: TestData.properties.player.team[0] }
}

export const NoData: Story = {
  args: { pokemon: {} }
}