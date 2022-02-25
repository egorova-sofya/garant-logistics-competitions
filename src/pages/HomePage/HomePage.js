import React from "react";
import s from "./HomePage.module.css";
import logo from "../../assets/img/logo.svg";
import ContestLinks from "../../components/ContestLinks/ContestLinks";
import ComeInButton from "../../components/ComeInButton/ComeInButton";
import Title from "../../components/Title/Title";

const HomePage = () => {
  return (
    <>
      <main>
        <div className={s.backroundImage}>
          <div className={s.comeInButtonWrapper}>
            <ComeInButton theme="white" />
          </div>

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
                link={"/congratulations"}
              />
              <ContestLinks
                title={"Лучший рисунок"}
                className={"bestPainting"}
                link={"/paintings"}
              />
              <ContestLinks
                title={"Очумелые ручки"}
                className={"bestHandmade"}
                link={"/handmade"}
              />
            </div>
          </div>
        </div>
        <Title>Лучшие моменты</Title>
      </main>
    </>
  );
};

export default HomePage;
