import React, { useEffect, useRef, useState } from "react";

import clsx from "clsx";
import PropTypes from "prop-types";

import SearchIcon from "../../assets/svg/SearchIcon";
import "./SearchButton.styled.scss";
import handleKeyDown from "../../utils/keyboardHandler";
import UseBrowser from "../../utils/useBrowser";

const SearchButton = ({
  classNames,
  placeholder,
  onSearch,
  value,
  expandCallback,
  mobIconOnly = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const { isSmallScreen } = UseBrowser();

  const divRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      if (isExpanded) setIsExpanded(false);
    }
  };

  useEffect(() => {
    setIsExpanded(!isSmallScreen);

    if (isSmallScreen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isSmallScreen]);

  useEffect(() => {
    expandCallback(isExpanded);
  }, [isExpanded]);

  const wrapperClassNames = clsx(
    "ui-search-button-cont",
    { "is-expanded": isExpanded },
    classNames,
  );

  const toggleExpanded = () => {
    if (isSmallScreen && !isExpanded) {
      setIsExpanded(true);
    } else if (isSmallScreen && isExpanded) {
      setIsExpanded(false);
    }
  };

  return (
    <div className={wrapperClassNames}>
      <div
        ref={divRef}
        className={clsx("ui-search-bar-expand", { "is-expanded": isExpanded })}
      >
        <div className="ui-search-bar-input-cont">
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onSearch}
          />
        </div>
        <div className="ui-search-bar-icon-cont">
          <div className="ui-search-bar-icon-text">Search</div>
          <div className="ui-search-bar-icon-icon">
            <SearchIcon />
          </div>
        </div>
      </div>
      <div
        role="button"
        tabIndex="0"
        className={clsx("ui-search-bar-collapse", {
          "is-expanded": !isExpanded,
          "icon-with-cont": !isExpanded && !mobIconOnly,
        })}
        onClick={toggleExpanded}
        onKeyDown={(e) => handleKeyDown(e, toggleExpanded)}
      >
        <div className="search-text">Search</div>
        <SearchIcon />
      </div>
    </div>
  );
};

SearchButton.defaultProps = {
  classNames: "",
  placeholder: "Search for keywords",
  onSearch: undefined,
  value: "",
  expandCallback: () => {},
};

SearchButton.propTypes = {
  classNames: PropTypes.string,
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
  value: PropTypes.string,
  expandCallback: PropTypes.func,
  mobIconOnly: PropTypes.bool,
};

export default SearchButton;
