/** @format */

import React, { Fragment, useContext } from "react";
import style from "./Chip.module.css";
import Flex from "../UI/Flex";
import { AppContext } from "../../Store/AppContext";

const Chip = ({ children, onClick }) => {
  const { tasksObject, dispatch } = useContext(AppContext);
  const isOpen = tasksObject["openPopUp"];
  const onClickListener = () => {
    console.log(isOpen);
    tasksObject["openPopUp"] = !isOpen;
    dispatch({ type: "ADD", payload: { ...tasksObject } });
  };
  return (
    <Fragment>
      <div className={`${style.container}`} onClick={onClickListener}>
        <Flex>{children}</Flex>
      </div>
    </Fragment>
  );
};

export default Chip;
