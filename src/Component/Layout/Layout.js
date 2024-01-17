/** @format */

import React, { Fragment } from "react";
import style from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <div className={`${style.container}`}>{children}</div>
    </Fragment>
  );
};

export default Layout;
