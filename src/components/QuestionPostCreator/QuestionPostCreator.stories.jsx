import React from "react";

import { action } from "@storybook/addon-actions";

import QuestionPostCreator from "./index";

export default {
  title: "PAL-UI-Components/Question Post Creator",
  component: QuestionPostCreator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onSubmit: { action: "submitted" },
    onClose: { action: "closed" },
    maxLength: {
      control: { type: "number", min: 50, max: 1000 },
      defaultValue: 200,
    },
    title: {
      control: "text",
      defaultValue: "Post a question",
    },
    placeholder: {
      control: "text",
      defaultValue: "Type message",
    },
    showAnonymousToggle: {
      control: "boolean",
      defaultValue: true,
    },
    showImageUpload: {
      control: "boolean",
      defaultValue: true,
    },
    submitText: {
      control: "text",
      defaultValue: "Post",
    },
    initialIsAnonymous: {
      control: "boolean",
      defaultValue: true,
    },
  },
};

const Template = (args) => {
  return (
    <div style={{ width: "700px" }}>
      <QuestionPostCreator {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  defaultAvatarColor: "#f0f0f0",
  username: "John Doe",
  avatarUrl: "",
  onSubmit: action("submitted"),
  onClose: action("closed"),
  maxLength: 200,
  title: "Post a question",
  placeholder: "Type message",
  showAnonymousToggle: true,
  showImageUpload: true,
  submitText: "Post",
  initialIsAnonymous: true,
};

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  ...Default.args,
  title: "Share your thoughts",
  placeholder: "What's on your mind?",
  submitText: "Share",
};

export const NoAnonymousToggle = Template.bind({});
NoAnonymousToggle.args = {
  ...Default.args,
  showAnonymousToggle: false,
};

export const NoImageUpload = Template.bind({});
NoImageUpload.args = {
  ...Default.args,
  showImageUpload: false,
};

export const CustomMaxLength = Template.bind({});
CustomMaxLength.args = {
  ...Default.args,
  maxLength: 500,
};
