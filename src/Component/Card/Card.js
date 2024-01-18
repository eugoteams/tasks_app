/** @format */

import React, { Fragment, memo } from "react";
import style from "./Card.module.css";
import { Star } from "lucide-react";
import DotMenu from "../DotMenu/DotMenu";
import Select from "../Select/Select";
import Flex from "../UI/Flex";

const Card = ({
  id,
  title,
  dueDate,
  description,
  important,
  onActionSelect,
  onStatusSelect,
  status,
  layout,
}) => {
  const onDotMenuListener = (action) => {
    onActionSelect(action, id);
  };
  const onSelectListener = (action) => {
    onStatusSelect(action, id);
  };

  return (
    <Fragment>
      <div className={`${style[`card_${layout}`]} ${style[status]}`}>
        <Flex flexDirection={layout === "cols" ? "" : "reverse"}>
          <p className={`${style.title}`}>{title}</p>
          <Star
            size={18}
            fill={important ? "#ffd700" : "#fffffe"}
            color={important ? "#ffd700" : "black"}
            absoluteStrokeWidth={true}
          />
        </Flex>
        <Flex alignX={layout !== "cols" ? "center" : ""}>
          <p className={`${style.date}`}>due date : {dueDate}</p>
          {layout === "cols" ? <DotMenu onSelect={onDotMenuListener} /> : ""}
        </Flex>
        {layout === "cols" ? (
          <p className={`${style.card_body}`}>{description}</p>
        ) : (
          ""
        )}
        <Flex alignX={layout === "cols" ? "right" : ""}>
          <Select onSelect={onSelectListener} status={status} />
          {layout !== "cols" ? <DotMenu onSelect={onDotMenuListener} /> : ""}
        </Flex>
      </div>
    </Fragment>
  );
};

export default Card;
