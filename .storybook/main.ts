import type { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-styling'
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: [
    { from: '../src/util/pokemon/images/', to: 'pokemon' },
  ]
};
export default config;
