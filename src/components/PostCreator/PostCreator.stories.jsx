import React from "react";

import PostCreator from "./index";
import { action } from "@storybook/addon-actions";

export default {
  title: "PAL-UI-Components/Post Creator",
  component: PostCreator,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      defaultValue: "Post a question",
    },
    placeholder: {
      control: "text",
      defaultValue: "Type message",
    },
    submitText: {
      control: "text",
      defaultValue: "Post",
    },
  },
};

const Template = (args) => {
  return (
    <div style={{ width: "700px", marginInline: "auto", padding: "2rem" }}>
      <PostCreator {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  defaultAvatarColor: "#f0f0f0",
};

export const WithOptions = Template.bind({});
WithOptions.args = {
  housingOptions: ["Roommate", "Sublease", "Rent"],
  locationOptions: ["New York", "Los Angeles", "San Francisco"],
};
