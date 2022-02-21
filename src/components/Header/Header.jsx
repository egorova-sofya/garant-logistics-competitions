import React from "react";
import { Link } from "react-router-dom";
import smallLogo from "../../assets/img/mini_logo.svg";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.backround}>
      <div className={s.headerWrapper}>
        <Link to="/">
          <img
            src={smallLogo}
            alt="Логотип компании Гарант Логистика"
            className={s.logo}
          />
        </Link>
        <ul className={s.linksList}>
          <li className={s.linkItem}>
            <Link to="/">Лучшее поздравление</Link>
          </li>
          <li className={s.linkItem}>
            <Link to="/">Лучший рисунок</Link>
          </li>
          <li className={s.linkItem}>
            <Link to="/">Очумелые ручки</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
