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
  let cart=JSON.parse(localStorage.getItem("cart"))
let profile=JSON.parse(localStorage.getItem("Token"))
  return (
    <div className="header">
      <h2 className="logo"><Link to="/">My Store</Link></h2>
      <input type="checkbox" id="chk" />
      <label htmlFor="chk" className="show-menu-btn">
      <AiOutlineMenu/>
      </label>

      <ul className="menu">
      {profile?<Dropdown/>:<Link to="/login">Login</Link>}
        <Link to="/cart" style={{display:"flex"}}><AiOutlineShoppingCart size={"35px"}/>{cart.length}</Link>
        <label htmlFor="chk" className="hide-menu-btn">
         <AiOutlineMenu/>
        </label>
      </ul>
    </div>
  );
}

export default Navbar