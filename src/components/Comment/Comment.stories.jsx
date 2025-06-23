import React from "react";

import Comment from "./index";

export default {
  title: "PAL-UI-Components/Comment",
  component: Comment,
};

const Template = (args) => <Comment {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: "https://example.com/avatar.jpg",
  defaultColor: "#9b59b6",
  authorName: "John Doe",
  commentText: "This is a great article!",
};

export const NoImage = Template.bind({});
NoImage.args = {
  defaultColor: "#4CAF50",
  authorName: "Jane Smith",
  commentText: "I really enjoyed reading this.",
};
