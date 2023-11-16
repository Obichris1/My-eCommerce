import { Routes, Route,useNavigate,redirect } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Recovery from './Pages/Recovery';
import Register from './Pages/Register';
import { auth, handleUserProfile} from './Firebase/utils'
import { useState , useEffect } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { setCurrentUser } from './redux/User/user.action';
import { connect } from 'react-redux';
import {  useSelector,useDispatch } from 'react-redux'


function App(props) {
  // const mapState = (state) => ({
  //   currentUser : state.user.currentUser
  // })
  const navigate = useNavigate()


 const dispatch = useDispatch()
//  const setCurrentUser  = useSelector(mapState)


  useEffect (() => {
    let authListener = null
    authListener = onAuthStateChanged(auth, async (userAuth) => {

      // if(!userAuth){
      //   setState(initialState)
      // }
      
      // setState({ currentUser : userAuth 
      // })
      
         console.log(userAuth);
      if(userAuth) {
        const userRef = await handleUserProfile(userAuth)
        onSnapshot(userRef,snapshot => {
          dispatch(setCurrentUser({
          
              id : snapshot.id,
              ...snapshot.data()
            
          }))
        })
      }

     dispatch(setCurrentUser(userAuth))


    })

    return () => {
      authListener();
     };

  },[])

const {currentUser} = props 
console.log(currentUser); 
  return (
    <div className="App">

   <Routes>
    <Route exact path='/' element={<Home />} />
    <Route path='/' element={<About />} />
    <Route path='/' element={<Products />} />
    <Route path='/' element={<Cart />} />
    <Route path='/register' element={currentUser ? redirect('/')  :  <Register />} />
    <Route path='/login' element={currentUser ?   redirect('/')   : <Login />} />
    <Route path='/recovery' element= {<Recovery/>}/>
   </Routes>

      
        
    </div>
  );
}


// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser : user => dispatch(setCurrentUser(user))

// })


export default App;
