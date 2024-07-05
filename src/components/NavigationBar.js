import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import brandLogo from "../assets/images/brand-logo.svg";
import Avatar from "@mui/joy/Avatar";

export default function NavigationBar() {
  // set up shopping items counter
  const shoppingItems = useSelector((state) => state.cart.counterPrice);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  // Active link styling
  const activeNavLink = {
    borderBottom: "1px solid #000000",
    paddingBottom: "18px",
  };












  return (
    <>
      {/* Top banner */}
      <div>
        <div className="bottom-banner">
          <div className="banner-content-wrapper">
            <div className="content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000"
              >
                <path d="M223.76-206Q182-206 153-235.17q-29-29.16-29-70.83H76v-382q0-26 17-43t43-17h520v140h84l144 194v108h-60q0 41.67-29.24 70.83-29.23 29.17-71 29.17Q682-206 653-235.17q-29-29.16-29-70.83H324q0 42-29.24 71-29.23 29-71 29Zm.24-28q30 0 51-21t21-51q0-30-21-51t-51-21q-30 0-51 21t-21 51q0 30 21 51t51 21ZM104-334h24q6-29 33.5-50.5T224-406q33 0 61.5 21t34.5 51h308v-386H136q-12 0-22 10t-10 22v354Zm620 100q30 0 51-21t21-51q0-30-21-51t-51-21q-30 0-51 21t-21 51q0 30 21 51t51 21Zm-68-180h194L724-580h-68v166ZM366-527Z" />
              </svg>
              <p>
                Free shipping on all orders
                <br />
                <span>Limited-time offer</span>
              </p>
            </div>
            <div className="content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000"
              >
                <path d="m400-540 80-40 80 40v-220H400v220ZM280-306v-28h200v28H280Zm-48 134q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm-32-588v560-560Zm32 560h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H588v266l-108-54-108 54v-266H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Z" />
              </svg>
              <p>
                Free returns
                <br />
                <span>Within 90 days</span>
              </p>
            </div>
            <div className="content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000"
              >
                <path d="M810-395 565-150q-9.14 9-20.57 13.5t-22.68 4.5q-11.25 0-22.5-4.5T479-150L150-478q-9-8-13.5-19.28Q132-508.56 132-521v-246q0-25.16 17.5-43.08Q167-828 193-828h246q12.07 0 23.39 4.87Q473.7-818.25 482-810l328 328q9.39 9.14 13.7 20.57Q828-450 828-438.38q0 11.62-4.3 22.85Q819.39-404.3 810-395ZM545-170l245-245q10-10 10-23.5T790-462L452-799H193q-14 0-23.5 9t-9.5 23v246q0 6 2 12t7 11l329 328q10 10 23.5 10t23.5-10ZM262.59-663q14.41 0 24.41-9.92 10-9.91 10-24.08 0-14.58-9.92-24.79Q277.17-732 263-732q-14.58 0-24.79 10.09Q228-711.82 228-697.41T238.09-673q10.09 10 24.5 10ZM482-478Z" />
              </svg>
              <p>
                Price adjustment
                <br />
                <span>Within 30 days</span>
              </p>
            </div>
          </div>
        </div>

        {/* End of banner */}

        {/* Navigation bar */}
        <nav className="navigation-bar">
          <div className="navigation-links">
            <div className="logo-container">
              <img src={brandLogo} alt="brand logo" width={100} />
            </div>
            <ul>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? activeNavLink : null)}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => (isActive ? activeNavLink : null)}
                  to="products"
                >
                  Products
                </NavLink>
              </li>
            </ul>
            <div className="actions-container">
              <div className="search-bar">
                <input type="search" placeholder="search for products" />
              </div>

              <div className="login-container">
                <NavLink
                  style={({ isActive }) => (isActive ? activeNavLink : null)}
                  to="sign-in"
                >
                  {isLoggedIn ? " " : "SIGN IN"}
                </NavLink>
              </div>
              <div className="support">
                <NavLink
                  style={({ isActive }) => (isActive ? activeNavLink : null)}
                  to="support"
                >
                  SUPPORT
                </NavLink>
              </div>
              <div className="cart">
                <NavLink
                  style={({ isActive }) => (isActive ? activeNavLink : null)}
                  to="cart"
                >
                  CART ({shoppingItems})
                </NavLink>
              </div>
              <div className="profile">
                <Avatar variant="solid" size="sm"/>
                <span>{user.username}</span>
              </div>
            </div>
          </div>
        </nav>
        {/* End of navigation bar */}
      </div>
      <Outlet />
    </>
  );
}
