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
    small: false,
    className: "bg-blue-4 text-white",
    children: "Lorem Lipsum",
  },
};

// This is the only named export in the file, and it matches the component name
export const Small: Story = {
  args: {
    small: true,
    className: "bg-blue-4 text-white",
    children: "Lorem Lipsum",
  },
};
