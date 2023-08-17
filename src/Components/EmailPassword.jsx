import React from "react";
import AuthWrapper from "./AuthWrapper";
import Input from "./Form/Input";
import Button from "./Form/Button";
import { useState } from "react";

const EmailPassword = () => {
  const [email, setEmail] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <AuthWrapper>
      <form onSubmit={submitHandler}>
        <Input
          type="email"
          placeholder="email"
          onChange={emailHandler}
          name="email"
          value={email}
        />
        <Button type="submit">Email Password</Button>
      </form>
    </AuthWrapper>
  );
};

export default EmailPassword;
