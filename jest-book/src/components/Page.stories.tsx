import type { Meta, StoryObj } from "@storybook/react";

import { Presentation } from "./Page";

const meta: Meta<typeof Presentation> = {
  title: "メインページ",
  component: Presentation,
};

export default meta;

type Story = StoryObj<typeof Presentation>;

export const WithoutTax: Story = {
  args: {},
};

export const WithTax: Story = {
  args: {
    tax: 10000,
  },
};
