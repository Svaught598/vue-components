import type { Decorator, Preview } from "@storybook/vue3";
import { withThemeByDataAttribute } from '@storybook/addon-styling';

import '../src/style.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: 'centered',
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};


export const decorators = [
  withThemeByDataAttribute({
    themes: {
      default: 'default',
      pokemon: 'pokemon',
      scott: 'scott'
    },
    defaultTheme: 'default',
    attributeName: 'data-mode',
  }),
];

export default preview;
