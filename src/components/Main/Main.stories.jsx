import React from "react";

import Main from ".";
import PortalButton from "../PortalButton";

export default {
  title: "PAL-UI-COMPONENTS/Main",
  component: Main,
};

function Template(args) {
  return <Main {...args} />;
}

export const Default = Template.bind({});
Default.args = {};

export const WithChildren = Template.bind({});
WithChildren.args = {
  children: <PortalButton label="Dummy Text" />,
};
