import React from "react";

import PropTypes from "prop-types";

const Send = ({ width = "24", height = "20", filledColor = "#FF6799" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="20"
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <rect width="24" height="20" rx="10" fill={filledColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9711 6.7332L15.296 8.35952C16.8638 9.12642 17.6478 9.50987 17.6531 10.1279C17.6585 10.7459 16.8814 11.143 15.3272 11.9371L12.0312 13.6212L12.0312 13.6212C9.99609 14.6611 8.97852 15.181 8.47282 14.7692C8.42456 14.7299 8.38008 14.6862 8.33996 14.6387C7.92904 14.1516 8.39897 13.1605 9.35743 11.2003L13.8753 11.1609C14.4276 11.1561 14.8714 10.7045 14.8665 10.1522C14.8617 9.59994 14.4101 9.15615 13.8578 9.16097L9.33998 9.20039C8.34745 7.25722 7.8603 6.27444 8.26265 5.78033C8.30194 5.73208 8.34565 5.6876 8.39321 5.64747C8.89165 5.22691 9.91814 5.72901 11.9711 6.7332Z"
        fill="#FFE5EE"
      />
    </svg>
  );
};

Send.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  filledColor: PropTypes.string,
};

export default Send;
