/** @format */

import React, {
  Fragment,
  useState,
  memo,
  useEffect,
  useRef,
  useContext,
} from "react";
import style from "./Search.module.css";
import { AppContext } from "../../Store/AppContext";

const Search = (props) => {
  const { tasksObject, dispatch } = useContext(AppContext);
  let tasks = tasksObject["tasks"];
  const [searchText, setSearchText] = useState("");
  let debouncingRef = useRef();

  const onInputChange = (e) => {
    setSearchText((prevState) => e.target.value);
  };

  //Debouncing Effect
  useEffect(() => {
    debouncingRef.current = setTimeout(() => {
      if (searchText !== "") {
        let filteredTask = tasks.filter(
          (task, index) => task["task title"] === searchText
        );
        console.log("Search", filteredTask);
        tasksObject["searchText"] = searchText;
        dispatch({ type: "ADD", payload: { ...tasksObject } });
      }
    }, 1000);

    return () => {
      clearTimeout(debouncingRef.current);
    };
  }, [searchText]);

  return (
    <Fragment>
      <div className={`${style.container}`}>
        <input
          placeholder="search by title"
          type="text"
          value={searchText}
          onChange={onInputChange}
        />
      </div>
    </Fragment>
  );
};

export default memo(Search);
