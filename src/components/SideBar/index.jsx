import React, { useEffect, useState } from "react";

import clsx from "clsx";
import "./SideBar.styled.scss";
import PropTypes from "prop-types";

import ProjectPalImg from "../../assets/images/PROJECTPAL.png";

const SideBar = ({ menu, selectedItem, onItemClick, expandComponent }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const wrappedClassNames = clsx("ui-sidebar");
  const isSelected = (id) => selectedItem === id;

  const handleKeyDown = (event, id, callBack) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      callBack();
    }
  };

  useEffect(() => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  }, [selectedItem]);

  return (
    <div className={wrappedClassNames}>
      <div className="ui-sidebar-menu">
        {menu.map((item) => (
          <div className="ui-sidebar-item" key={item.id}>
            <div
              role="button"
              tabIndex="0"
              className={`ui-sidebar-item-cont ${isSelected(item.id) && "selected"}`}
              onTouchEnd={() => onItemClick(item.id)}
              onKeyDown={(e) =>
                handleKeyDown(e, item.id, () => onItemClick(item.id))
              }
              onClick={() => onItemClick(item.id)}
            >
              <div className="ui-sidebar-item-img">
                <item.Icon filledColor={isSelected(item.id) && "#FF6799"} />
                <div className="ui-sidebar-img-text">{item.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {expandComponent && (
        <div className={`ui-sidebar-expand ${!isExpanded && "close"}`}>
          <div className="ui-sidebar-expand-logo">
            <img src={ProjectPalImg} alt="projectpal" />
          </div>
          <div className="ui-sidebar-expand-component">{expandComponent}</div>

          <div
            aria-label="toggle sidebar"
            role="button"
            tabIndex="0"
            className="ui-sidebar-expand-toggle"
            onClick={() => setIsExpanded(false)}
            onKeyDown={(e) => handleKeyDown(e, () => setIsExpanded(false))}
          />
        </div>
      )}
    </div>
  );
};

SideBar.defaultProps = {
  menu: [],
  selectedItem: null,
  onItemClick: undefined,
  expandComponent: null,
};

SideBar.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
      icon: PropTypes.string,
    }),
  ),
  selectedItem: PropTypes.number,
  onItemClick: PropTypes.func,
  expandComponent: PropTypes.node,
};

export default SideBar;
