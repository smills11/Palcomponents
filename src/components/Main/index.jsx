import React from "react";

import clsx from "clsx";
import PropTypes from "prop-types";

import UseBrowser from "../../utils/useBrowser";

import "./Main.styled.scss";

const Main = ({ children, classNames }) => {
  const wrapClassNames = clsx("ui-main", classNames);

  const { pageHeight } = UseBrowser();
  return (
    <main className={wrapClassNames} style={{ height: pageHeight }}>
      {children}
    </main>
  );
};

Main.defaultProps = {
  children: null,
  classNames: "",
};

Main.propTypes = {
  children: PropTypes.node,
  classNames: PropTypes.string,
};

export default Main;
