import React from "react";
import WorkPreview from "../../components/WorkPreview/WorkPreview";
import { withLayout } from "../../hoc/Layout/Layout";
import AddWorkBtn from "../../components/AddWorkBtn/AddWorkBtn";
import s from "./WorksListPage.module.css";
import Title from "../../components/Title/Title";

const WorksListPage = ({ title }) => {
  return (
    <>
      <Title size={"m"} className={s.title}>
        {title}
      </Title>
      <div className={s.addWorkWrapper}>
        <AddWorkBtn />
      </div>

      <div className={s.workPreviewWrapper}>
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
