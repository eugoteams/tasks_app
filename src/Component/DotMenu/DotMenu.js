/** @format */

import React, { Fragment, memo, useCallback, useState } from "react";
import style from "./DotMenu.module.css";
import { MoreHorizontal } from "lucide-react";

const DotMenu = ({ onSelect }) => {
  const [dropDown, setDropDown] = useState(false);

  const onDotMenuClickedListener = useCallback(() => {
    setDropDown((prevState) => !prevState);
  }, []);

  const onActionSelect = (e) => {
    let action = e.target.getAttribute("name");
    onDotMenuClickedListener();
    onSelect(action);
  };
  return (
    <Fragment>
      <div className={`${style.container}`}>
        <MoreHorizontal
          size={18}
          color={"#212529"}
          onClick={onDotMenuClickedListener}
        />
        {dropDown && (
          <div className={`${style.drop_down}`}>
            <p onClick={onActionSelect} name="edit">
              edit
            </p>
            <p onClick={onActionSelect} name="delete">
              delete
            </p>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default memo(DotMenu);
