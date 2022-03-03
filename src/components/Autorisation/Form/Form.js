import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import s from "./Form.module.css";

const Form = ({ title, handleClick, login }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  console.log(title);
  return (
    <>
      <div className={s.wrapper}>
        {login && (
          <p className={s.linkText}>
            Новый пользователь?{" "}
            <Link className={s.link} to="/registration">
              Создать учетную запись
            </Link>
          </p>
        )}
        <input
          className={s.input}
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className={s.input}
          placeholder="Пароль"
          type="password"
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <div className={s.buttonWrapper}>
          <Button
            className={s.button}
            onClick={() => {
              handleClick(email, pass);
            }}
          >
            {title}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Form;
