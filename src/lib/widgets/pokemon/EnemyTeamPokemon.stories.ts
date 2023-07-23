import type { Meta, StoryObj } from '@storybook/vue3'
import Component from './EnemyTeamPokemon.vue'
import TestData from '../../../../data/YellowMapperClientTestData.json'

const meta = {
  title: 'Widgets/Pokemon/Enemy Team Pokemon',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<Component>

export default meta;
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { mapper: TestData }
}

export const NoData: Story = {
  args: { }
}