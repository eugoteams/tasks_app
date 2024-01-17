/** @format */

import React, { Fragment } from "react";
import Flex from "../UI/Flex";
import Chip from "../Chip/Chip";
import style from "./Header.module.css";
import { Plus, LayoutGrid, LayoutList } from "lucide-react";
import { useContext } from "react";
import { AppContext } from "../../Store/AppContext";

const Header = (props) => {
  const { tasksObject, dispatch } = useContext(AppContext);

  const onLayoutSelectLisener = (layoutType) => {
    tasksObject["layout"] = layoutType;
    dispatch({ type: "ADD", payload: { ...tasksObject } });
    console.log(layoutType);
  };

  console.log("Header Componenet", tasksObject);
  return (
    <Fragment>
      <Flex>
        <Chip>
          <Plus size={18} absoluteStrokeWidth color="#fffffe" />
          <span>Add a Task</span>
        </Chip>
        <div className={`${style.layout}`}>
          <Flex>
            <LayoutGrid
              size={18}
              absoluteStrokeWidth
              onClick={(e) => onLayoutSelectLisener("cols")}
            />
            <LayoutList
              size={18}
              absoluteStrokeWidth
              onClick={(e) => onLayoutSelectLisener("rows")}
            />
          </Flex>
        </div>
      </Flex>
    </Fragment>
  );
};

export default Header;
