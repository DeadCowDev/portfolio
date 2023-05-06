/* eslint-disable jsx-a11y/alt-text */
import type { Meta, StoryObj } from "@storybook/react";
import Image from "next/image";

import { FC } from "react";

const icons = [
  "react.svg",
  "flutter.svg",
  "sso.svg",
  "oauth.svg",
  "openid.svg",
  "node.svg",
  "dotnet.svg",
  "mongodb.svg",
  "postgresql.svg",
  "mssql.svg",
];

const IconsComponent: FC = () => {
  return (
    <div className="grid grid-cols-[repeat(7,104px)] gap-24">
      {icons.map((icon) => (
        <Image
          alt={icon.replace(".svg", "")}
          key={icon}
          src={`/icons/${icon}`}
          width={104}
          height={104}
        />
      ))}
    </div>
  );
};

const meta: Meta<typeof IconsComponent> = {
  title: "Icons",
  component: IconsComponent,
};

export default meta;
type Story = StoryObj<typeof IconsComponent>;

// This is the only named export in the file, and it matches the component name
export const Icons: Story = {};
