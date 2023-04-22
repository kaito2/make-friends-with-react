import type { Meta, StoryObj } from "@storybook/react";

import { Presentation } from "./Page";

const meta: Meta<typeof Presentation> = {
  title: "Presentation",
  component: Presentation,
};

export default meta;

type Story = StoryObj<typeof Presentation>;

export const WithTax: Story = {
  args: {
    tax: 10000,
  },
};

export const WithoutTax: Story = {
  args: {},
};
