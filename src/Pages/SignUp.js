import React from "react";
import Button from "../Components/Button";
import { NavLink } from "react-router-dom";
import "./SignIn.css";
import useForm from "../Hooks/useForm";

const SignUp = () => {
  //Final submit function
  const formLogin = () => {
    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  };

  const { handleChange, values, errors, handleSubmit } = useForm(formLogin);

  return (
    <div className="container-div">
      <img
        className="sign-up-background-image"
        src={require("../Images/sign-up-background.png")}
        alt="backgroundLogo"
      />
      <div className="sign-up-form-div">
        <h2 className="sign-up-form-h2"> Welcome Back! </h2>
        <form onSubmit={handleSubmit}>
          <input
            id="name"
            type="name"
            name="name"
            placeholder="Your Username"
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email Address"
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Your Password"
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
          <div className="sign-up-button">
            <Button text="SIGN UP" />
          </div>
          <div className="form-last-col sign-up-last-col">
            <p>
              Already have an account?
              <NavLink className="nav-link" to="/sign-in">
                LOGIN
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
