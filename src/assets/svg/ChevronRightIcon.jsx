import React from "react";

function ChevronRightIcon({ width = 18, height = 22, color = "currentColor" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path d="M11.25 5.5L6.75 11L11.25 16.5" stroke={color} strokeWidth="2" />
    </svg>
  );
}

export default ChevronRightIcon;
