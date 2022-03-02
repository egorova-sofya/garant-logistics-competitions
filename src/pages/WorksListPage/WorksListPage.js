import React from "react";
import WorkPreview from "../../components/WorkPreview/WorkPreview";
import { withLayout } from "../../hoc/Layout/Layout";
import AddWorkBtn from "../../components/AddWorkBtn/AddWorkBtn";
import s from "./WorksListPage.module.css";

const WorksListPage = ({ title }) => {
  return (
    <>
      <h1 className={s.title}>{title}</h1>
      <div className={s.workPreviewWrapper}>
        <AddWorkBtn />
        <WorkPreview />
        <WorkPreview />
        <WorkPreview />
        <WorkPreview />
        <WorkPreview />
        <WorkPreview />
      </div>
    </>
  );
};

export default withLayout(WorksListPage);
