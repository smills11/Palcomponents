import React from "react";

import clsx from "clsx";
import PropTypes from "prop-types";

import "./Button.styled.scss";

function Button({
  rounded = "none",
  icon = null,
  onClick,
  children,
  classNames,
}) {
  const wrappedClassNames = clsx(
    "ui-button",
    classNames,
    clsx(rounded && `rounded-${rounded}`),
  );
  return (
    <button onClick={onClick} className={wrappedClassNames}>
      {icon}
      {children}
    </button>
  );
}

Button.propTypes = {
  classNames: PropTypes.string,
  rounded: PropTypes.oneOf(["none", "sm", "md"]),
  icon: PropTypes.oneOf(["none", "create"]),
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
