import { Routes, Route,Navigate } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { auth, handleUserProfile} from './Firebase/utils'
import { useState , useEffect } from 'react';
import { onSnapshot } from 'firebase/firestore';


function App() {


  const initialState = {
    currentUser  : null
  }

  const [state, setState ] = useState(initialState)


  useEffect (() => {
    let authListener = null
    authListener = auth.onAuthStateChanged(async (userAuth) => {

      // if(!userAuth){
      //   setState(initialState)
      // }
      
      // setState({ currentUser : userAuth 
      // })

      if(userAuth) {
        const userRef = await handleUserProfile(userAuth)
        onSnapshot(userRef,snapshot => {
          setState({
            currentUser : {
              id : snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }

      setState({
        ...initialState
      })


    })

    return () => {
      authListener();
     };

  },[])

  const { currentUser } = state
console.log(currentUser);

  return (
    <div className="App">

   <Routes>
    <Route exact path='/' element={<Home currentUser = {currentUser} />} />
    <Route path='/about' element={<About currentUser = {currentUser}/>} />
    <Route path='/products' element={<Products />} />
    <Route path='/cart' element={<Cart currentUser = {currentUser}/>} />
    <Route path='/register' element={currentUser ? <Navigate to='/'  /> :  <Register currentUser = {currentUser}/>} />
    <Route path='/login' element={currentUser ?   <Navigate to="/" />  : <Login currentUser = {currentUser}/>} />

   </Routes>

      
        
    </div>
  );
}

export default App;
