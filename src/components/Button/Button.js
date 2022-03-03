import React from "react";
import cn from "classnames";
import s from "./Button.module.css";

const Button = ({
  children,
  appearence = "primary",
  className,
  disabled = false,
  ...props
}) => {
  return (
    <>
      <button
        disabled={disabled}
        className={cn(s.button, className, {
          [s.primary]: appearence === "primary",
          [s.second]: appearence === "second",
        })}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
