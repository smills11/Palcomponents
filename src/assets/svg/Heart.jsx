import React from "react";

import PropTypes from "prop-types";

function Heart({ width = 10, height = 10 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.03957 6.37464L5.22618 9.36812C5.37991 9.51254 5.61943 9.51254 5.77317 9.36812L8.95978 6.37464C9.85636 5.5324 9.96524 4.1464 9.21117 3.17449L9.06938 2.99174C8.1673 1.82906 6.35659 2.02405 5.72273 3.35213C5.63319 3.53973 5.36616 3.53973 5.27662 3.35213C4.64276 2.02405 2.83205 1.82906 1.92997 2.99174L1.78818 3.17449C1.03411 4.1464 1.14299 5.53239 2.03957 6.37464Z"
        fill="#F96E77"
        stroke="#F96E77"
        strokeWidth="2"
      />
    </svg>
  );
}
Heart.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Heart;
