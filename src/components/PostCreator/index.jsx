/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useRef, useEffect } from "react";

import clsx from "clsx";
import { Formik, Form, Field } from "formik";
import { PaperclipIcon, X } from "lucide-react";
import PropTypes from "prop-types";

import validationSchema from "./PostCreator.validation";
import ProjectPalLogo from "../../assets/images/PROJECTPAL.png";
import BackIcon from "../../assets/svg/Back";
import CameraIcon from "../../assets/svg/CameraIcon";
import "./PostCreator.styled.scss";
import InstagramSvg from "../../assets/svg/Instagram";
import handleKeyDown from "../../utils/keyboardHandler";
import ImageFileUpload from "../ImageFileUpload";

const checkInitialValidity = async (values) => {
  try {
    await validationSchema.validate(values, { abortEarly: false });
    return true;
  } catch (error) {
    return false;
  }
};

const PostCreator = ({
  username = "",
  housingOptions = [],
  locationOptions = [],
  classNames,
  avatarUrl = "",
  defaultAvatarColor,
  placeholder = "Type message...",
  submitText = "Submit",
  onSubmit,
  handleBack = undefined,
  handleClose = undefined,
  initialImages = [],
  initialFromValues = {},
}) => {
  const initialValues = {
    details: "",
    housing: "",
    location: [],
    instagramLink: "",
    ...initialFromValues,
  };

  const [removedImages, setRemovedImages] = useState([]);
  const [images, setImages] = useState(initialImages);
  const [isInitialValid, setIsInitialValid] = useState(true);
  const [showInstagramInput, setShowInstagramInput] = useState(false);
  const [instagramId, setInstagramId] = useState("");
  const attachmentInputRef = useRef(null);

  const handleSubmit = (values) => {
    const data = {
      ...values,
      images,
      removedImages,
      instagramId,
    };
    onSubmit(data);
  };

  const changeLocation = (newValue, actualValue, setFieldValue) => {
    let newLocationValue = [];
    if (actualValue.includes(newValue)) {
      if (newValue === "All") {
        newLocationValue = [];
      } else {
        const itemsToRemove = ["All", newValue];
        newLocationValue = [...actualValue].filter(
          (elem) => !itemsToRemove.includes(elem),
        );
      }
    } else if (newValue === "All") {
      newLocationValue = [newValue, ...locationOptions];
    } else {
      newLocationValue = [...actualValue, newValue];
      if (
        [...locationOptions].sort().join(",") ===
        newLocationValue.sort().join(",")
      ) {
        newLocationValue = ["All", ...newLocationValue];
      }
    }
    setFieldValue("location", newLocationValue);
  };

  const extractInstagramID = (url) => {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?instagram\.com\/([^/?#]+)/i,
    );
    if (match[1]) {
      setInstagramId(`@${match[1]}`);
      setShowInstagramInput(false);
    }
  };

  useEffect(() => {
    checkInitialValidity(initialValues).then(setIsInitialValid);
    if (initialValues.instagramLink)
      extractInstagramID(initialValues.instagramLink);
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange
      isInitialValid={isInitialValid}
      enableReinitialize
      onSubmit={handleSubmit}
    >
      {({ isValid, values, setFieldValue }) => (
        <Form className={clsx("ui-post-container", classNames)}>
          <div className="ui-post-logo">
            <img src={ProjectPalLogo} alt="Projectpal" />
          </div>
          <div className="ui-post-content">
            <div
              tabIndex={0}
              role="button"
              className="ui-post-back-btn"
              onClick={handleBack}
              onKeyDown={(e) => handleKeyDown(e, handleBack)}
            >
              <BackIcon />
            </div>
            <button className="ui-post-close-button" onClick={handleClose}>
              <X strokeWidth={0.5} />
            </button>
            <div className="ui-post-header">
              <div className="ui-post-user-info">
                <div
                  className="ui-post-avatar"
                  style={{ backgroundColor: defaultAvatarColor }}
                >
                  <img
                    src={avatarUrl}
                    alt=""
                    onError={(e) => (e.target.style.display = "none")}
                  />
                </div>
                <span className="ui-post-username">{username}</span>
              </div>

              <div className="ui-post-attachments">
                <button
                  type="button"
                  onClick={() => attachmentInputRef.current?.click()}
                  className="ui-post-attachment-button"
                  aria-label="Upload Image"
                >
                  <CameraIcon />
                </button>

                <button
                  type="button"
                  onClick={() => attachmentInputRef.current?.click()}
                  className="ui-post-attachment-button"
                  aria-label="Attach File"
                >
                  <PaperclipIcon
                    width={22}
                    height={22}
                    style={{ rotate: "-46deg" }}
                  />
                </button>
              </div>
            </div>

            <Field
              as="textarea"
              name="details"
              className="ui-post-textarea"
              placeholder={placeholder}
            />

            <ImageFileUpload
              attachmentInputRef={attachmentInputRef}
              webCamInputRef={null}
              images={images}
              setImages={setImages}
              setRemovedImages={setRemovedImages}
              maxImages={5}
              enableWebcam
              slidesPerView={2}
              maxFileSize={5 * 1024 * 1024}
            />

            <div className="ui-post-creator-actions">
              <div className="ui-post-filters">
                <div className="ui-post-instagram-link">
                  <div className="ui-post-instagram-link-text">
                    Link your Instagram!
                  </div>
                  <div className="ui-post-instagram-input-cont">
                    <span
                      style={{ display: showInstagramInput ? "none" : "block" }}
                      onClick={() => setShowInstagramInput(true)}
                    >
                      <InstagramSvg />
                    </span>
                    <div
                      className={clsx("ui-post-instagram-input", {
                        expanded: showInstagramInput,
                      })}
                    >
                      <span onClick={() => setShowInstagramInput(false)}>
                        <InstagramSvg width={20} height={20} />
                      </span>
                      <input
                        name="instagramLink"
                        placeholder="Enter your Instagram URL"
                        value={values.instagramLink}
                        onChange={({ target: { name, value } }) =>
                          setFieldValue(name, value)
                        }
                      />
                      <div
                        className="ui-post-instagram-action"
                        onClick={() => extractInstagramID(values.instagramLink)}
                      >
                        save
                      </div>
                    </div>
                    {!showInstagramInput && instagramId && (
                      <div className="ui-post-instagram-opener">
                        <a
                          href={values.instagramLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {instagramId}
                        </a>
                        <div
                          onClick={() => {
                            setFieldValue("instagramLink", "");
                            setInstagramId("");
                          }}
                          className="ui-post-instagram-id-cancel"
                        >
                          <X strokeWidth={2} color="black" width={12} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {housingOptions.length > 0 && (
                  <div className="ui-post-search-section">
                    <div className="ui-post-question">
                      What are you looking for?
                    </div>
                    <div className="ui-post-options">
                      {housingOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          className={clsx(
                            "ui-post-option",
                            values.housing === option && "selected",
                          )}
                          onClick={() => setFieldValue("housing", option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {locationOptions.length > 0 && (
                  <div className="ui-post-search-section">
                    <div className="ui-post-question">What location?</div>
                    <div className="ui-post-options">
                      {["All", ...locationOptions].map((option) => (
                        <button
                          key={option}
                          type="button"
                          className={clsx(
                            "ui-post-option",
                            values.location.includes(option) && "selected",
                          )}
                          onClick={() =>
                            changeLocation(
                              option,
                              values.location,
                              setFieldValue,
                            )
                          }
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="ui-post-submit-button"
                disabled={!isValid}
              >
                {submitText}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

PostCreator.propTypes = {
  username: PropTypes.string,
  housingOptions: PropTypes.arrayOf(PropTypes.string),
  locationOptions: PropTypes.arrayOf(PropTypes.string),
  classNames: PropTypes.string,
  avatarUrl: PropTypes.string,
  defaultAvatarColor: PropTypes.string,
  placeholder: PropTypes.string,
  submitText: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  handleBack: PropTypes.func,
  handleClose: PropTypes.func,
  initialImages: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
  initialFromValues: PropTypes.objectOf(PropTypes.string),
};

export default PostCreator;
