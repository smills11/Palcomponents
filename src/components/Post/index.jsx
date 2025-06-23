/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useRef, useState } from "react";

import clsx from "clsx";
import PropTypes from "prop-types";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SendImg from "../../assets/images/send.png";
import CameraIcon from "../../assets/svg/CameraIcon";
import ChevronLeftIcon from "../../assets/svg/ChevronLeftIcon";
import ChevronRightIcon from "../../assets/svg/ChevronRightIcon";
import CommentIcon from "../../assets/svg/CommentIcon";
import InstagramLinkSvg from "../../assets/svg/InstaLink";
import SendSvg from "../../assets/svg/Send";
import { handleKeyDownEnterOnly } from "../../utils/keyboardHandler";
import UseBrowser from "../../utils/useBrowser";
import "./Post.styled.scss";
import CommentList from "../CommentList";

const Post = ({
  classNames,
  id,
  avatarUrl,
  defaultAvatarColor,
  author,
  timeAgo,
  content,
  images,
  postOptions,
  totalComments = "0",
  comments = [],
  handleReplyLink = undefined,
  newComment = "",
  newCommentImage = null,
  changeComment = undefined,
  changeCommentImage = undefined,
  handleComment = undefined,
  displayActions = false,
  showMoreToggle = true,
  commentsLimit = 2,
  showMoreText,
  instagramId = "@chatprojectpal",
  instagramLink = "https://www.instagram.com/chatprojectpal?igsh=aGh0aW5zNWxiaG5y",
  postBadges = [],
  onProfileClick = undefined,
  onSendClick = undefined,
}) => {
  const wrappedClassNames = clsx(classNames);

  const { isSmallScreen } = UseBrowser();

  const fileInputRef = useRef();
  const swiperRef = useRef(null);
  const optionsRef = useRef(false);

  const [showPostOptions, setShowPostOptions] = useState(false);
  const toggleShowPostOptions = () => setShowPostOptions((prev) => !prev);

  const goSwiperNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goSwiperBack = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const url = URL.createObjectURL(selectedFile);
    changeCommentImage({ file: selectedFile, url });
  };

  const handleOutsideClick = (event) => {
    if (optionsRef.current && !optionsRef.current.contains(event.target)) {
      if (showPostOptions) setShowPostOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showPostOptions]);

  return (
    <div className={wrappedClassNames} onClick={handleReplyLink}>
      <div className="ui-post">
        <div className="ui-post-header">
          <div className="ui-post-user-info">
            <div
              className="ui-post-avatar"
              style={{ backgroundColor: defaultAvatarColor }}
              onClick={(e) => {
                e.stopPropagation();
                onProfileClick();
              }}
            >
              <img
                src={avatarUrl}
                alt={`${author}'s avatar`}
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
            <div
              className="ui-post-author"
              onClick={(e) => {
                e.stopPropagation();
                onProfileClick();
              }}
            >
              <div>{author}</div>
            </div>
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
          <div className="ui-post-actions">
            {timeAgo && <div className="ui-post-time">{timeAgo}</div>}

            {displayActions && (
              <div className="ui-post-options">
                <button
                  className="ui-post-options-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleShowPostOptions();
                  }}
                  aria-label="Toggle ui-post options"
                >
                  •••
                </button>
                {showPostOptions && (
                  <div className="ui-post-options-menu" ref={optionsRef}>
                    {postOptions?.map(({ label, icon, onClick }) => (
                      <button
                        className="ui-post-options-menu-item"
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
              </div>
            )}
          </div>
        </div>

        {instagramId && instagramLink && (
          <div className="ui-post-author-instagram">
            <InstagramLinkSvg width={11} height={11} />
            <a
              className="ui-post-instagram-link"
              href={instagramLink}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              rel="noreferrer"
            >
              {instagramId}
            </a>
          </div>
        )}

        {postBadges.length > 0 && (
          <div className="ui-post-tags">
            {postBadges.map((elem) => (
              <div key={elem} className="ui-post-tags-item">
                {elem}
              </div>
            ))}
          </div>
        )}

        <div className="ui-post-content">
          <p className="ui-post-text">{content}</p>
          {images?.length > 0 && (
            <div className="ui-post-image-swiper">
              {images?.length > 2 && (
                <button
                  className="ui-post-swiper-back-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    goSwiperBack();
                  }}
                  tabIndex="0"
                  onKeyDown={(e) => {
                    e.stopPropagation();
                    if (e.key === "Enter" || e.key === " ") {
                      goSwiperBack();
                    }
                  }}
                >
                  <ChevronRightIcon />
                </button>
              )}

              <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={isSmallScreen ? 1 : 2}
                pagination={{ clickable: true }}
              >
                <div className="ui-post-images">
                  {images?.map((image) => (
                    <SwiperSlide key={image}>
                      <div className="ui-post-image-wrapper">
                        <img src={image} alt="Post" />
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>

              {images?.length > 2 && (
                <button
                  className="ui-post-swiper-next-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    goSwiperNext();
                  }}
                  tabIndex="0"
                  onKeyDown={(e) => {
                    e.stopPropagation();
                    if (e.key === "Enter" || e.key === " ") {
                      goSwiperNext();
                    }
                  }}
                >
                  <ChevronLeftIcon />
                </button>
              )}
            </div>
          )}
        </div>

        <div className="ui-post-comments">
          <span className="ui-post-comment-badge">
            <CommentIcon />
            {totalComments}
          </span>
        </div>

        <div className="ui-post-footer">
          <button
            className="ui-post-camera-btn"
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
          <div className="ui-post-response" aria-label="Type a response">
            <div className="ui-post-response-box">
              {newCommentImage && (
                <div className="ui-post-response-image">
                  <img src={newCommentImage} alt="comment img" />
                </div>
              )}
              <div className="ui-post-response-input-cont">
                <input
                  type="text"
                  placeholder="Add a comment"
                  value={newComment}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  onKeyDown={(e) => handleKeyDownEnterOnly(e, handleComment)}
                  onChange={(e) => changeComment(e.target.value)}
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleComment();
                  }}
                >
                  <SendSvg />
                </button>
              </div>
            </div>
          </div>
        </div>
        {comments.length > 0 && (
          <div style={{ position: "relative" }}>
            <div className="ui-post-comments-list">
              <CommentList
                comments={comments}
                showMoreToggle={showMoreToggle}
                commentsLimit={commentsLimit}
                showMoreText={showMoreText}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Post.propTypes = {
  classNames: PropTypes.string,
  id: PropTypes.string,
  avatarUrl: PropTypes.string,
  defaultAvatarColor: PropTypes.string,
  author: PropTypes.string.isRequired,
  timeAgo: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  totalComments: PropTypes.string,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      defaultColor: PropTypes.string,
      authorName: PropTypes.string,
      commentText: PropTypes.string,
      commentImage: PropTypes.string,
    }),
  ),
  postOptions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    }),
  ),
  handleReplyLink: PropTypes.func,
  newComment: PropTypes.string,
  newCommentImage: PropTypes.string,
  changeComment: PropTypes.func,
  changeCommentImage: PropTypes.func,
  handleComment: PropTypes.func,
  displayActions: PropTypes.bool,
  showMoreToggle: PropTypes.bool,
  commentsLimit: PropTypes.number,
  showMoreText: PropTypes.string,
  instagramId: PropTypes.string,
  instagramLink: PropTypes.string,
  postBadges: PropTypes.arrayOf(PropTypes.string),
  onProfileClick: PropTypes.func,
  onSendClick: PropTypes.func,
};

export default Post;
