import type { Meta, StoryObj } from "@storybook/react";

import { FC } from "react";

const colors = [
  ["bg-grey-1", "bg-grey-2", "bg-grey-3", "bg-grey-4", "bg-white"],
  [
    "bg-blue-1",
    "bg-blue-2",
    "bg-blue-3",
    "bg-blue-4",
    "bg-blue-5",
    "bg-blue-6",
  ],
  ["bg-green-1", "bg-green-2"],
  ["bg-orange-1", "bg-orange-2"],
  ["bg-purple-1", "bg-red-1", "bg-yellow-1", "bg-pink-1"],
  ["bg-gradient-1"],
  ["bg-gradient-2"],
  ["bg-gradient-3"],
];

const ColorsComponent: FC = () => {
  return (
    <div className="flex flex-col gap-20">
      {colors.map((colorRow, i) => (
        <div key={i} className="flex gap-14">
          {colorRow.map((color) => (
            <div key={color} className="flex items-center justify-center gap-4">
              <div
                className={
                  color + " border-[1px] w-12 aspect-square rounded-xl"
                }
              ></div>
              <span className="font-bold text-lg text-grey-1 whitespace-nowrap">
                {color.replace("bg-", "")}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const meta: Meta<typeof ColorsComponent> = {
  title: "Colors",
  component: ColorsComponent,
};

export default meta;
type Story = StoryObj<typeof ColorsComponent>;

// This is the only named export in the file, and it matches the component name
export const Colors: Story = {};
