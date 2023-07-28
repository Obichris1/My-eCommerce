import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Register from './Pages/Register';


function App() {
  return (
    <div className="App">

   <Routes>
    <Route exact path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/products' element={<Products />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/signup' element={<Register/>} />
    <Route path='/login' element={<Login />} />

   </Routes>

      
        
    </div>
  );
}

export default App;
