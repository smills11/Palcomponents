import React, { useState } from "react";

import ChatList from ".";

export default {
  title: "PAL-UI-COMPONENTS/Chat List",
  component: ChatList,
};

const list = [
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

function Template(args) {
  const [selectedItem, setSelectedItem] = useState(null);

  const itemClickHandler = (item) => setSelectedItem(item);
  return (
    <div style={{ margin: "1rem", maxWidth: "20rem", padding: "1rem" }}>
      <ChatList
        {...args}
        itemClickHandler={itemClickHandler}
        selectedItem={selectedItem}
      />
    </div>
  );
}

export const Default = Template.bind({});
Default.args = {
  list,
};
