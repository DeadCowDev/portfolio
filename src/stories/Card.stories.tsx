/* eslint-disable jsx-a11y/alt-text */
import type { Meta, StoryObj } from "@storybook/react";
import Image from "next/image";
import { FC } from "react";
import { Button, Card as CardComponent, Typography } from "@/components";

const meta: Meta<typeof CardComponent> = {
  title: "Card",
  component: CardComponent,
};

export default meta;
type Story = StoryObj<typeof CardComponent>;

// This is the only named export in the file, and it matches the component name
export const Card: Story = {
  render: () => (
    <CardComponent className="gap-[24px]">
      <Image width={104} height={104} src="/icons/react.svg" alt="Image" />
      <Typography variant="titleLBold">Lorem</Typography>
      <Typography variant="mediumTextRegular" className="text-center my-[16px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta laborum
        voluptates unde voluptas debitis pariatur consequatur mollitia quia
        similique magnam id est, repellendus itaque ea velit qui nisi,
        consequuntur ad.
      </Typography>
      <Button
        className="w-full max-w-[293px] bg-blue-4 text-white"
        buttonSize="small"
        color="blue"
      >
        Lorem Lipsum
      </Button>
    </CardComponent>
  ),
};
