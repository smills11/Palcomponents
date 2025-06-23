import React, { useState } from "react";

import { PenIcon, Trash2 } from "lucide-react";
import PropTypes from "prop-types";
import Draggable from "react-draggable";

import StarIcon from "../../assets/svg/StarIcon";
import "./ChatSlot.styled.scss";
import handleKeyDown from "../../utils/keyboardHandler";

function ChatSlot({
  id,
  author,
  image,
  title,
  text,
  time,
  count,
  showBookmark = true,
  fillBookmark = true,
  onClickBookmark,
  onEdit,
  onDelete,
  onClick,
  isDragDisabled = true,
}) {
  const [isSwiped, setIsSwiped] = useState(false);

  const checkDivSwipe = (event, data) => {
    const { x } = data;
    if (isSwiped) {
      if (x > -40) {
        setIsSwiped(false);
      }
    } else {
      if (x < -50) {
        setIsSwiped(true);
      }
      if (x > -10) {
        if (event.target.closest(".ui-chat-slot-bookmark")) {
          onClickBookmark(id);
        } else {
          onClick(id);
        }
      }
    }
  };

  const handleClick = (event) => {
    if (!event.target.closest(".ui-chat-slot-bookmark")) {
      if (isDragDisabled) {
        onClick(id);
      }
    }
  };

  const handleBookMark = (event) => {
    if (event.target.closest(".ui-chat-slot-bookmark")) {
      if (isDragDisabled) {
        onClickBookmark(id);
      }
    }
  };

  const handleEdit = async (e) => {
    e.stopPropagation();
    await onEdit(id);
    setIsSwiped(false);
  };

  const handleDelete = async (e) => {
    e.stopPropagation();
    await onDelete(id);
    setIsSwiped(false);
  };

  const chatSlotBorderStyles = {
    borderTopRightRadius: isSwiped ? "0px" : "",
    borderBottomRightRadius: isSwiped ? "0px" : "",
  };

  return (
    <div className="ui-chat-slot-wrapper">
      <Draggable
        axis="x"
        bounds={{ left: -98, right: 0 }}
        position={isSwiped ? { x: -105, y: 0 } : { x: 0, y: 0 }}
        onStop={checkDivSwipe}
        disabled={isDragDisabled}
      >
        <div
          tabIndex={0}
          role="button"
          className="ui-chat-slot"
          style={chatSlotBorderStyles}
          onClick={handleClick}
          onKeyDown={(e) => handleKeyDown(e, handleClick)}
        >
          <div className="ui-chat-slot-grid">
            <div className="ui-chat-slot-grid-item-1">
              <div className="ui-chat-slot-header">
                <div className="ui-chat-slot-header-info">
                  {image && (
                    <img
                      src={image}
                      alt="chat slot img"
                      className="ui-chat-slot-img"
                    />
                  )}
                  <h2 className="ui-chat-slot-title">{title}</h2>
                </div>
                {showBookmark && (
                  <div
                    tabIndex={0}
                    role="button"
                    className="ui-chat-slot-bookmark"
                    onClick={handleBookMark}
                    onKeyDown={(e) => handleKeyDown(e, handleBookMark)}
                  >
                    <StarIcon size={16} fill={fillBookmark} />
                  </div>
                )}
              </div>
              <p className="ui-chat-slot-text">
                {author}: {text}
              </p>
              <div className="ui-chat-slot-actions">
                <button
                  onClick={handleEdit}
                  onTouchEnd={handleEdit}
                  className="ui-chat-slot-edit-btn"
                >
                  <PenIcon />
                </button>
                <button
                  onClick={handleDelete}
                  onTouchEnd={handleDelete}
                  className="ui-chat-slot-delete-btn"
                >
                  <Trash2 />
                </button>
              </div>
            </div>
            <div className="ui-chat-slot-grid-item-2">
              <div className="ui-chat-slot-time">{time}</div>
              <div className="ui-chat-slot-count">{count}</div>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
}

ChatSlot.propTypes = {
  id: PropTypes.number,
  author: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  time: PropTypes.string,
  count: PropTypes.string,
  text: PropTypes.string,
  showBookmark: PropTypes.bool,
  fillBookmark: PropTypes.bool,
  onClickBookmark: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onClick: PropTypes.func,
  isDragDisabled: PropTypes.bool,
};

export default ChatSlot;
