/** @format */

import React, { Fragment, memo } from "react";
import style from "./InputField.module.css";

const InputField = ({
  label,
  type,
  placeholder,
  onChange,
  value,
  checked = false,
}) => {
  return (
    <Fragment>
      <div
        className={
          type === "checkbox"
            ? `${style.container_inline}`
            : `${style.container}`
        }
      >
        <label className={`${style.label}`}>{label}</label>
        {type !== "textarea" ? (
          <input
            type={type}
            placeholder={placeholder}
            className={`${style.input}`}
            value={value}
            name={label}
            checked={checked}
            onChange={onChange}
          />
        ) : (
          <textarea
            rows="4"
            cols="50"
            className={`${style.input}`}
            value={value}
            name={label}
            onChange={onChange}
            placeholder={placeholder}
          />
        )}
      </div>
    </Fragment>
  );
};

export default memo(InputField);
