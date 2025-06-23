import React from "react";

import { Plus } from "lucide-react";

import Button from "./index";

// Meta configuration
export default {
  title: "PAL-UI-Components/Button",
  component: Button,
  argTypes: {
    rounded: {
      control: { type: "select" },
      options: ["none", "sm", "md"],
    },
    icon: {
      control: { type: "select" },
      options: ["none", "create"],
    },
    onClick: { action: "clicked" },
    classNames: { control: { type: "text" } },
  },
};

// Template for rendering the component

function Template(args) {
  return <Button {...args} />;
}
// Stories
export const Default = Template.bind({});
Default.args = {
  children: "Click me",
  type: "button",
  rounded: "none",
};

export const SmallRoundedButton = Template.bind({});
SmallRoundedButton.args = {
  children: "Rounded Button",
  type: "button",
  rounded: "sm",
};

export const MediumRoundedButton = Template.bind({});
MediumRoundedButton.args = {
  children: "Rounded Button",
  type: "button",
  rounded: "md",
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  children: "Create",
  type: "button",
  rounded: "md",
  icon: <Plus width={29} height={28} strokeLinecap="0" />,
};
