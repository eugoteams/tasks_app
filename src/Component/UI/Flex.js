/** @format */

import React, { Fragment } from "react";
import style from "./Flex.module.css";

const Flex = ({
  children,
  alignX = "space-between",
  flexDirection = "default",
}) => {
  return (
    <Fragment>
      <div
        className={`${style.container} ${style[`${alignX}`]} ${
          style[`${`direction_${flexDirection}`}`]
        }`}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default Flex;
