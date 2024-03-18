import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/stacklogo.png";
import search from "../assets/search-solid.svg";
import Button from "../components/Button/Button";
import Avatar from "../components/Avatar/Avatar";
import "./Navbar.css";

const Navbar = () => {
  // Assuming User is a state variable that determines the authentication status
  var User = null;

  return (
    <nav>
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          <img
            src={logo}
            style={{ width: "170px", height: "auto" }}
            alt="logo"
          />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For Template
        </Link>
        <form>
          <input type="text" placeholder="Search..." />
          <img src={search} width="18" alt="search" className="search-icon" />
        </form>
        {User == null ? (
          <Link to="/Auth" className="nav-item nav-links">
            Log in
          </Link>
        ) : (
          <>
            {/* <Avatar backgroundColor='#009dff' px ="10px" py="7px" borderRadius='50%' color='green'><Link to='/User' style={{color:"black", textDecoration:"none",padding:'20px'}}>H</Link></Avatar> */}

            <div
              style={{
                backgroundColor: "green",
                borderRadius: "50%",
                height: "40px",
                width: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 8px ",
              }}
            >
              <Link
                to="/User"
                style={{ color: "black", textDecoration: "none" }}
              >
                H
              </Link>
            </div>
            <button className="nav-item nav-links">Log Out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
