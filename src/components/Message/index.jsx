import React from "react";
import "./Message.styled.scss";

import PropTypes from "prop-types";

import Heart from "../../assets/svg/Heart";

const Message = ({
  imageUrl,
  defaultColor,
  authorName,
  messageText,
  isNew,
  type,
  url,
  totalHearts = 0,
}) => {
  return (
    <div className="ui-message">
      <div
        className="ui-message-avatar"
        style={{
          backgroundColor: defaultColor,
          ...(imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}),
        }}
      />
      <div className="ui-message-content">
        <div className="ui-message-author">{authorName}</div>
        {type === "media/image" && (
          <div className="ui-message-media">
            <img src={url} alt="" />
          </div>
        )}
        {messageText && <div className="ui-message-text">{messageText}</div>}
        {totalHearts > 0 && (
          <div className="ui-message-reactions">
            <div className="ui-message-heart-react">
              <Heart width={11} height={11} />
            </div>
            <div className="ui-message-reaction-count">{totalHearts}</div>
          </div>
        )}
      </div>
      {isNew && <div className="ui-message-new" />}
    </div>
  );
};

Message.propTypes = {
  imageUrl: PropTypes.string,
  defaultColor: PropTypes.string,
  authorName: PropTypes.string,
  messageText: PropTypes.string,
  isNew: PropTypes.bool,
  type: PropTypes.string,
  url: PropTypes.string,
  totalHearts: PropTypes.number,
};

export default Message;
