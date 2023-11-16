import React,{useEffect} from "react";
import AuthWrapper from "./AuthWrapper";
import Input from "./Form/Input";
import Button from "./Form/Button";
import { useState } from "react";
import { auth } from "../Firebase/utils";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";

import { withRouter } from "./withRouter";
import { resetAllAuthForms, resetPassword } from "../redux/User/user.action";

const EmailPassword = () => {

  const mapState = (state) => ({
    resetPasswordSuccess : state.user.resetPasswordSuccess,
    resetPasswordError : state.user.resetPasswordError

  })

  const {resetPasswordError, resetPasswordSuccess} = useSelector(mapState)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState([]);

  useEffect(() => {
    
    if(resetPasswordSuccess)
    dispatch(resetAllAuthForms())
  // navigate('/login')
   

  console.log('heloooooooo');
  },[resetPasswordSuccess])

  useEffect(() => {
    if(Array.isArray(resetPasswordError) && resetPasswordError.length > 0){
      setErrors(resetPasswordError)
    }
    

  },[resetPasswordError])

  const emailHandler = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(resetPassword({email}))

    
  };

  return (
    <AuthWrapper>
      {/* {console.log(errors)} */}
      {/* {console.log(errors.length)} */}
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
