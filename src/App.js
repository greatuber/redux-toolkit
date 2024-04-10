
import './App.css';
// import './index.css';
import {  Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from "./redux-toolkit/store"
import Home from './pages/Home'
import Cart from './pages/Cart'
// import Navbar from './components/Navbar';
import SelectCart from './components/SelectCart';
import Signin from './components/SigninPage';
import SignUp  from './components/SignUp.jsx'

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux'

function App() {

  return (
    <div className="App">

      <Provider store={store}>

        {/* <BrowserRouter> */}
        
          <Routes>
            
            <Route path='/' element={<Home />} forceRefresh={true}> </Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/selectCart' element={<SelectCart />}></Route>
            <Route path="/signin" element={<Signin/>} ></Route>
            <Route path="/signup" element={<SignUp/>} ></Route>

          </Routes>

        {/* </BrowserRouter> */}
      </Provider>

    </div>
  );
}

export default App;
