import React, { useState } from "react";

import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-react";
import PropTypes from "prop-types";

import handleKeyDown from "../../utils/keyboardHandler";
import Comment from "../Comment";

import "./CommentList.styled.scss";

const CommentList = ({
  showMoreToggle = false,
  commentsLimit = 1,
  comments = [],
  classNames = "",
  showMoreText = "Show more",
  hideText = "Hide",
}) => {
  const wrapClassNames = clsx("ui-comment-list", classNames);

  const [showMoreComments, setShowMoreComments] = useState(false);

  const toggleShowMoreComments = () => setShowMoreComments((prev) => !prev);

  const renderWithMoreToggle = () => (
    <>
      <div
        className={clsx("ui-comments-hidden", {
          "ui-comments-hidden-to-visible": showMoreComments,
        })}
      >
        {comments.slice(0, comments.length - commentsLimit).map((comment) => (
          <div className="ui-comment-item" key={comment.id}>
            <Comment type={comment.type} {...comment} />
          </div>
        ))}
      </div>
      <div className="ui-comments-visible">
        {comments
          .slice(comments.length - commentsLimit, comments.length)
          .map((comment) => (
            <div className="ui-comment-item" key={comment.id}>
              <Comment type={comment.type} {...comment} />
            </div>
          ))}
      </div>
      <div
        tabIndex={0}
        role="button"
        className="ui-comment-toggle"
        onClick={(e) => {
          e.stopPropagation();
          toggleShowMoreComments();
        }}
        onKeyDown={(e) => {
          e.stopPropagation();
          handleKeyDown(e, toggleShowMoreComments);
        }}
      >
        {showMoreComments ? hideText : showMoreText}
        <span>{showMoreComments ? <ChevronUp /> : <ChevronDown />}</span>
      </div>
    </>
  );

  const renderComments = () => (
    <div className="ui-comments-visible">
      {comments.map((comment) => (
        <div className="ui-comment-item" key={comment.id}>
          <Comment type={comment.type} {...comment} />
        </div>
      ))}
    </div>
  );

  return (
    <div className={wrapClassNames}>
      {(commentsLimit && commentsLimit >= comments.length) || !showMoreToggle
        ? renderComments()
        : renderWithMoreToggle()}
    </div>
  );
};

CommentList.propTypes = {
  showMoreToggle: PropTypes.bool,
  commentsLimit: PropTypes.number,
  comments: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  classNames: PropTypes.string,
  showMoreText: PropTypes.string,
  hideText: PropTypes.string,
};

export default CommentList;
