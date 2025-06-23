import React from "react";

import clsx from "clsx";
import { ChevronRight } from "lucide-react";
import PropTypes from "prop-types";

import "./ChatFeed.styled.scss";
import Message from "../Message";

const ChatFeed = ({
  classNames,
  categoryText,
  messages,
  unreadCount = "0",
  onClick = null,
}) => {
  const wrappedClassNames = clsx(classNames, "ui-chat-feed");
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={wrappedClassNames} onClick={onClick}>
      <div className="ui-chat-feed-header">
        <span className="ui-chat-feed-category-text">{categoryText}</span>
        {messages && (
          <span className="ui-chat-feed-meta">{unreadCount} new messages</span>
        )}
      </div>
      <div className="ui-chat-feed-content">
        {messages?.map((message) => (
          <Message key={message.id} {...message} />
        ))}
      </div>

      <div className="ui-chat-see-all">
        <div>See all messages</div>
        <ChevronRight width={16} />
      </div>
    </div>
  );
};

ChatFeed.propTypes = {
  classNames: PropTypes.string,
  categoryText: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      imageUrl: PropTypes.string,
      defaultColor: PropTypes.string,
      authorName: PropTypes.string,
      messageText: PropTypes.string,
      isNew: PropTypes.bool,
    }).isRequired,
  ),
  unreadCount: PropTypes.string,
  onClick: PropTypes.func,
};

export default ChatFeed;
