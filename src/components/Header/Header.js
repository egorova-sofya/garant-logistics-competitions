import React, { useState } from "react";
import { Link } from "react-router-dom";
import smallLogo from "../../assets/img/mini_logo.svg";
import ComeInButton from "../ComeInButton/ComeInButton";
import s from "./Header.module.css";
import cn from "classnames";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={s.backround}>
      <Link to="/">
        <img
          src={smallLogo}
          alt="Логотип компании Гарант Логистика"
          className={s.logo}
        />
      </Link>
      <button
        className={s.crossButton}
        onClick={() => setOpen(!open)}
        type="button"
      ></button>
      <div
        // className={s.headerWrapper}
        className={cn(s.headerWrapper, s.mobileMenu)}
      >
        <nav>
          <ul className={s.linksList}>
            <li className={s.linkItem}>
              <Link to="/congratulations">Лучшее поздравление</Link>
            </li>
            <li className={s.linkItem}>
              <Link to="/paintings">Лучший рисунок</Link>
            </li>
            <li className={s.linkItem}>
              <Link to="/handmade">Очумелые ручки</Link>
            </li>
          </ul>
        </nav>
        <div className={s.comeInButtonWrapper}>
          <ComeInButton theme="green" />
        </div>
      </div>
    </div>
  );
};

export default Header;
