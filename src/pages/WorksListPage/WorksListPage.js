import React from "react";
import WorkPreview from "../../components/WorkPreview/WorkPreview";
import { withLayout } from "../../hoc/Layout/Layout";
import s from "./WorksListPage.module.css";

const WorksListPage = ({ title }) => {
  return (
    <>
      <h1 className={s.title}>{title}</h1>
      <dix className={s.workPreviewWrapper}>
        <WorkPreview />
        <WorkPreview />
        <WorkPreview />
        <WorkPreview />
        <WorkPreview />
        <WorkPreview />
      </dix>
    </>
  );
};

export default withLayout(WorksListPage);
