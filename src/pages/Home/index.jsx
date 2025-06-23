import React from "react";

import clsx from "clsx";
import PropTypes from "prop-types";

import DefaultProjectPalImg from "../../assets/images/PROJECTPAL_large.png";
import InstagramSvg from "../../assets/svg/Instagram";
import TiktokSvg from "../../assets/svg/Tiktok";
import "./Home.styled.scss";
import Button from "../../components/Button";
import PortalButton from "../../components/PortalButton";
import handleKeyDown from "../../utils/keyboardHandler";

const Home = ({
  classNames,
  onFindRoomMatesClick,
  onDiscoverChatClick,
  onAskQuestionClick,
  signupHandler,
  loginHandler,
  showAuthSection,
  logoImg,
  instaLink,
  tiktokLink,
}) => {
  const wrappedClassNames = clsx("ui-home", classNames);
  return (
    <div className={wrappedClassNames}>
      <div className="ui-home-title">
        <img src={logoImg || DefaultProjectPalImg} alt="PROJECTPAL" />
      </div>
      <div className="ui-home-sub-title">
        The go-to spot for women living in NYC
      </div>
      <PortalButton
        label="Find roommates"
        classNames="ui-portal-button-home"
        onClick={onFindRoomMatesClick}
      />
      <PortalButton
        label="Discover chats"
        classNames="ui-portal-button-home"
        onClick={onDiscoverChatClick}
      />
      <PortalButton
        label="Ask question"
        classNames="ui-portal-button-home"
        onClick={onAskQuestionClick}
      />
      {showAuthSection && (
        <div className="ui-home-auth-section">
          <Button onClick={signupHandler} rounded="sm">
            Sign up
          </Button>
          <div
            tabIndex="0"
            role="button"
            onKeyDown={(e) => handleKeyDown(e, loginHandler)}
            onClick={loginHandler}
            className="ui-home-login-section"
          >
            or <span>Log in</span>
          </div>
        </div>
      )}

      <div className="ui-home-social-icons">
        <a href={instaLink} target="_blank" rel="noreferrer">
          <InstagramSvg />
        </a>
        <a href={tiktokLink} target="_blank" rel="noreferrer">
          <TiktokSvg />
        </a>
      </div>
    </div>
  );
};

Home.defaultProps = {
  classNames: "",
  onFindRoomMatesClick: undefined,
  onDiscoverChatClick: undefined,
  onAskQuestionClick: undefined,
  signupHandler: undefined,
  loginHandler: undefined,
  showAuthSection: true,
  logoImg: "",
  instaLink: "",
  tiktokLink: "",
};

Home.propTypes = {
  classNames: PropTypes.string,
  onFindRoomMatesClick: PropTypes.func,
  onDiscoverChatClick: PropTypes.func,
  onAskQuestionClick: PropTypes.func,
  signupHandler: PropTypes.func,
  loginHandler: PropTypes.func,
  showAuthSection: PropTypes.bool,
  logoImg: PropTypes.string,
  instaLink: PropTypes.string,
  tiktokLink: PropTypes.string,
};

export default Home;
