import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import LoggedInPage from "./pages/LoggedInPage";
import NavigationBar from "./components/NavigationBar";
import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Support from "./pages/Support";
import RouteProtection from "./components/RouteProtection";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<NavigationBar />}>
          <Route exact path="/" element={<Homepage />} />
          <Route path="products" element={<Products />} />
          <Route path="loggedIn" element={<LoggedInPage />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="support" element={<Support />} />
          <Route
            path="cart"
            element={
              // The user should be able access the cart page until the create an account or they are logged in.
              <RouteProtection>
                <Cart />
              </RouteProtection>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
