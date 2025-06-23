import React from "react";

import { action } from "@storybook/addon-actions";

import Question from "./index";

export default {
  title: "PAL-UI-Components/Question",
  component: Question,
};

const Template = (args) => {
  return (
    <div style={{ width: "100%", padding: "2rem" }}>
      <Question {...args} />
    </div>
  );
};

const TemplateFixWidth = (args) => {
  return (
    <div style={{ width: "700px", padding: "1rem", marginInline: "auto" }}>
      <Question {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  author: "Kelly Clifford",
  defaultAvatarColor: "#f0f0f0",
  timeAgo: "1h",
  questionText: "Hi, what is your fav studio?",
  questionActions: [
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
      commentText:
        "This is a great article! I learned a lot. his is a great article! I learned a lot his is a great article! I learned a lot his is a great article! I learned a lot his is a great article! I learned a lot his is a great article! I learned a lothis is a great article! I learned a lothis is a great article! I learned a lothis is a great article! I learned a lot his is a great article! I learned a lothis is a great article! I learned a lot",
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
  commentsLimit: 3,
};

export const WithCommentInputImage = Template.bind({});
WithCommentInputImage.args = {
  ...Default.args,
  newCommentImage: "https://via.placeholder.com/200",
};

export const WithCategory = Template.bind({});
WithCategory.args = {
  ...Default.args,
  categoryText: "New York City",
};

export const WithFixWidth = TemplateFixWidth.bind({});
WithFixWidth.args = {
  ...Default.args,
};

export const withTopComment = Template.bind({});
withTopComment.args = {
  ...Default.args,
  topComment: {
    defaultColor: "#7a5195",
    authorName: "Jessica Chen",
    commentText: "This was a fantastic read. Well done!",
  },
};
