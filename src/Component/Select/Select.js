/** @format */

import React, { Fragment, memo, useState, useCallback, useEffect } from "react";
import style from "./Select.module.css";
import { ChevronDown } from "lucide-react";

const Select = ({ onSelect, status = "todo" }) => {
  const [dropDown, setDropDown] = useState(false);
  const [action, setAction] = useState(status);

  const onDotMenuClickedListener = useCallback(() => {
    console.log("Entered");
    setDropDown((prevState) => !prevState);
  }, []);

  const onDropDownItemSelectListener = useCallback((e) => {
    let valueSelected = e.target.getAttribute("name");
    console.log(valueSelected);
    setAction((prevState) => valueSelected);
    onDotMenuClickedListener();
  }, []);

  useEffect(() => {
    onSelect(action);
  }, [action]);

  return (
    <Fragment>
      <div className={`${style.container}`}>
        <div
          className={`${style.container_input_holder}`}
          onClick={onDotMenuClickedListener}
        >
          <p>{action}</p>
          <ChevronDown size={18} color="#212529" />
        </div>
        {dropDown && (
          <div className={`${style.drop_down}`}>
            <p onClick={onDropDownItemSelectListener} name={"todo"}>
              todo
            </p>
            <p onClick={onDropDownItemSelectListener} name={"inprogress"}>
              inprogress
            </p>
            <p onClick={onDropDownItemSelectListener} name={"done"}>
              done
            </p>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default memo(Select);
