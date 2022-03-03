import React from "react";
import Form from "../Form/Form";

const Login = ({ title, login }) => {
  return (
    <div>
      <Form
        title={title}
        login={login}
        // handleClick={handlLogin}
      />
    </div>
  );
};

export default Login;
