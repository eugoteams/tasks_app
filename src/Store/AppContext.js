/** @format */

import React, { Fragment, createContext, useEffect, useReducer } from "react";
import useStorage from "../hooks/useStorage";

export const AppContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      state = action.payload;
      return state;
    case "SEARCH":
      return state;
    default:
      //no-opt
      break;
  }
};

const ContextProvider = ({ children }) => {
  const { saveTasks, getTasks } = useStorage();
  const [tasksObject, dispatch] = useReducer(
    reducer,
    getTasks() === "empty"
      ? {
          tasks: [],
          openPopUp: false,
          editTask: null,
          layout: "cols",
          searchText: "",
        }
      : getTasks()
  );

  useEffect(() => {
    saveTasks(tasksObject);
  }, [tasksObject]);

  return (
    <Fragment>
      <AppContext.Provider value={{ tasksObject, dispatch }}>
        {children}
      </AppContext.Provider>
    </Fragment>
  );
};

export default ContextProvider;
