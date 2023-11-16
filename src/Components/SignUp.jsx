import React, { useState, useEffect } from "react";
import "./SignUp.css";
import { Stack, Typography } from "@mui/material";
import Button from "./Form/Button";
import Input from "./Form/Input";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SignUpUser, resetAllAuthForms } from "../redux/User/user.action";

const SignUp = () => {
  const mapState = (state) => ({
    signUpSuccess: state.user.signUpSuccess,
    signUpError: state.user.signUpError,
    
  });

  const { signUpSuccess, signUpError } = useSelector(mapState);

  const navigate = useNavigate();

  // const initialState = {
  //   displayName: "",
  //   confirmPassword: "",

  // };

  // const [state, setState] = useState({ ...initialState });

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState([]);
  const reset = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    // setErrors([])
  };

  // console.log(signUpError);

  useEffect(() => {
    if (signUpSuccess) 
    navigate("/");

    dispatch(resetAllAuthForms());
  }, [signUpSuccess]);

  useEffect(() => {
    if (Array.isArray(signUpError) && signUpError.length > 0) {
      setErrors(signUpError);
      console.log(errors);
      reset();
    }
  }, [signUpError]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(SignUpUser({ displayName, email, password, confirmPassword }));

    console.log(password);
    console.log(confirmPassword);
  };

  const displayNameHandler = (e) => {
    setDisplayName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const setconfirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className="authWrapper">
      <Stack className="signIn wrap" gap="40px">
        <Typography variant="h3">Sign Up</Typography>

        {errors.length > 0 && (
          <ul>
            {errors.map((e, index) => (
              <li key={index}>{e}</li>
            ))}
          </ul>
        )}

        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="displayName"
            placeholder="Full Name"
            value={displayName}
            onChange={displayNameHandler}
          />

          <Input
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={emailHandler}
          />
          <Input
            type="password"
            name="password"
            placeholder="Enter Password (at least 6 characters)"
            value={password}
            onChange={passwordHandler}
          />
          <Input
            type="password"
            name="ConfirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={setconfirmPasswordHandler}
          />
          <Button type="submit">REGISTER</Button>
        </form>
      </Stack>
    </div>
  );
};

export default SignUp;
