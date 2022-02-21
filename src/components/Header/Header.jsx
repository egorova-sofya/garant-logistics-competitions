import React from "react";
import { Link } from "react-router-dom";
import smallLogo from "../../assets/img/mini_logo.svg";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <img src={smallLogo} alt="Логотип компании Гарант Логистика" />
      </Link>
      <ul>
        <li>
          <Link to="/"></Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
