import React from "react";

import { action } from "@storybook/addon-actions";

import Button from ".";

export default {
  title: "PAL-UI-COMPONENTS/Portal Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
};

function Template(args) {
  return <Button {...args} />;
}

export const FindRommates = Template.bind({});
FindRommates.args = {
  label: "Find rommates",
  onClick: action("Clicked on find rommates"),
};

export const DiscoverChats = Template.bind({});
DiscoverChats.args = {
  label: "Discover chats",
  onClick: action("Clicked on discover chats"),
};

export const AskAnswer = Template.bind({});
AskAnswer.args = {
  label: "Ask & answer",
  onClick: action("Clicked on ask & answer"),
};
