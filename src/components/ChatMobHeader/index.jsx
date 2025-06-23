import React, { useState } from "react";

import clsx from "clsx";
import PropTypes from "prop-types";

import BackArrow from "../../assets/images/back-arrow.png";
import handleKeyDown from "../../utils/keyboardHandler";
import ChatCategories from "../ChatCategories";
import ChatSearchBar from "../SearchButton";

import "./chat-mob-header.scss";

const ChatMobHeader = ({
  categories,
  selectedCategory,
  onViewAll,
  onClickCategory,
  onSearch,
  searchValue,
  searchPlaceHolder,
  handleBack,
  notification = null,
  chatDetails = null,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const wrappedClassNames = clsx("ui-chat-mob-header", { noBg: isSearchOpen });

  const expandCallBack = (value) => setIsSearchOpen(value);

  return (
    <div className={wrappedClassNames}>
      {!isSearchOpen && (
        <>
          <div
            tabIndex="0"
            role="button"
            className="ui-chat-mob-header-back"
            onClick={handleBack}
            onKeyDown={(e) => handleKeyDown(e, handleBack)}
          >
            <img src={BackArrow} alt="back" />
          </div>
          {chatDetails ? (
            <div className="ui-chat-mob-header-chat-details">
              <span className="header-chat-details-container">
                {chatDetails}
              </span>
            </div>
          ) : (
            <div className="ui-chat-mob-header-categories">
              <ChatCategories
                categories={categories}
                selectedCategory={selectedCategory}
                onViewAll={onViewAll}
                onClickCategory={onClickCategory}
              />
            </div>
          )}
          <div className="ui-chat-mob-header-notification-container">
            {notification}
          </div>
        </>
      )}
      <div className="ui-chat-mob-header-search-cont">
        <ChatSearchBar
          classNames="ui-chat-mob-header-search"
          onSearch={onSearch}
          value={searchValue}
          placeholder={searchPlaceHolder}
          expandCallback={expandCallBack}
          mobIconOnly
        />
      </div>
    </div>
  );
};

ChatMobHeader.defaultProps = {
  categories: [],
  handleBack: undefined,
  searchPlaceHolder: "",
  onSearch: undefined,
  searchValue: "",
  onViewAll: undefined,
  onClickCategory: undefined,
  selectedCategory: null,
};

ChatMobHeader.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
  handleBack: PropTypes.func.isRequired,
  searchPlaceHolder: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  onViewAll: PropTypes.func.isRequired,
  onClickCategory: PropTypes.func.isRequired,
  selectedCategory: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  notification: PropTypes.node,
  chatDetails: PropTypes.node,
};

export default ChatMobHeader;
