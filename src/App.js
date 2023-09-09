import { Routes, Route,Navigate } from 'react-router-dom';
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
import {  useSelector,useDispatch } from 'react-redux/es/hooks/useSelector';


function App(props) {



  // const [state, setState ] = useState(initialState)


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
          props.setCurrentUser({
          
              id : snapshot.id,
              ...snapshot.data()
            
          })
        })
      }

     props.setCurrentUser(userAuth)

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
    <Route path='/about' element={<About />} />
    <Route path='/products' element={<Products />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/register' element={currentUser ? <Navigate to='/'  /> :  <Register />} />
    <Route path='/login' element={currentUser ?   <Navigate to="/" />  : <Login />} />
    <Route path='/recovery' element= {<Recovery/>}/>
   </Routes>

      
        
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser : state.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))

})


export default connect(mapStateToProps, mapDispatchToProps)(App);
