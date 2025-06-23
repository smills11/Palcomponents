import React from "react";

import Message from "./index";

export default {
  title: "PAL-UI-Components/Message",
  component: Message,
};

const Template = (args) => <Message {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: "https://example.com/avatar.jpg",
  defaultColor: "#9b59b6",
  authorName: "John Doe",
  messageText: "This is a great article!",
};

export const NoImage = Template.bind({});
NoImage.args = {
  defaultColor: "#4CAF50",
  authorName: "Jane Smith",
  messageText: "I really enjoyed reading this.",
};
