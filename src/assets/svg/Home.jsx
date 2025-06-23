import React from "react";

import PropTypes from "prop-types";

function HomeSvg({ filledColor }) {
  return (
    <svg
      width="38"
      height="36"
      viewBox="0 0 38 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.91699 19.1393C7.91699 17.1027 7.91699 16.0844 8.35156 15.1893C8.78612 14.2942 9.60224 13.6314 11.2345 12.306L12.8178 11.0203C15.7681 8.6246 17.2432 7.42676 19.0003 7.42676C20.7575 7.42676 22.2326 8.6246 25.1828 11.0203L26.7662 12.306C28.3984 13.6314 29.2145 14.2942 29.6491 15.1893C30.0837 16.0844 30.0837 17.1027 30.0837 19.1393V25.4999C30.0837 28.3283 30.0837 29.7425 29.1562 30.6212C28.2287 31.4999 26.7359 31.4999 23.7503 31.4999H14.2503C11.2648 31.4999 9.77198 31.4999 8.84449 30.6212C7.91699 29.7425 7.91699 28.3283 7.91699 25.4999V19.1393Z"
        stroke={filledColor || "#8A8A8A"}
        strokeWidth={filledColor ? "2.3" : "1.05"}
      />
      <path
        d="M22.9587 31.5V23.5C22.9587 22.9477 22.5109 22.5 21.9587 22.5H16.042C15.4897 22.5 15.042 22.9477 15.042 23.5V31.5"
        stroke={filledColor || "#8A8A8A"}
        strokeWidth={filledColor ? "2.3" : "1.05"}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}

HomeSvg.defaultProps = {
  filledColor: "",
};

HomeSvg.propTypes = {
  filledColor: PropTypes.string,
};

export default HomeSvg;
