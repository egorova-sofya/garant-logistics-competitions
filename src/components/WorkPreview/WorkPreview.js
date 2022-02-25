import React from "react";
import { Link } from "react-router-dom";
import testImg from "../../assets/img/testImg.jpg";
import LikesCounter from "../LikesCounter/LikesCounter";
import s from "./WorkPreview.module.css";

const WorkPreview = ({ img, title, link, active = false }) => {
  return (
    <>
      <Link className={s.link} to="#">
        <div className={s.imgWrapper}>
          <div className={s.imgHover}></div>
          <img className={s.img} src={testImg} />
        </div>
        <div className={s.likesCounterWrapper}>
          <LikesCounter active={active} />
        </div>
      </Link>
    </>
  );
};

export default WorkPreview;
