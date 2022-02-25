import React from "react";
import s from "./HomePage.module.css";
import logo from "../../assets/img/logo.svg";
import ContestLinks from "../../components/ContestLinks/ContestLinks";

const HomePage = () => {
  return (
    <>
      <div className={s.backroundImage}>
        <div className={s.container}>
          <img
            className={s.logo}
            src={logo}
            alt="Логотип компании Гарант Логистика"
          />
          <p className={s.slogan}>Нам 10 лет!</p>
          <div className={s.contestLinksWrapper}>
            <ContestLinks
              title={"Лучшее поздравление"}
              className={"bestCongratulation"}
              link={"#"}
            />
            <ContestLinks
              title={"Лучший рисунок"}
              className={"bestPainting"}
              link={"#"}
            />
            <ContestLinks
              title={"Очумелые ручки"}
              className={"bestHandmade"}
              link={"#"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
