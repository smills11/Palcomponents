import { action } from "@storybook/addon-actions";

import ChatCategories from "./index";

export default {
  title: "PAL-UI-Components/Chat Categories",
  component: ChatCategories,
  selectedCategory: { id: 6, name: "General chat" },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

// Default story
export const Default = {
  args: {
    classNames: "",
    categories: [
      { id: 1, name: "Moving to NYC" },
      { id: 2, name: "NYC Arts" },
      { id: 3, name: "Wellness" },
      { id: 4, name: "Events" },
      { id: 5, name: "NYC foodies" },
      { id: 6, name: "General chat" },
    ],
    selectedCategory: { id: 6, name: "General chat" },
    onViewAll: action("View all chats"),
    onClickCategory: action("Clicked category: "),
  },
};

// More than 6 categories
export const MoreCategories = {
  args: {
    classNames: "",
    categories: [
      { id: 1, name: "Moving to NYC" },
      { id: 2, name: "NYC Arts" },
      { id: 3, name: "Wellness" },
      { id: 4, name: "Events" },
      { id: 5, name: "NYC foodies" },
      { id: 6, name: "General chat" },
      { id: 6, name: "General chat" },
      { id: 6, name: "General chat" },
    ],
    selectedCategory: { id: 6, name: "General chat" },
    onViewAll: action("View all chats"),
    onClickCategory: action("Clicked categoryD: "),
  },
};

// More than 6 categories
export const NoCategories = {
  args: {
    classNames: "",
    categories: [],
    selectedCategory: { id: 6, name: "General chat" },
    onViewAll: action("View all chats"),
    onClickCategory: action("Clicked category: "),
  },
};
