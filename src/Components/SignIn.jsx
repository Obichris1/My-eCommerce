import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetAllAuthForms, signInUser } from "../redux/User/user.action";
import {Link} from 'react-router-dom'
import { useNavigate,redirect } from "react-router-dom";
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
  const [errors, setErrors] = useState([]);

  const resetForm = () => {
    setEmail('')
    setPassword('')
  }
  

const navigate = useNavigate()
 

const mapState = (state) =>({

  signInSuccess : state.user.signInSuccess,
  signInError : state.user.signInError,
  currentUser : state.user.currentUser
})

const {signInSuccess, signInError,currentUser} = useSelector(mapState)

const dispatch = useDispatch()

useEffect(() => {
  if (currentUser) {
    resetForm();
    dispatch(resetAllAuthForms());
    navigate('/');
  }

}, [currentUser])

useEffect(() =>{

  if(Array.isArray(signInError) && signInError.length > 0){
    setErrors(signInError)
    resetForm()

  }
},[signInError])




 


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


  const handleSubmit =  (e) => {
    e.preventDefault();

    

     // resetForm()
    console.log(email );
     dispatch(signInUser({email,password}))


   
  };

  

  return (
    <AuthWrapper>
       
      <Stack gap="40px">
      <Typography variant="h3">Login</Typography>

      {errors.length > 0 && (
          <ul>
            {errors.map((e, index) => (
              <li key={index}>{e}</li>
            ))}
          </ul>
        )}

      <form onSubmit={handleSubmit} >
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
        <Stack gap='10px' >
        <Button type="submit">Login</Button>

        
        </Stack>
      </form>
      <Button onClick={signInWithGoogle}>SignIn with Google</Button>

      {/* <Link to='/recovery'>Forgot Password? Reset your password</Link> */}
    </Stack>
    </AuthWrapper>
    
  );
};

export default SignIn;
