import React from "react";

import PropTypes from "prop-types";

function AccountAvg({ filledColor }) {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="13.4997"
        cy="10.7223"
        r="4.16667"
        stroke={filledColor || "#8A8A8A"}
        strokeWidth={filledColor && "1.8"}
        strokeLinecap="round"
      />
      <circle
        cx="13.5"
        cy="13.5"
        r="12.5"
        stroke={filledColor || "#8A8A8A"}
        strokeWidth={filledColor && "1.8"}
      />
      <path
        d="M21.8337 22.8141C21.3421 21.3375 20.259 20.0327 18.7523 19.102C17.2456 18.1714 15.3995 17.667 13.5003 17.667C11.6012 17.667 9.75507 18.1714 8.24836 19.102C6.74165 20.0327 5.65853 21.3375 5.16699 22.8141"
        stroke={filledColor || "#8A8A8A"}
        strokeWidth={filledColor && "1.8"}
        strokeLinecap="round"
      />
    </svg>
  );
}

AccountAvg.defaultProps = {
  filledColor: "",
};

AccountAvg.propTypes = {
  filledColor: PropTypes.string,
};

export default AccountAvg;
