import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",

    // NOTE: @storybook/addon-postcss はメンテされていないらしい
    // See: https://github.com/storybookjs/storybook/issues/20529

    // postcss 用の設定
    // See: https://github.com/storybookjs/addon-styling/blob/HEAD/docs/api.md#optionspostcss
    {
      name: "@storybook/addon-styling",
      options: {
        postCss: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
