import type { Meta, StoryObj } from '@storybook/vue3'
import Component from './TypeTag.vue'

const meta = {
  title: 'Widgets/Pokemon/Type Tag',
  component: Component,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<Component>

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { type: "Grass" }
}

