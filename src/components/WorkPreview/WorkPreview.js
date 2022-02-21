import React from "react";
import { Link } from "react-router-dom";
import testImg from "../../assets/img/testImg.jpg";
import s from "./WorkPreview.module.css";

const WorkPreview = ({ img, title, link }) => {
  return (
    <>
      <Link to="#">
        <div className={s.imgWrapper}>
          <div className={s.imgHover}></div>
          <img className={s.img} src={testImg} />
        </div>
      </Link>
    </>
  );
};

export default WorkPreview;
