/** @format */

import React, { Fragment, useEffect, useState, memo, useContext } from "react";
import style from "./AddForm.module.css";
import InputField from "../InputField/InputField";
import Modal from "../Modal/Modal";
import { AppContext } from "../../Store/AppContext";
import Flex from "../UI/Flex";
import { X } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

const AddForm = (props) => {
  const { tasksObject, dispatch } = useContext(AppContext);
  let tasks = tasksObject["tasks"];
  let openPopUp = tasksObject["openPopUp"];
  let editTask = tasksObject["editTask"];

  const [task, setTask] = useState(
    editTask !== null
      ? tasks[editTask]
      : {
          id: uuidv4(),
          "task title": "",
          "due date": "",
          description: "",
          important: false,
          status: "todo",
        }
  );

  const onClickOutside = () => {
    tasksObject["openPopUp"] = !openPopUp;
    tasksObject["editTask"] = null;
    dispatch({ type: "ADD", payload: { ...tasksObject } });
  };

  const onChangeListener = (e) => {
    let type = e.target.type;
    let name = e.target.name;
    let value = type === "checkbox" ? e.target.checked : e.target.value;
    task[name] = value;
    setTask((prevSate) => {
      return { ...task };
    });
  };

  const onSubmitListener = (e) => {
    e.preventDefault();
    tasksObject["openPopUp"] = !openPopUp;
    console.log(editTask);
    if (editTask !== null) {
      console.log("Edit ---> herere");
      tasksObject["tasks"][editTask] = { ...task };
      tasksObject["editTask"] = null;
    } else {
      console.log("Add new Task ---> herere");
      tasksObject["tasks"] = [{ ...task }, ...tasks];
    }

    dispatch({ type: "ADD", payload: { ...tasksObject } });
    for (let key in task) {
      task[key] = "";
    }
    setTask((prevSate) => {
      return {
        ...task,
      };
    });
  };
  let label = `${editTask !== null ? "update" : "create"} `;

  return (
    <Fragment>
      <Modal onClick={onClickOutside}>
        <form className={`${style.container}`} onSubmit={onSubmitListener}>
          <div className={`${style.formHeader}`}>
            <Flex>
              <span className={`${style.formTitle}`}>{label} task </span>
              <X
                size={18}
                color="#343a40"
                absoluteStrokeWidth
                onClick={onClickOutside}
              />
            </Flex>
          </div>
          <InputField
            label={"task title"}
            type={"text"}
            placeholder={"enter task name"}
            value={task["task title"]}
            onChange={onChangeListener}
          />
          <InputField
            label={"due date"}
            type={"date"}
            value={task["due date"]}
            placeholder={"enter task name"}
            onChange={onChangeListener}
          />
          <InputField
            label={"description"}
            type={"textarea"}
            value={task["description"]}
            placeholder={"enter small description of task ...!"}
            onChange={onChangeListener}
          />
          <InputField
            label={"important"}
            type={"checkbox"}
            checked={task["important"]}
            placeholder={"enter task name"}
            onChange={onChangeListener}
          />
          <button className={`${style.button}`}>{label}</button>
        </form>
      </Modal>
    </Fragment>
  );
};

export default memo(AddForm);
