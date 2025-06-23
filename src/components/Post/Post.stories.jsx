import React from "react";

import { action } from "@storybook/addon-actions";

import Post from "./index";

export default {
  title: "PAL-UI-Components/Post",
  component: Post,
  argTypes: {
    classNames: { control: "text" },
    avatarUrl: { control: "text" },
    defaultAvatarColor: { control: "color" },
    author: { control: "text" },
    timeAgo: { control: "text" },
    content: { control: "text" },
    images: { control: "array" },
    comments: { control: "string" },
  },
};

const Template = (args) => <Post {...args} />;

export const Default = Template.bind({});
Default.args = {
  avatarUrl: "https://via.placeholder.com/40",
  defaultAvatarColor: "#f0f0f0",
  author: "Kelly Clifford",
  timeAgo: "1h",
  content:
    "Hi! My roommate and I are looking for a third roommate on our 3BR/1B in East Village! The lease starts Oct 1, paying $1,295 per month each. Let me know if you're interested!",
  postOptions: [
    {
      icon: "🛤",
      label: "Delete",
      onClick: action("Like clicked"),
    },
    {
      icon: "💬",
      label: "archive",
      onClick: action("Like clicked"),
    },
  ],
  comments: [
    {
      imageUrl: encodeURI(
        "https://pal-media.s3.us-east-1.amazonaws.com/pp-Muhammad Ahmed Jamil--120",
      ),
      defaultColor: "#6b5b95",
      authorName: "Emily Johnson",
      commentText: "This is a great article! I learned a lot.",
    },
    {
      imageUrl: encodeURI(
        "https://pal-media.s3.us-east-1.amazonaws.com/pp-Muhammad Ahmed Jamil--120",
      ),
      defaultColor: "#f7786b",
      authorName: "Michael Davis",
      commentText: "Interesting perspectives. Well-written.",
    },
    {
      defaultColor: "#78c0a8",
      authorName: "Sarah Lee",
      commentText: "Enjoyed reading this. Thought-provoking.",
    },
    {
      imageUrl: encodeURI(
        "https://pal-media.s3.us-east-1.amazonaws.com/pp-Muhammad Ahmed Jamil--120",
      ),
      defaultColor: "#e15f41",
      authorName: "David Nguyen",
      commentText:
        "Insightful analysis. Keep up the great work.Insightful analysis. Keep up the great work.Insightful analysis. Keep up the great work.Insightful analysis. Keep up the great work.Insightful analysis. Keep up the great work.Insightful analysis. Keep up the great work.Insightful analysis. Keep up the great work.Insightful analysis. Keep up the great work.Insightful analysis. Keep up the great work.Insightful analysis. Keep up the great work.",
    },
    {
      defaultColor: "#7a5195",
      authorName: "Jessica Chen",
      commentText: "This was a fantastic read. Well done!",
    },
  ],
  onClickResponse: action("Response clicked"),
  totalComments: "20",
  postBadges: ["Roommates", "East Village", "3BR/1B"],
};

export const WithCommentInputImage = Template.bind({});
WithCommentInputImage.args = {
  ...Default.args,
  newCommentImage: "https://via.placeholder.com/200",
};

export const WithImage = Template.bind({});
WithImage.args = {
  ...Default.args,
  images: ["https://via.placeholder.com/400x300"],
};

export const MultipleImages = Template.bind({});
MultipleImages.args = {
  ...Default.args,
  images: [
    "https://via.placeholder.com/700x300",
    "https://via.placeholder.com/400x700",
    "https://via.placeholder.com/400x300",
  ],
};

export const NoAvatar = Template.bind({});
NoAvatar.args = {
  ...Default.args,
  avatarUrl: null,
};

export const NoPostOptions = Template.bind({});
NoPostOptions.args = {
  ...Default.args,
  postOptions: null,
};

export const WithComments = Template.bind({});
WithComments.args = {
  ...Default.args,
};
