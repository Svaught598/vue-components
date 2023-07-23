import type { Meta, StoryObj } from '@storybook/vue3'
import Component from './Movepool.vue'

const meta = {
  title: 'Widgets/Pokemon/Movepool',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<Component>

export default meta;
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { pokedexNumber: 1 }
}

export const NoData: Story = {
  args: { pokedexNumber: null }
}