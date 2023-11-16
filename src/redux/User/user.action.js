import userTypes from "./user.types";
import { auth,handleUserProfile} from "../../Firebase/utils";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail } from "firebase/auth";
export const setCurrentUser = (user) => {
  return { 
    type: userTypes.SET_CURRENT_USER, 
    payload: user 
};
};
 export const resetAllAuthForms = () => (
  {
  type: userTypes.RESET_AUTH_FORMS 
  }
 )
export const signInUser = ({email,password}) => async (dispatch) =>{

  try {


    await signInWithEmailAndPassword(auth, email, password)
        dispatch({
          type : userTypes.SIGN_IN_SUCCESS,
          payload : true
        })
        return
 
    
  } catch (error) {
    const err = [`${error.code}`]
    console.log(error.message);
    console.log(error.code)
    dispatch({
      type : userTypes.SIGN_IN_ERROR,
      payload : err

    })
   
  }

}


export const SignUpUser = ({displayName,email,password,confirmPassword}) => async dispatch =>{

     if (password !== confirmPassword) {
      const err = ["password does not match"];
      dispatch({
        type : userTypes.SIGN_UP_ERROR,
        payload : err
      })
      return
    }

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      await handleUserProfile(user, { displayName });
      dispatch({
        type : userTypes.SIGN_UP_SUCCESS,
        payload : true
      })
      return
      // reset()
    } catch (error) {
      console.log(error);
      const err = [`${error.code}`]
    console.log(error.message);
    console.log(error.code)
      dispatch({
        type : userTypes.SIGN_UP_ERROR,
        payload : err
      })
      return
      
    }


}


export const resetPassword = ({auth, email, config}) => async dispatch => {
  const config = {
    url: "http://localhost:3000/login",
  };

  try {
    
    await sendPasswordResetEmail(auth, email, config)
      .then(() => {
        console.log('Reset email sent');
        

        dispatch({
          type : userTypes.RESET_PASSWORD_SUCCESS,
          payload : true
        })
        return
        
      })

      .catch((error) => {
        
        console.log(error);
        const err = [`${error.code}`]
    console.log(error.message);
    console.log(error.code)
        dispatch({
          type : userTypes.RESET_PASSWORD_ERROR,
          payload : err
        })
   
      });
  } catch (error) {
    console.log(error);
  }
}

    

