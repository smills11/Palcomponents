/* eslint-disable import/no-unresolved */
import React, { useState, useRef } from "react";

import clsx from "clsx";
import { X } from "lucide-react";
import PropTypes from "prop-types";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./ImageFileUpload.styled.scss";
import ChevronLeftIcon from "../../assets/svg/ChevronLeftIcon";
import ChevronRightIcon from "../../assets/svg/ChevronRightIcon";
import UseBrowser from "../../utils/useBrowser";

const ImageFileUpload = ({
  attachmentInputRef,
  webCamInputRef,
  images,
  setImages,
  maxImages = 10,
  enableWebcam = true,
  classNames = "",
  acceptedFileTypes = "image/*",
  maxFileSize = 5 * 1024 * 1024, // 5MB
  setRemovedImages,
}) => {
  const [error, setError] = useState("");
  const [isWebcamActive, setIsWebcamActive] = useState(false);
  const { isSmallScreen } = UseBrowser();

  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const swiperRef = useRef(null);

  // Handle file upload
  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files || []);

    // Validate file size and type
    const validFiles = files.filter((file) => {
      if (file.size > maxFileSize) {
        setError(
          `File ${file.name} is too large. Maximum size is ${maxFileSize / 1024 / 1024}MB`,
        );
        return false;
      }
      if (!file.type.startsWith("image/")) {
        setError(`File ${file.name} is not an image`);
        return false;
      }
      return true;
    });

    if (images.length + validFiles.length > maxImages) {
      setError(`Maximum ${maxImages} images allowed`);
      return;
    }

    const newImageFiles = validFiles.map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }));

    setImages((prev) => [...prev, ...newImageFiles]);
    setError("");
  };
  // Handle webcam
  const startWebcam = async () => {
    try {
      setIsWebcamActive(true);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsWebcamActive(true);
      }
    } catch (err) {
      setError(`Failed to access webcam ${err + error}`);
    }
  };

  const stopWebcam = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current?.srcObject;
      if (stream instanceof MediaStream) {
        stream.getTracks().forEach((track) => track.stop());
      }
      stream.getTracks().forEach((track) => track.stop());
      setIsWebcamActive(false);
    }
  };

  const captureImage = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      canvas.getContext("2d")?.drawImage(videoRef.current, 0, 0);

      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], "webcam-capture.jpg", {
            type: "image/jpeg",
          });
          const newImage = {
            url: URL.createObjectURL(blob),
            file,
          };
          setImages((prev) => [...prev, newImage]);
        }
      }, "image/jpeg");

      stopWebcam();
    }
  };

  // Swiper navigation
  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const wrappedClassNames = clsx("ui-image-file-upload-container", classNames);

  const handleDeleteImage = (index) => {
    const img = images[index].url;
    if (img.includes("https")) {
      setRemovedImages((prev) => [...prev, img]);
    }
    const currenImages = [...images];
    currenImages.splice(index, 1);
    setImages(currenImages);
  };
  return (
    <div className={wrappedClassNames}>
      <div className="controls-container">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImagesChange}
          accept={acceptedFileTypes}
          multiple
          style={{ display: "none" }}
        />

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          ref={attachmentInputRef}
          className="upload-button"
          style={{ display: "none" }}
        >
          Upload Images
        </button>

        {enableWebcam && !isWebcamActive && (
          <button
            type="button"
            onClick={startWebcam}
            className="webcam-button"
            ref={webCamInputRef}
            style={{ display: "none" }}
          >
            Open Camera
          </button>
        )}

        {isWebcamActive && (
          <div className="webcam-container">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="webcam-preview"
            >
              <track kind="captions" />
            </video>
            <div className="webcam-controls">
              <button onClick={captureImage}>Capture</button>
              <button onClick={stopWebcam}>Cancel</button>
            </div>
          </div>
        )}
      </div>

      {images.length > 0 && (
        <div className="ui-post-image-swiper">
          {images?.length > 2 && (
            <button
              className="ui-post-swiper-back-btn"
              onClick={goPrev}
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  goPrev();
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
              {images?.map((image, index) => (
                <SwiperSlide key={`${image + index}`}>
                  <div className="ui-uploaded-image-wrapper">
                    <img src={image.url} alt="Post" />
                    <button
                      type="button"
                      onClick={() => handleDeleteImage(index)}
                      className="ui-delete-image-button"
                    >
                      <X />
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>

          {images?.length > 2 && (
            <button
              type="button"
              className="ui-post-swiper-next-btn"
              onClick={goNext}
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  goNext();
                }
              }}
            >
              <ChevronLeftIcon />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

ImageFileUpload.propTypes = {
  webCamInputRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  attachmentInputRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      file: PropTypes.instanceOf(File),
    }),
  ),

  setImages: PropTypes.func,
  maxImages: PropTypes.number,
  enableWebcam: PropTypes.bool,
  classNames: PropTypes.string,
  acceptedFileTypes: PropTypes.string,
  maxFileSize: PropTypes.number,
  setRemovedImages: PropTypes.func,
};

export default ImageFileUpload;
