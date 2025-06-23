import React, { useState } from "react";

import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import "./ChatCategories.styled.scss";
import PropTypes from "prop-types";

const ChatCategories = ({
  classNames,
  categories,
  onViewAll,
  selectedCategory,
  onClickCategory,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isSelected = (category) =>
    selectedCategory && category.id === selectedCategory.id;

  const wrappedClassNames = clsx("ui-chat-categories-container", classNames);

  return (
    <div
      className={clsx(
        wrappedClassNames,
        isExpanded ? "ui-chat-categories-container--expanded" : "",
      )}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={clsx(
          "ui-chat-categories-header-button",
          isExpanded ? "ui-chat-categories-header-button--expanded" : "",
        )}
      >
        <span>{selectedCategory.name}</span>
        <ChevronDown
          className={`ui-chat-categories-chevron ${isExpanded ? "ui-chat-categories-chevron--rotated" : ""}`}
          size={16}
        />
      </button>

      <div
        className={`ui-chat-categories-expandable ${
          isExpanded ? "ui-chat-categories-expandable--expanded" : ""
        }`}
      >
        <div className="ui-chat-categories-content-wrapper">
          <div className="ui-chat-categories-content">
            <h3 className="ui-chat-categories-title">Explore chats</h3>
            <div className="ui-chat-categories-categories-grid">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => onClickCategory(category)}
                  className={`ui-chat-categories-category-button ${isSelected(category) && "selected"}`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <button className="ui-chat-categories-view-all" onClick={onViewAll}>
              View All
            </button>
          </div>
        </div>
        <button
          className="ui-chat-categories-toggle"
          onClick={() => setIsExpanded(false)}
        >
          &nbsp;{" "}
        </button>
      </div>
    </div>
  );
};

ChatCategories.propTypes = {
  classNames: PropTypes.string,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
  selectedCategory: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  }),
  onViewAll: PropTypes.func,
  onClickCategory: PropTypes.func,
};

export default ChatCategories;
