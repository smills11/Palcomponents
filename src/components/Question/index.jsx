/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useEffect, useRef, useState } from "react";

import clsx from "clsx";
import { Heart } from "lucide-react";
import PropTypes from "prop-types";

import SendImg from "../../assets/images/send.png";
import CameraIcon from "../../assets/svg/CameraIcon";
import CommentIcon from "../../assets/svg/CommentIcon";
import SendSvg from "../../assets/svg/Send";
import handleKeyDown, {
  handleKeyDownEnterOnly,
} from "../../utils/keyboardHandler";
import "./Question.styled.scss";
import Comment from "../Comment";
import CommentList from "../CommentList";

function Question({
  id,
  classNames,
  questionText,
  author,
  timeAgo,
  questionActions,
  totalComments = 0,
  totalLikes = 0,
  onClickResponse,
  comments = [],
  handleReplyLink = undefined,
  isLiked = false,
  handleLike = undefined,
  categoryText,
  commentsLimit = 2,
  showMoreToggle = false,
  newComment = "",
  newCommentImage = null,
  changeComment = undefined,
  changeCommentImage = undefined,
  handleComment = undefined,
  defaultAvatarColor,
  avatarUrl = "",
  displayQuestionActions = true,
  topComment = null,
  onSendClick = undefined,
  onProfileClick = undefined,
}) {
  const fileInputRef = useRef();
  const optionsRef = useRef();

  const [showQuestionActions, setShowQuestionActions] = useState(false);

  const toggleShowQuestionOptions = () =>
    setShowQuestionActions((prev) => !prev);

  const wrappedClassNames = clsx(classNames);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const url = URL.createObjectURL(selectedFile);
    changeCommentImage({ file: selectedFile, url });
  };

  const handleOutsideClick = (event) => {
    if (optionsRef.current && !optionsRef.current.contains(event.target)) {
      if (showQuestionActions) setShowQuestionActions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showQuestionActions]);

  return (
    <div className={wrappedClassNames} onClick={handleReplyLink}>
      <div className="ui-question">
        <div className="ui-question-header">
          <div>
            {categoryText && (
              <div className="ui-question-category">{categoryText}</div>
            )}
            <div className="ui-question-user-info">
              <div
                className="ui-question-avatar"
                style={{ backgroundColor: defaultAvatarColor }}
                onClick={(e) => {
                  e.stopPropagation();
                  onProfileClick();
                }}
              >
                <img
                  src={avatarUrl}
                  alt={`${author}'s avatar`}
                  // eslint-disable-next-line no-return-assign
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>
              <span
                className="ui-question-author"
                onClick={(e) => {
                  e.stopPropagation();
                  onProfileClick();
                }}
              >
                {author}
              </span>
              {onSendClick && (
                <div
                  className="send-img"
                  style={{ marginLeft: "-8px", marginBottom: "-2px" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSendClick();
                  }}
                >
                  <img src={SendImg} alt="send" />
                </div>
              )}
            </div>
          </div>

          <div className="ui-question-meta-container">
            {timeAgo && <span className="ui-question-time">{timeAgo}</span>}

            {displayQuestionActions && (
              <button className="ui-question-options">
                <button
                  className="ui-question-options-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleShowQuestionOptions();
                  }}
                  aria-label="Toggle ui-question options"
                >
                  •••
                </button>
                {showQuestionActions && (
                  <div className="ui-question-options-menu" ref={optionsRef}>
                    {questionActions?.map(({ label, icon, onClick }) => (
                      <button
                        className="ui-question-options-menu-item"
                        onClick={(e) => {
                          e.stopPropagation();
                          onClick(e, id);
                        }}
                        role="menuitem"
                        tabIndex="0"
                        onKeyPress={(e) => {
                          e.stopPropagation();
                          if (e.key === "Enter" || e.key === " ") {
                            onClick(e, id);
                          }
                        }}
                      >
                        {icon} <span>{label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </button>
            )}
          </div>
        </div>

        <div className="ui-question-text">{questionText}</div>

        <div className="ui-questions-inter-cont">
          <div className="ui-question-interactions">
            <span
              tabIndex={0}
              role="button"
              className="ui-question-likes-badge"
              onClick={(e) => {
                e.stopPropagation();
                handleLike();
              }}
              onKeyDown={(e) => {
                e.stopPropagation();
                handleKeyDown(e, handleLike);
              }}
            >
              <Heart fill={isLiked ? "#FF6799" : "none"} />
              {totalLikes}
            </span>
          </div>
          <div className="ui-question-interactions">
            <span className="ui-question-comments-badge">
              <CommentIcon />
              {totalComments}
            </span>
          </div>
        </div>

        <div className="ui-question-footer">
          <button
            className="ui-question-camera-btn"
            onClick={(e) => {
              e.stopPropagation();
              fileInputRef.current.click();
            }}
          >
            <input
              type="file"
              ref={fileInputRef}
              accept="image/png, image/gif, image/jpeg, image/jpg"
              onChange={handleFileChange}
            />
            <CameraIcon />
          </button>
          <button
            className="ui-question-response"
            onClick={(e) => {
              e.stopPropagation();
              onClickResponse(e);
            }}
            aria-label="Type a response"
          >
            <div className="ui-question-response-box">
              {newCommentImage && (
                <div className="ui-question-response-image">
                  <img src={newCommentImage} alt="comment img" />
                </div>
              )}
              <div className="ui-question-response-input-cont">
                <input
                  type="text"
                  placeholder="Add a comment"
                  value={newComment}
                  onKeyDown={(e) => handleKeyDownEnterOnly(e, handleComment)}
                  onChange={(e) => changeComment(e.target.value)}
                />
                <button onClick={handleComment}>
                  <SendSvg />
                </button>
              </div>
            </div>
          </button>
        </div>

        {comments.length > 0 && (
          <>
            {topComment && (
              <div className="ui-question-comment-heading">Top comment!</div>
            )}
            <div style={{ position: "relative" }}>
              <div className="ui-question-comments">
                {topComment && (
                  <div className="ui-question-top-comment">
                    <Comment {...topComment} />
                  </div>
                )}
                <CommentList
                  comments={comments}
                  showMoreToggle={showMoreToggle}
                  commentsLimit={commentsLimit}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

Question.propTypes = {
  classNames: PropTypes.string,
  id: PropTypes.string,
  questionText: PropTypes.string,
  author: PropTypes.string.isRequired,
  timeAgo: PropTypes.string.isRequired,
  onClickResponse: PropTypes.func.isRequired,
  totalComments: PropTypes.number,
  totalLikes: PropTypes.number,
  questionActions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    }),
  ),
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      defaultColor: PropTypes.string,
      authorName: PropTypes.string,
      commentText: PropTypes.string,
      commentImage: PropTypes.string,
    }),
  ),
  handleReplyLink: PropTypes.func,
  isLiked: PropTypes.bool,
  handleLike: PropTypes.func,
  categoryText: PropTypes.string,
  commentsLimit: PropTypes.number,
  showMoreToggle: PropTypes.bool,
  newComment: PropTypes.string,
  newCommentImage: PropTypes.string,
  changeComment: PropTypes.func,
  changeCommentImage: PropTypes.func,
  handleComment: PropTypes.func,
  defaultAvatarColor: PropTypes.string,
  avatarUrl: PropTypes.string,
  displayQuestionActions: PropTypes.bool,
  topComment: PropTypes.instanceOf(Object),
  onSendClick: PropTypes.func.isRequired,
  onProfileClick: PropTypes.func.isRequired,
};

export default Question;
