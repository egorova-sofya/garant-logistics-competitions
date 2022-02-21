import React from "react";
import s from "./AddWorkBtn.module.css";

const AddWorkBtn = () => {
  return (
    <>
      <button className={s.button} type="button">
        <span className={s.plus}>+</span>
      </button>
    </>
  );
};

export default AddWorkBtn;
