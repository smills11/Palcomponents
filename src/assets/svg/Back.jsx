import React from "react";

import PropTypes from "prop-types";

const Back = ({ width = "24", height = "24" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 6L9 12L15 18" stroke="#343434" strokeWidth="2" />
    </svg>
  );
};

Back.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Back;
