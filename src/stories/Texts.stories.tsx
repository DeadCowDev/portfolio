import { Typography, typographyVariants } from "@/components/typography";
import type { Meta, StoryObj } from "@storybook/react";

import { FC } from "react";

const TextsComponent: FC = () => {
  return (
    <div className="flex flex-col gap-4">
      {Object.keys(typographyVariants).map((variant) => (
        <Typography
          key={variant}
          variant={variant as keyof typeof typographyVariants}
        >
          This is a {variant} typography
        </Typography>
      ))}
    </div>
  );
};

const meta: Meta<typeof TextsComponent> = {
  title: "Texts",
  component: TextsComponent,
};

export default meta;
type Story = StoryObj<typeof TextsComponent>;

// This is the only named export in the file, and it matches the component name
export const Texts: Story = {};
