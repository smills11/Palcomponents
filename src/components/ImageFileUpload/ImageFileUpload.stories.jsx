import React from "react";

import { action } from "@storybook/addon-actions";
import PropTypes from "prop-types";

import ImageFileUpload from "./index";

export default {
  title: "PAL-UI-Components/Image File Upload",
  component: ImageFileUpload,
  argTypes: {
    classNames: PropTypes.string,
    maxImages: PropTypes.number,
    onImagesChange: PropTypes.func,
    enableWebcam: PropTypes.bool,
    slidesPerView: PropTypes.number,
    acceptedFileTypes: PropTypes.string,
    maxFileSize: PropTypes.number,
  },
};

const Template = (args) => <ImageFileUpload {...args} />;

export const Default = Template.bind({});
Default.args = {
  maxImages: 5,
  onImagesChange: action("Images changed"),
  enableWebcam: true,
  slidesPerView: 2,
};
