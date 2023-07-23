import type { Meta, StoryObj } from '@storybook/vue3'
import Component from './TimePlayed.vue'
import TestData from '../../../../data/CrystalMapperClientTestData.json'

const meta = {
  title: 'Widgets/Pokemon/Time Played',
  component: Component,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<Component>

export default meta;
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { mapper: TestData }
}

export const WithoutBorder: Story = {
  args: { mapper: TestData, border: false }
}

export const NoData: Story = {
  args: {}
}