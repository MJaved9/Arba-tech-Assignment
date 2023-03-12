import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Cart from '../Components/Cart'
import CodeChallenge from '../Components/CodeChallenge'
import HomePage from '../Components/HomePage'
import Login from '../Components/Login'
import Products from '../Components/Products'
import Profile from '../Components/Profile'
import SignUp from '../Components/SignUp'
// Here is All Routes for Navigate..
const AllRoutes = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/challenge' element={<CodeChallenge/>}/>
    <Route path='/all_products' element={<Products/>}/>
   </Routes>
    </>
  )
}

export default AllRoutes