import React from "react";

import { action } from "@storybook/addon-actions";

import Home from ".";

export default {
  title: "PAL-UI-PAGES/Home",
  component: Home,
};

function Template(args) {
  return <Home {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  onFindRoomMatesClick: action("Find room mate clicked"),
  onDiscoverChatClick: action("Find discover chat clicked"),
  onAskQuestionClick: action("Find ask question clicked"),
  instaLink: "https://www.google.com",
  tiktokLink: "https://www.google.com",
};
