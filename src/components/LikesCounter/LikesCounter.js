import React from "react";
import cn from "classnames";
import s from "./LikesCounter.module.css";

const LikesCounter = ({ active = false, amount = 0 }) => {
  return (
    <>
      <div
        className={cn(s.likeWrapper, {
          [s.active]: active,
        })}
      >
        <span className={s.amount}>{amount}</span>
      </div>
    </>
  );
};

export default LikesCounter;
