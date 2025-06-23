import React from "react";

import { action } from "@storybook/addon-actions";

import ChatSlot from "./index";
import glowingStar from "../../assets/images/glowing-star.png";

export default {
  title: "PAL-UI-Components/Chat Slot",
  component: ChatSlot,
};

const Template = (args) => {
  return (
    <div style={{ width: "360px", marginInline: "auto" }}>
      <ChatSlot {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  id: 1,
  image: glowingStar,
  author: "Alex",
  title: "Chat with Alex",
  text: "Hey there! How's it going?",
  showBookmark: true,
  fillBookmark: true,
  isDragDisabled: false,
  onClick: action("Chat clicked"),
  onEdit: action("Edit clicked"),
  onDelete: action("Delete clicked"),
  onClickBookmark: action("Bookmark clicked"),
};

export const NotFilledBookmark = Template.bind({});
NotFilledBookmark.args = {
  ...Default.args,
  fillBookmark: false,
};

export const NoBookMark = Template.bind({});
NoBookMark.args = {
  ...Default.args,
  showBookmark: false,
};

export const isDraggable = Template.bind({});
isDraggable.args = {
  ...Default.args,
  isDragDisabled: false,
};
