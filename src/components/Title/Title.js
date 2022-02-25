import React from "react";
import s from "./Title.module.css";
import cn from "classnames";

const Title = ({ children, size = "l" }) => {
  return (
    <h1
      className={cn(s.title, {
        [s.large]: size === "l",
        [s.medium]: size === "m",
        [s.small]: size === "s",
      })}
    >
      {children}
    </h1>
  );
};

export default Title;
