import React from "react";
import { Link } from "react-router-dom";
import smallLogo from "../../assets/img/mini_logo.svg";
import ComeInButton from "../ComeInButton/ComeInButton";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.backround}>
      <Link to="/">
        <img
          src={smallLogo}
          alt="Логотип компании Гарант Логистика"
          className={s.logo}
        />
      </Link>
      <div className={s.headerWrapper}>
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
      </div>
      <div className={s.comeInButtonWrapper}>
        <ComeInButton theme="green" />
      </div>
    </div>
  );
};

export default Header;
