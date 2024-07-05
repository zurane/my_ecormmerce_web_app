import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import React from "react";

export default function RouteProtection({ children }) {
  // Get the boolean value
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
// Check if the user is logged in
  if (!isLoggedIn) {
    return <Navigate to="/sign-in" />;
  }
  return children;
}
