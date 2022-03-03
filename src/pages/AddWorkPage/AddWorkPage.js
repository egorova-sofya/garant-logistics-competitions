import React from "react";
import Button from "../../components/Button/Button";
import Dropzone from "../../components/Dropzone/Dropzone";
import Title from "../../components/Title/Title";
import { withLayout } from "../../hoc/Layout/Layout";
import s from "./AddWorkPage.module.css";

const AddWorkPage = () => {
  return (
    <>
      <div className={s.wrapper}>
        <Title size={"m"}>Добавить работу</Title>
        <form>
          <label className={s.label} for="description">
            Описание работы
          </label>
          <textarea
            id="description"
            className={s.workDescription}
            rows="5"
            cols="33"
          />
          <Dropzone />
          <Button>Сохранить</Button>
        </form>
      </div>
    </>
  );
};

export default withLayout(AddWorkPage);
