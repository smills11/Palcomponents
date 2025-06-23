import React from "react";

import clsx from "clsx";
import PropTypes from "prop-types";

import ArrowLeft from "../../assets/icons/arrow-left.png";

import "./PortalButton.styled.scss";

const PortalButton = ({ type, classNames, label, onClick }) => {
  const wrappedClassNames = clsx("ui-portal-button-container", classNames);
  return (
    <div className={wrappedClassNames}>
      <button type={type} className="ui-portal-button" onClick={onClick}>
        <div className="ui-portal-button-label">{label}</div>
        <div className="ui-portal-button-icon-cont">
          <img
            src={ArrowLeft}
            className="ui-portal-button-icon"
            alt="left-arrow"
          />
        </div>
      </button>
    </div>
  );
};

PortalButton.defaultProps = {
  type: "button",
  classNames: "",
  label: "",
  onClick: undefined,
};

PortalButton.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  classNames: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default PortalButton;
