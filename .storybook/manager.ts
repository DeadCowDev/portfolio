// .storybook/manager.js

import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Deadcow Enterprises",
    brandUrl: "https://example.com",
    brandImage: "/logo.png",
    brandTarget: "_blank",
  }),
});
