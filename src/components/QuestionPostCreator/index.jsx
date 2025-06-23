import React, { useRef } from "react";

import clsx from "clsx";
import { Formik, Form, Field } from "formik";
import { X } from "lucide-react";
import PropTypes from "prop-types";

import "./QuestionPostCreator.styled.scss";
import CameraIcon from "../../assets/svg/CameraIcon";
import ImageFileUpload from "../ImageFileUpload";

const QuestionPostCreator = ({
  username = "John Doe",
  classNames,
  avatarUrl = "",
  defaultAvatarColor,
  onSubmit,
  onClose,
  maxLength = 200,
  title = "Post a question",
  placeholder = "Type message",
  showAnonymousToggle = true,
  showImageUpload = true,
  submitText = "Post",
  initialIsAnonymous = true,
}) => {
  const attachmentInputRef = useRef(null);

  const initialValues = {
    message: "",
    isAnonymous: initialIsAnonymous,
    images: [],
  };

  const handleSubmit = (values, { resetForm }) => {
    if (values.message.trim()) {
      onSubmit({
        message: values.message,
        isAnonymous: values.isAnonymous,
        images: values.images || [],
      });
      resetForm();
    }
  };

  const wrappedClassNames = clsx("ui-question-post-container", classNames);
  return (
    <div className={wrappedClassNames}>
      <div className="ui-question-post-header">
        <button className="ui-question-post-close-button" onClick={onClose}>
          <X strokeWidth={0.5} />
        </button>
        <h2 className="ui-question-post-title">{title}</h2>
      </div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, setFieldValue, isSubmitting }) => {
          const handleImageChange = (newImages) => {
            // If newImages is a function, execute it with current images
            if (typeof newImages === "function") {
              const currentImages = values.images || [];
              const updatedImages = newImages(currentImages);
              setFieldValue("images", updatedImages);
            } else {
              // If newImages is a direct value, set it
              setFieldValue("images", newImages);
            }
          };

          return (
            <Form>
              <div className="ui-question-post-user-info">
                <div
                  className="ui-question-avatar"
                  style={{ backgroundColor: defaultAvatarColor }}
                >
                  <img
                    src={avatarUrl}
                    alt={`${username}'s avatar`}
                    onError={(e) => (e.target.style.display = "none")}
                  />
                </div>
                <span className="ui-question-post-username">
                  {values.isAnonymous ? "Anonymous" : username}
                </span>
              </div>

              <Field
                as="textarea"
                name="message"
                className="ui-question-post-textarea"
                placeholder={placeholder}
                maxLength={maxLength}
              />

              <div className="ui-question-post-char-count">
                {values.message.length}/{maxLength}
              </div>

              <div className="ui-question-post-images-container">
                <ImageFileUpload
                  attachmentInputRef={attachmentInputRef}
                  webCamInputRef={null}
                  images={values.images || []}
                  setImages={handleImageChange}
                  maxImages={5}
                  enableWebcam
                  slidesPerView={2}
                  maxFileSize={5 * 1024 * 1024}
                />
              </div>

              <div className="ui-question-post-footer">
                {showImageUpload && (
                  <button
                    onClick={() => attachmentInputRef.current?.click()}
                    type="button"
                    className="ui-question-post-media-button"
                    aria-label="Upload Image"
                  >
                    <CameraIcon />
                  </button>
                )}

                <div className="ui-question-post-actions">
                  {showAnonymousToggle && (
                    <div className="ui-question-post-anonymous-toggle">
                      <span>Anonymous</span>
                      {/* disabling because we have custom switch button, not html default */}
                      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
                      <label
                        className="ui-question-post-switch"
                        aria-label="Anonymous Toggle"
                        htmlFor="anonymous-toggle"
                        onClick={(e) => {
                          e.preventDefault(); // Prevent default checkbox behavior
                          setFieldValue("isAnonymous", !values.isAnonymous); // Toggle the value
                        }}
                      >
                        <input
                          id="anonymous-toggle"
                          style={{ display: "none" }}
                        />
                        <Field
                          type="checkbox"
                          id="anonymous-toggle"
                          name="isAnonymous"
                          onChange={() => {}}
                        />
                        <span className="ui-question-post-slider" />
                      </label>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="ui-question-post-submit-button"
                    disabled={!values.message.trim() || isSubmitting}
                  >
                    {submitText}
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

QuestionPostCreator.propTypes = {
  classNames: PropTypes.string,
  username: PropTypes.string,
  avatarUrl: PropTypes.string,
  defaultAvatarColor: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  maxLength: PropTypes.number,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  showAnonymousToggle: PropTypes.bool,
  showImageUpload: PropTypes.bool,
  submitText: PropTypes.string,
  initialIsAnonymous: PropTypes.bool,
};

export default QuestionPostCreator;
