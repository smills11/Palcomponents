import React, { useState } from "react";

import SideBar from ".";
import AccountSvg from "../../assets/svg/Account";
import AskSvg from "../../assets/svg/Ask";
import ChatSvg from "../../assets/svg/Chat";
import HomeSvg from "../../assets/svg/Home";
import RommatesSvg from "../../assets/svg/Rommates";
import ChatList from "../ChatList";

const sideBarMenu = [
  {
    id: 1,
    label: "Home",
    Icon: HomeSvg,
  },
  {
    id: 2,
    label: "Rommates",
    Icon: RommatesSvg,
  },
  {
    id: 3,
    label: "Chat",
    Icon: ChatSvg,
  },
  {
    id: 4,
    label: "Ask",
    Icon: AskSvg,
  },
  {
    id: 5,
    label: "Account",
    Icon: AccountSvg,
  },
];

const ChatListItems = [
  {
    name: "General chat",
    id: "generalChat",
  },
  {
    name: "Moving to NYC",
    id: "movingToNYC",
  },
  {
    name: "NYC foodies",
    id: "nycFoodies",
  },
  {
    name: "NYC arts",
    id: "nycArts",
  },
  {
    name: "Wellness",
    id: "wellness",
  },
];

export default {
  title: "PAL-UI-COMPONENTS/Side Bar",
  component: SideBar,
  parameters: {
    layout: "fullscreen",
  },
};

function Template(args) {
  const [selectedItem, setSelectedItem] = useState(null);

  const changeSelectedItem = (id) => setSelectedItem(id);

  return (
    <SideBar
      {...args}
      selectedItem={selectedItem}
      onItemClick={changeSelectedItem}
      expandComponent={selectedItem === 3 && <ChatList list={ChatListItems} />}
    />
  );
}

export const Default = Template.bind({});
Default.args = {
  menu: sideBarMenu,
};
