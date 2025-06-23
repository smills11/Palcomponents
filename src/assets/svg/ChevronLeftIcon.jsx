import React from "react";

function ChevronLeftIcon({ width = 18, height = 22, color = "currentColor" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path d="M6.75 16.5L11.25 11L6.75 5.5" stroke={color} strokeWidth="2" />
    </svg>
  );
}

export default ChevronLeftIcon;
