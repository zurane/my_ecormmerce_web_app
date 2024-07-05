import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { createAcc } from "../redux/authenticationSlice";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoggedInPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Should not exceed 15 characters")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Should not exceed 20 characters")
        .required("Required"),
      username: Yup.string()
        .max(8, "Username must be at least 8 characters")
        .required("Username must be at least 8 characters"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .required("Required"),
    }),
    //We will store the password and username values and redirect to the login page.
    onSubmit: (values) => {
      dispatch(
        createAcc({ username: values.username, password: values.password })
      );
      navigate("/sign-in");
    },
  });

  return (
    <div className="container">
      <div className="login-wrapper">
        <div className="greet-msg">
          <h3>Create your account</h3>
        </div>

        {/* ============form =================== */}
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          <span className="error-msg-container">
            <br />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="form-error">{formik.errors.firstName}</div>
            ) : null}
          </span>
      
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Surname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          <span className="error-msg-container">
            <br />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="form-error">{formik.errors.lastName}</div>
            ) : null}
          </span>
          
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <span className="error-msg-container">
          <br />
            {formik.touched.email && formik.errors.email ? (
              <div className="form-error">{formik.errors.email}</div>
            ) : null}
          </span>
          
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
        
          <span className="error-msg-container">
          <br />
            {formik.touched.username && formik.errors.username ? (
              <div className="form-error">{formik.errors.username}</div>
            ) : null}
          </span>

          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        <br />
          <span className="error-msg-container">
            {formik.touched.password && formik.errors.password ? (
              <div className="form-error">{formik.errors.password}</div>
            ) : null}
          </span>
            <br/>
          <button type="submit">Create Account</button>
          <br />
          {/* If the user has an account already they can click on the login button to navigate to the login page instead */}
          <p className="create-acc-text">
            Already have an account?
            <NavLink className="login-link" to="/sign-in">
              Login here
            </NavLink>
          </p>
        </form>
        {/* ============End of form =================== */}
      </div>
    </div>
  );
}
