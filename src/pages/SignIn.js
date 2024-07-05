import React, { useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { logIn } from "../redux/authenticationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function SignIn() {
  // Get the account username and password from the store
  const yourLoginDetails = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Set up our login state
  const [loginError, setLoginError] = useState("");

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      // Strictly make sure that the account has been created before login
      if (
        // check if the details match the ones stored in our user object in redux store
        values.username === yourLoginDetails.username &&
        values.password === yourLoginDetails.password
      ) {
        dispatch(logIn());
        navigate("/");
      } else {
        setLoginError("Invalid username or password");
      }
    },
  });

  return (
    <div className="container">
      <div className="login-wrapper">
        <h1>My Account</h1>
        <p>Sign in to access your account</p>
        <br />
        <form onSubmit={formik.handleSubmit}>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="form-error">{formik.errors.username}</div>
          ) : null}

          <br />

          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="form-error">{formik.errors.password}</div>
          ) : null}

          <br />

          {/* if login details are wrong */}
          {loginError && <div className="form-error">{loginError}</div>}

          <button type="submit">Login</button>
          <br />
          <p className="create-acc-text">
            Don't have an account?
            <NavLink className="login-link" to="/sign-up">
              Create account
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}
