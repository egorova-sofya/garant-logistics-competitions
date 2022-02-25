import React from "react";
import cn from "classnames";
import s from "./ContestLinks.module.css";
import { Link } from "react-router-dom";

const ContestLinks = ({ title, className, link }) => {
  return (
    <Link className={s.link} to={link}>
      <div
        className={cn(s.linkWrapper, {
          [s.bestCongratulation]: className === "bestCongratulation",
          [s.bestPainting]: className === "bestPainting",
          [s.bestHandmade]: className === "bestHandmade",
        })}
      >
        <span className={s.linkText}>{title}</span>
      </div>
    </Link>
  );
};

export default ContestLinks;
