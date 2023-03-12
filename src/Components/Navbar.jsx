import React from 'react'
import "./navbar.css";
import { Link } from 'react-router-dom';
import { AiOutlineMenu,AiOutlineShoppingCart} from "react-icons/ai";
import {
  Box,
  SimpleGrid,
  Input
} from "@chakra-ui/react";
import Dropdown from './Dropdown';
const Navbar = () => {
  // Cart is for show Navbar current value in cart
  let cart=JSON.parse(localStorage.getItem("cart"))
let profile=JSON.parse(localStorage.getItem("Token"))
// Profile is for Token it's check user Login or not..
var val=0
if(cart){
  val=cart.length;
}
  return (
    <div className="header">
      <h2 className="logo"><Link to="/">My Store</Link></h2>
      <input type="checkbox" id="chk" />
      <label htmlFor="chk" className="show-menu-btn">
      <AiOutlineMenu/>
      </label>

      <ul className="menu">
        {/* Here is if user Login then show profile menu otherwise show Login Menu */}
      {profile?<Dropdown/>:<Link to="/login">Login</Link>}
        <Link to="/cart" style={{display:"flex"}}><AiOutlineShoppingCart size={"35px"}/>{val}</Link>
        <label htmlFor="chk" className="hide-menu-btn">
         <AiOutlineMenu/>
        </label>
      </ul>
    </div>
  );
}

export default Navbar