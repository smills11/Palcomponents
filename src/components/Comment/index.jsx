import React from "react";
import "./Comment.styled.scss";

import PropTypes from "prop-types";

import Heart from "../../assets/svg/Heart";

const Comment = ({
  imageUrl,
  defaultColor,
  authorName,
  commentText,
  commentImage = null,
  totalHearts = 0,
}) => {
  return (
    <div className="ui-comment">
      <div
        className="ui-comment-avatar"
        style={{
          backgroundColor: defaultColor,
          ...(imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}),
        }}
      />
      <div className="ui-comment-content">
        <div className="ui-comment-author">{authorName}</div>
        <div className="ui-comment-text">
          {commentImage && (
            <div className="ui-comment-image">
              <img src={commentImage} alt="message" />
            </div>
          )}
          <div className="ui-comment-text-content">{commentText}</div>
        </div>
        {totalHearts > 0 && (
          <div className="ui-comment-reactions">
            <div className="ui-comment-heart-react">
              <Heart width={11} height={11} />
            </div>
            <div className="ui-comment-reaction-count">{totalHearts}</div>
          </div>
        )}
      </div>
    </div>
  );
};

Comment.propTypes = {
  imageUrl: PropTypes.string,
  defaultColor: PropTypes.string,
  authorName: PropTypes.string,
  commentText: PropTypes.string,
  commentImage: PropTypes.string,
  totalHearts: PropTypes.string,
};

export default Comment;
