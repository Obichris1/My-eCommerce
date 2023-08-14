import React, { useState } from "react";
import "./SignUp.css";
import { Stack, Typography } from "@mui/material";
import Button from "./Form/Button";
import Input from "./Form/Input";
import { auth, handleUserProfile } from "../Firebase/utils";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const initialState = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: [],
  };

  const [state, setState] = useState({ ...initialState });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = state;

    if (password !== confirmPassword) {
      const err = ["password does not match"];

      setState({
        errors: err,
      });
      return;
    }

    try {
      const {user} = await createUserWithEmailAndPassword(auth,email,password)
      await handleUserProfile(user, { displayName })

      setState({...initialState})

    } catch (error) {
      console.log(error);
      
    }
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setState({ [name]: value });
    // console.log(state);
  };

  
  const { displayName, email, password, confirmPassword, errors } = state;

  return (
    <Stack className="signIn wrap" gap="40px">
      <Typography variant="h3">Sign Up</Typography>
{/* 
      {errors.length > 0 && (
        <ul>
          {errors.map((err, index) => {
            return <li key={index}>{err}</li>;
          })}
        </ul>
      )} */}

      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="displayName"
          placeholder="Full Name"
          value={displayName}
          onChange={handleChange}
        />

        <Input
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="ConfirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button type="submit">REGISTER</Button>
      </form>
    </Stack>
  );
};

export default SignUp;
