/** @format */

import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import style from "./Modal.module.css";

const Modal = ({ children, onClick }) => {
  return createPortal(
    <Fragment>
      <div className={`${style.container}`}>
        <div className={`${style.overlay}`} onClick={onClick}></div>
        <div className={`${style.content}`}>{children}</div>
      </div>
    </Fragment>,
    document.getElementById("modal")
  );
};

export default Modal;
