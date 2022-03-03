import React from "react";
import Dropzone from "../../components/Dropzone/Dropzone";
import { withLayout } from "../../hoc/Layout/Layout";
import s from "./AddWorkPage.module.css";

const AddWorkPage = () => {
  return (
    <>
      <div className={s.wrapper}>
        <Dropzone />
      </div>
    </>
  );
};

export default withLayout(AddWorkPage);
