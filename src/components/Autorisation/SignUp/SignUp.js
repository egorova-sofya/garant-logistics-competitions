import React from "react";
import Form from "../Form/Form";

const SignUp = ({ title, login }) => {
  return (
    <div>
      <div>
        <Form
          title={title}
          login={login}

          // handleClick={handlLogin}
        />
      </div>
    </div>
  );
};

export default SignUp;
