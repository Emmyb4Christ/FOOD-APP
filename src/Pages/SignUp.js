import React from "react";
import Button from "../Components/Button";
import { NavLink } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div style={{ display: "flex", gap: "0" }}>
      <img
        className="sign-up-background-image"
        src={require("../Images/sign-up-background.png")}
        alt="backgroundLogo"
      />
      <div className="sign-up-form-div">
        <h2 className="sign-up-form-h2"> Welcome Back! </h2>
        <form>
          <input
            id="name"
            type="name"
            required
            name="name"
            placeholder="Your Full Name"
          />
          <input
            id="email"
            type="email"
            required
            name="email"
            placeholder="Your Email Address"
          />
          <input
            id="password"
            type="password"
            required
            name="password"
            placeholder="Your Password"
          />
          <div className="sign-up-button">
            <Button text="SIGN UP" />
          </div>
          <div style={{ position: "absolute", top: "724px", left: "978px" }}>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(0, 48, 46, 0.91)",
                fontWeight: "400",
                fontStyle: "normal",
              }}
            >
              Already have an account?
              <NavLink style={{ textDecoration: "none" }} to="/sign-in">
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
