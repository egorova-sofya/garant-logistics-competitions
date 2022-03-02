import React from "react";
import { Link } from "react-router-dom";
import s from "./AddWorkBtn.module.css";

const AddWorkBtn = () => {
  return (
    <>
      <Link to="/addWork" className={s.button}>
        <span className={s.plus}>+</span>
      </Link>
    </>
  );
};

export default AddWorkBtn;
