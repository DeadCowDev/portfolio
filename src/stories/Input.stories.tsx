import { Input as Inputcomponent } from "@/components/input";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Inputcomponent> = {
  title: "Input",
  component: Inputcomponent,
};

export default meta;
type Story = StoryObj<typeof Inputcomponent>;

// This is the only named export in the file, and it matches the component name
export const Input: Story = {
  args: {
    label: "Label",
  },
};
