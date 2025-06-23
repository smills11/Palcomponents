import React, { useState } from "react";

import { action } from "@storybook/addon-actions";

import ChatMobHeader from ".";

export default {
  title: "PAL-UI-COMPOUND/Chat Mobile Header",
  component: ChatMobHeader,
};

function Template(args) {
  const [searchValue, setSearchValue] = useState("");

  const onSearch = ({ target: { value } }) => setSearchValue(value);
  return (
    <ChatMobHeader {...args} onSearch={onSearch} searchValue={searchValue} />
  );
}

export const Default = Template.bind({});
Default.args = {
  classNames: "",
  categories: [
    { id: 1, name: "Moving to NYC" },
    { id: 2, name: "NYC Arts" },
    { id: 3, name: "Wellness" },
    { id: 4, name: "Events" },
    { id: 5, name: "NYC foodies" },
    { id: 6, name: "General chat" },
  ],
  selectedCategory: { id: 1, name: "Moving to NYC" },
  onViewAll: action("View all chats"),
  onClickCategory: action("Clicked category: "),
  searchPlaceHolder: "Search keywords",
  handleBack: action("Back clicked"),
};
