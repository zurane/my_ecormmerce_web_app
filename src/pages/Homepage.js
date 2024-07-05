import React from "react";
import { NavLink } from "react-router-dom";
// import LoggedInPage from "./LoggedInPage";

export default function Homepage() {
  return (
    <>
      <header>
        <div className="hero-content">
          <span className="big-text">80% OFF</span>
          <h1>To find your sole mate</h1>
          <NavLink to="products" className="link">
            SHOP NOW
          </NavLink>
        </div>
      </header>
    </>
  );
}
