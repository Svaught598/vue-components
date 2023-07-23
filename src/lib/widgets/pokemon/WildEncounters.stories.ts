import type { Meta, StoryObj } from '@storybook/vue3'
import Component from './WildEncounters.vue'
import TestData from '../../../../data/YellowMapperClientTestData.json'

const meta = {
  title: 'Widgets/Pokemon/Wild Encounters',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component: '⚠️ This component is not yet available for Generation 2 games.',
      },
    },
  }
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
  args: { }
}