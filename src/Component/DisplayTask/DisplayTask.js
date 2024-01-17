/** @format */

import React, { Fragment, useContext } from "react";
import Lottie from "react-lottie";
import anim from "../../assets/lottie/anim.json";
import style from "./DisplayTask.module.css";
import Card from "../Card/Card";
import { AppContext } from "../../Store/AppContext";
import { PlusSquare, Plus } from "lucide-react";
import Chip from "../Chip/Chip";

const DisplayTask = (props) => {
  const { tasksObject, dispatch } = useContext(AppContext);
  let tasks = tasksObject["tasks"];
  let openPopUp = tasksObject["openPopUp"];
  let layout = tasksObject["layout"];
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: anim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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

  console.log(tasks.length);

  return (
    <Fragment>
      {tasks.length > 0 ? (
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
      ) : (
        <div className={`${style.message}`}>
          <div className={`${style.inner_message}`}>
            <Lottie options={defaultOptions} height={200} width={200} />
            <span
              style={{
                margin: "1rem auto",
              }}
            >
              Your have zero tasks
            </span>
            <Chip>
              <Plus size={18} absoluteStrokeWidth color="#fffffe" />
              <p>create Task</p>
            </Chip>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default DisplayTask;
