/* eslint-disable jsx-a11y/alt-text */
import type { Meta, StoryObj } from "@storybook/react";
import Image from "next/image";

import { FC } from "react";

const images = [
  {
    width: 715,
    height: 467,
    path: "home-page.svg",
  },
  {
    width: 536,
    height: 467,
    path: "web-app.svg",
  },
  {
    width: 401,
    height: 353,
    path: "backend.svg",
  },
];

const ImagesComponent: FC = () => {
  return (
    <div className="grid grid-cols-4 gap-24 items-center">
      {images.map(({ height, path, width }) => (
        <Image
          alt={path.replace(".svg", "")}
          key={path}
          src={`/images/${path}`}
          width={width}
          height={height}
        />
      ))}
    </div>
  );
};

const meta: Meta<typeof ImagesComponent> = {
  title: "Images",
  component: ImagesComponent,
};

export default meta;
type Story = StoryObj<typeof ImagesComponent>;

// This is the only named export in the file, and it matches the component name
export const Images: Story = {};
