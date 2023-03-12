import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./dropdown.css";
const Dropdown = () => {
  // Hooks and function for Dropdown 
    const [dropdownState, setDropdownState] = useState(false);
    const [dropdownValue, setDropdownValue] = useState("");
    const handleDropdownClick = () => {
      setDropdownState(!dropdownState);
    };
    // Logout Login if user Want to logout..
  const Logout=()=>{
    alert("Logout")
    localStorage.removeItem("Token")
    window.location.reload()
  }
  return (
    <div className="container">
    <div className={`dropdown`}>
      <button onClick={handleDropdownClick} className="dropdown-btn">
        {dropdownValue === "" ? <img src="https://source.unsplash.com/random/200x200?sig=1" style={{border:"1px solid black",borderRadius:"50%"}} width="20%"/> : dropdownValue}
      </button>
      <div
        className={`dropdown-items ${
          dropdownState ? "isVisible" : "isHidden"
        }`}
      >
        <div className="dropdown-item">
          <div
            className="dropdown__link"
           onClick={Logout}
          >
            <Link>Logout</Link>
          </div>
        </div>
        <div className="dropdown-item">
          <div
            className="dropdown__link"
            
          >
            <Link to="/profile">Profile</Link>
          </div>
        </div>
        <div className="dropdown-item">
          <div
            className="dropdown__link"
            
          >
            <Link to="/challenge">Code Challenge</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dropdown