import React, { useState } from "react";
import {Link} from 'react-router-dom'
import { Stack, Typography } from "@mui/material";
import "./SignIn.css";
import { signInWithGoogle, auth, handleUserProfile } from "../Firebase/utils";
import Button from "./Form/Button";
import Input from "./Form/Input";
import AuthWrapper from "./AuthWrapper";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const emailHandler = (e) => {
   
    setEmail(
      e.target.value
    );
   };

   const passwordHandler = (e) => {
   
    setPassword(
      e.target.value
    );
   };


  const handleSubmit = async (e) => {
    e.preventDefault();

    
    console.log(email );
    try {


      await signInWithEmailAndPassword(auth, email, password)

     setEmail('');
     setPassword('')
     
      
    } catch (error) {
      console.log(error);
    }

   
  };

  

  return (
    <AuthWrapper>
      <Stack gap="40px">
      <Typography variant="h3">Login</Typography>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="email"
          onChange={emailHandler}
          name="email"
          value={email}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={passwordHandler}
          name="password"
          value={password}
        />
        <Button type="submit">Login</Button>

        <Button onClick={signInWithGoogle}>SignIn with Google</Button>
      </form>

      <Link to='/recovery'>Forgot Password? Reset your password</Link>
    </Stack>
    </AuthWrapper>
    
  );
};

export default SignIn;
