import React from "react";
import SignUp from "../../components/Autorisation/SignUp/SignUp";
import { withLayout } from "../../hoc/Layout/Layout";

const RegisterPage = () => {
  return (
    <div>
      <SignUp title={"Зарегистрироваться"} />
    </div>
  );
};

export default withLayout(RegisterPage);
