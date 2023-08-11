import type { Meta, StoryObj } from '@storybook/vue3'
import Component from './EnemyPokemon.vue'
import TestData from '../../../../data/CrystalMapperClientTestData.json'

const meta = {
  title: 'Widgets/Pokemon/Enemy Pokemon',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<Component>

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { pokemon: TestData.properties.battle.trainer.team[0] }
}

export const WithoutBorder: Story = {
  args: { pokemon: TestData.properties.battle.trainer.team[0], border: false }
}

export const NoData: Story = {
  args: { pokemon: TestData.properties.battle.trainer.team[5] }
}