import React from "react";

import PropTypes from "prop-types";

function SearchIcon({ width = 24, height = 24, color = "currentColor" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.3849 15.448C11.7346 17.5706 7.8552 17.4036 5.39842 14.9468C2.76238 12.3108 2.76238 8.0369 5.39842 5.40086C8.03445 2.76482 12.3083 2.76482 14.9444 5.40086C17.4011 7.85764 17.5682 11.7371 15.4456 14.3873L20.6012 19.543C20.8941 19.8359 20.8941 20.3107 20.6012 20.6036C20.3083 20.8965 19.8334 20.8965 19.5405 20.6036L14.3849 15.448ZM6.45908 13.8861C4.40882 11.8359 4.40882 8.51177 6.45908 6.46152C8.50933 4.41126 11.8334 4.41127 13.8837 6.46152C15.9324 8.51027 15.9339 11.831 13.8882 13.8816C13.8867 13.8831 13.8852 13.8846 13.8837 13.8861C13.8822 13.8876 13.8807 13.8891 13.8792 13.8906C11.8286 15.9364 8.50783 15.9349 6.45908 13.8861Z"
        fill={color}
      />
    </svg>
  );
}

SearchIcon.defaultProps = {
  width: 24,
  height: 24,
  color: "currentColor",
};

SearchIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default SearchIcon;
