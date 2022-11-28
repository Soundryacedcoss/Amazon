import './App.css';
import React, { createContext, useState } from 'react'
import { Navbar } from './Navbar';
import { Route, Routes } from 'react-router-dom';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import { Cart } from './Cart';
export const DataContext=createContext()
function App() {
  const[cartArr,setCartArr]=useState([])
  return (
    <div className="App">
    <DataContext.Provider value={{cartArr,setCartArr}}>
    <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/Cart' element={<Cart/>}></Route>
    </Routes>
    </DataContext.Provider>
    {/* <Carousel/>
    <ProductView/>
    <Footer/> */}
    </div>
  );
}

export default App;
