import { useState } from "react";
import Button from "../../Button/Button";
import s from "./Form.module.css";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  console.log(title);
  return (
    <>
      <div className={s.wrapper}>
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
