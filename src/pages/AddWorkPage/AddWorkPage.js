import React from "react";
import Dropzone from "../../components/Dropzone/Dropzone";
import { withLayout } from "../../hoc/Layout/Layout";

const AddWorkPage = () => {
  return (
    <>
      AddWorkPage
      <Dropzone />
    </>
  );
};

export default withLayout(AddWorkPage);
