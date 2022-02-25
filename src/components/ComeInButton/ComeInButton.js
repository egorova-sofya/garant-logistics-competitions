import React from "react";
import s from "./ComeInButton.module.css";
import cn from "classnames";

const ComeInButton = ({ theme = "green" }) => {
  return (
    <>
      <button
        className={cn(s.button, {
          [s.greenBtn]: theme === "green",
          [s.whiteBtn]: theme === "white",
        })}
        type="button"
      >
        <svg
          className={s.svg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.82 40.82"
        >
          <defs></defs>
          <g id="Слой_2" data-name="Слой 2">
            <g id="bg">
              <path
                class="cls-1"
                d="M20.41,22.82a7.11,7.11,0,1,0-7.11-7.11A7.12,7.12,0,0,0,20.41,22.82Zm0-11.38a4.27,4.27,0,1,1-4.27,4.27A4.27,4.27,0,0,1,20.41,11.44Z"
              />
              <path
                class="cls-1"
                d="M40.82,20.41A20.41,20.41,0,1,0,8,36.54a1.51,1.51,0,0,0,.51.39,20.25,20.25,0,0,0,23.88,0,1.37,1.37,0,0,0,.51-.38A20.36,20.36,0,0,0,40.82,20.41Zm-38,0a17.57,17.57,0,1,1,30.35,12,7.11,7.11,0,0,0-7.09-6.76H14.72a7.11,7.11,0,0,0-7.09,6.76A17.49,17.49,0,0,1,2.84,20.41Zm7.61,14.45V32.77a4.27,4.27,0,0,1,4.27-4.26H26.1a4.26,4.26,0,0,1,4.26,4.26v2.09a17.49,17.49,0,0,1-19.91,0Z"
              />
            </g>
          </g>
        </svg>
        <span className={s.btnText}>Войти</span>
      </button>
    </>
  );
};

export default ComeInButton;
