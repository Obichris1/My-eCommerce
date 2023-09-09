import React from "react";
import AuthWrapper from "./AuthWrapper";
import Input from "./Form/Input";
import Button from "./Form/Button";
import { useState } from "react";
import { auth } from "../Firebase/utils";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { withRouter } from "./withRouter";

const EmailPassword = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState([]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        url: "http://localhost:3000/login",
      };
      await sendPasswordResetEmail(auth, email, config)
        .then(() => {
          console.log('helllooo');
          navigate('/login')
          
        })

        .catch(() => {
          console.log('hiiii');
          const err = ["Email not found"];
          setErrors(err);
          console.log(errors); 
          setEmail('')
        });
    } catch (error) {
      // console.log('hiiii');
      // console.log(error);
    }
  };

  return (
    <AuthWrapper>
      {console.log(errors)}
      {console.log(errors.length)}
      {errors.length > 0 && (
        <ul>
          {errors.map((e, index) => (
            <li key={index}>{e}</li>
          ))}
        </ul>
            
      ) }
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
