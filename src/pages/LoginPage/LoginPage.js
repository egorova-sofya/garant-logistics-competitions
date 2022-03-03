import React from "react";
import Login from "../../components/Autorisation/Login/Login";
import { withLayout } from "../../hoc/Layout/Layout";

const LoginPage = () => {
  return (
    <div>
      <Login title={"Войти"} />
    </div>
  );
};

export default withLayout(LoginPage);
