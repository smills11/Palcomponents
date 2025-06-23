import React from "react";

import clsx from "clsx";
import PropTypes from "prop-types";

import Main from "../Main";

import "./PageLayout.styled.scss";

const PageLayout = ({ classNames, SideBar, PageContent, footer }) => {
  const wrappedClassNames = clsx("ui-pageLayout", classNames);
  return (
    <Main classNames={wrappedClassNames}>
      <div className="ui-page-sidebar-cont">{SideBar}</div>
      <div className="ui-page-content-cont">
        {PageContent}
        {footer && <div className="ui-page-footer">{footer}</div>}
      </div>
    </Main>
  );
};

PageLayout.defaultProps = {
  classNames: "",
  SideBar: null,
  PageContent: null,
  footer: null,
};

PageLayout.propTypes = {
  classNames: PropTypes.string,
  SideBar: PropTypes.node,
  PageContent: PropTypes.node,
  footer: PropTypes.node,
};

export default PageLayout;
