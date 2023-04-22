import type { Meta, StoryObj } from "@storybook/react";

import InputForm from "./InputForm";

const meta: Meta<typeof InputForm> = {
  title: "InputForm",
  component: InputForm,
};

export default meta;
type Story = StoryObj<typeof InputForm>;

export const Normal: Story = {};
