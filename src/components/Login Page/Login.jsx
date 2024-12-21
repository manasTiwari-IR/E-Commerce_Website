import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import './Login.css';

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      password: Yup.string()
        .required("Required")
        .min(8, "Must be at least 8 characters"),
    }),
    onSubmit: (values) => {
      console.log(values);
      // You can add your login logic here
    },
  });

  return (
    <div className="login_box">
      <div className="login-container">
        <h2>Welcome Back!</h2>
        <hr />
        <form className="loginform" onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              placeholder="Enter your Email"
              type="email"
              name="email"
              id="email"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
          <button type="submit">Login</button>
          <p className="Signup_redirect">
            Don't have an account? <b style={{ textDecoration: "underline" }}>Sign Up</b>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
