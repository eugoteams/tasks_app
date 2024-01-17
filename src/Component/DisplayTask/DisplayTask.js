/** @format */

import React, { Fragment, useContext } from "react";
import style from "./DisplayTask.module.css";
import Card from "../Card/Card";
import { AppContext } from "../../Store/AppContext";

const DisplayTask = (props) => {
  const { tasksObject, dispatch } = useContext(AppContext);
  let tasks = tasksObject["tasks"];
  let openPopUp = tasksObject["openPopUp"];
  let layout = tasksObject["layout"];

  const onActionSelectListener = (action, indexRecv) => {
    console.log("Action Payload reacv", action, indexRecv);
    switch (true) {
      case action === "delete":
        let filteredTask = tasks.filter((tasks, index) => index !== indexRecv);
        tasksObject["tasks"] = filteredTask;
        console.log(filteredTask);
        break;
      case action === "edit":
        tasksObject["openPopUp"] = !openPopUp;
        tasksObject["editTask"] = indexRecv;
        break;
      default:
        //no-opt
        break;
    }
    dispatch({ type: "ADD", payload: { ...tasksObject } });
  };

  const onStatusSelectListener = (action, indexRecv) => {
    tasks[indexRecv]["status"] = action;
    dispatch({ type: "ADD", payload: { ...tasksObject } });
    console.log("Status Select Listener", action, indexRecv);
  };

  return (
    <Fragment>
      <div className={`${style.grid} ${style[`${layout}`]}`}>
        {tasks.map((task, index) => {
          return (
            <Card
              key={`tasks_${index}`}
              id={index}
              title={task["task title"]}
              dueDate={task["due date"]}
              description={task["description"]}
              important={task["important"]}
              status={task["status"]}
              onActionSelect={onActionSelectListener}
              onStatusSelect={onStatusSelectListener}
              layout={layout}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default DisplayTask;
