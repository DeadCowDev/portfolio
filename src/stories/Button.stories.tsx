import { Button as ButtonComponent } from "@/components/button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ButtonComponent> = {
  title: "Button",
  tags: ["autodocs"],
  component: ButtonComponent,
};

export default meta;
type Story = StoryObj<typeof ButtonComponent>;

// This is the only named export in the file, and it matches the component name
export const Button: Story = {
  args: {
    children: "Lorem Lipsum",
    color: "blue",
  },
};

// This is the only named export in the file, and it matches the component name
export const Small: Story = {
  args: {
    buttonSize: "small",
    children: "Lorem Lipsum",
    color: "blue",
  },
};

export const ExtraSmall: Story = {
  args: {
    buttonSize: "xSmall",
    children: "Lorem Lipsum",
    color: "blue",
  },
};
