import React, { useState } from "react";

import SearchButton from "./index";

export default {
  title: "PAL-UI-Components/Search Button",
  component: SearchButton,
  argTypes: {
    classNames: { control: "text" },
    placeholder: { control: "text" },
    onSearch: { action: "search" },
  },
};

const Template = (args) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div
      style={{
        padding: "2rem",
        width: "380px",
        position: "absolute",
        left: "0px",
      }}
    >
      <SearchButton
        {...args}
        value={inputValue}
        onSearch={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Search for keywords",
};
