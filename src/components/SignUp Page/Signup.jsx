import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Signup.css";

const SignUpPage = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      number: "",
      gender: "male",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .min(3, "Must be at least 3 characters")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastname: Yup.string()
        .min(3, "Must be at least 3 characters")
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      number: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .required('A phone number is required'),
      gender: Yup.string().required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .max(16, "Must be 16 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      // You can add your sign-up logic here
    },
  });

  return (
    <div className="sign_box">
      <div className="signup-container">
        <h2>Create a New Account</h2>
        <hr />
        <form onSubmit={formik.handleSubmit}>
          <div className="name-input">
            <div className="form-group">
              <label htmlFor="firstname">First Name:</label>
              <input
                type="text"
                id="firstname"
                placeholder="First Name"
                {...formik.getFieldProps('firstname')}
              />
              {formik.touched.firstname && formik.errors.firstname ? (
                <div className="error">{formik.errors.firstname}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name:</label>
              <input
                type="text"
                id="lastname"
                placeholder="Last Name"
                {...formik.getFieldProps('lastname')}
              />
              {formik.touched.lastname && formik.errors.lastname ? (
                <div className="error">{formik.errors.lastname}</div>
              ) : null}
            </div>
          </div>
          <div className="gender-telno">
            <div className="form-group tel-grp">
              <label htmlFor="number">Contact Number:</label>
              <input
                type="tel"
                id="number"
                minLength={10}
                maxLength={10}
                placeholder="Enter your contact number"
                {...formik.getFieldProps('number')}
              />
              {formik.touched.number && formik.errors.number ? (
                <div className="error">{formik.errors.number}</div>
              ) : null}
            </div>
            <div className="form-group gender-grp">
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                {...formik.getFieldProps('gender')}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
              {formik.touched.gender && formik.errors.gender ? (
                <div className="error">{formik.errors.gender}</div>
              ) : null}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
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
              placeholder="Enter your password"
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
          <button type="submit">Sign Up</button>
          <p className="Go-to-login">
            Already have an account? <b style={{ textDecoration: "underline" }}>Login</b>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
