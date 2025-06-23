import React, { useState } from "react";

import PageLayout from ".";
import AccountSvg from "../../assets/svg/Account";
import AskSvg from "../../assets/svg/Ask";
import ChatSvg from "../../assets/svg/Chat";
import HomeSvg from "../../assets/svg/Home";
import RommatesSvg from "../../assets/svg/Rommates";
import ChatList from "../ChatList";
import SideBar from "../SideBar";

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
  title: "PAL-UI-COMPONENTS/Page Layout",
  component: PageLayout,
  parameters: {
    layout: "fullscreen",
  },
};

function Template(args) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedChat, setSelectedChat] = useState({ id: "generalChat" });

  const changeSelectedItem = (id) => setSelectedItem(id);

  const chatClickHandler = (item) => setSelectedChat(item);

  const SideBarComponent = (
    <SideBar
      {...args}
      selectedItem={selectedItem}
      onItemClick={changeSelectedItem}
      expandComponent={
        selectedItem === 3 && (
          <ChatList
            list={ChatListItems}
            itemClickHandler={chatClickHandler}
            selectedItem={selectedChat}
          />
        )
      }
    />
  );

  const ContentComponent = (
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "12px",
        backgroundColor: "#FFFFFF",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    />
  );

  return (
    <PageLayout
      {...args}
      SideBar={SideBarComponent}
      PageContent={ContentComponent}
    />
  );
}

export const Default = Template.bind({});
Default.args = {
  menu: sideBarMenu,
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  ...Default.args,
  footer: <div>Footer</div>,
};
