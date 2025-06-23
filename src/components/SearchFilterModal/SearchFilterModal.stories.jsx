import React, { useState } from "react";

import { action } from "@storybook/addon-actions";

import SearchFilterModal from "./index";

export default {
  title: "PAL-UI-Components/Search Filter Modal",
  component: SearchFilterModal,
};

const Template = (args) => {
  const {
    selectedHousingFilters: initialHousingFilters,
    selectedLocationFilters: initialLocationFilters,
  } = args;
  const [selectedHousingFilters, setSelectedHousingFilters] = useState(
    initialHousingFilters || [],
  );
  const [selectedLocationFilters, setSelectedLocationFilters] = useState(
    initialLocationFilters || [],
  );

  return (
    <SearchFilterModal
      {...args}
      selectedHousingFilters={selectedHousingFilters}
      changeHousingFilter={setSelectedHousingFilters}
      selectedLocationFilters={selectedLocationFilters}
      changeLocationFilter={setSelectedLocationFilters}
      onApplyFilters={action("Applying filters...")}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  housingOptions: ["Roommate", "Sublease", "Rent"],
  locationOptions: ["New York", "Los Angeles", "San Francisco"],
};

export const PreSelectedOptions = Template.bind({});
PreSelectedOptions.args = {
  classNames: "custom-search-filter",
  housingOptions: ["Roommate", "Sublease", "Rent"],
  locationOptions: ["New York", "Los Angeles", "San Francisco"],
  selectedHousingFilters: ["Sublease"],
  selectedLocationFilters: ["San Francisco"],
};

export const NoOptionsAvailable = Template.bind({});
NoOptionsAvailable.args = {
  classNames: "custom-search-filter",
  housingOptions: [],
  locationOptions: [],
};
