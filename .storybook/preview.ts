import type { Preview } from "@storybook/vue3";

import 'bootstrap/dist/css/bootstrap.css';
import '../src/themes/base.css';

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

export default preview;
