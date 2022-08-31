import React from "react";
import Button from "../Components/Button";
import { NavLink, useNavigate } from "react-router-dom";
import "./SignIn.css";
import { AuthContext } from "../Context/AuthContext";

const SignIn = () => {
  const { setUser } = React.useContext(AuthContext);

  let navigate = useNavigate();

  const handleLogin = () => {
    setUser({ user: "login" });
    navigate("/");
  };

  return (
    <div className="container-div">
      <div>
        <img
          className="background-image"
          src={require("../Images/register-background.png")}
          alt="google-get-logo"
        />
      </div>
      <div className="form-div">
        <h2> Welcome Back! </h2>
        <form className="form">
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
          <div className="log-in-button">
            <Button text="LOGIN" onClick={handleLogin} />
          </div>
          <div className="form-last-col">
            <NavLink className="create-account" to="/sign-up">
              Create an account
            </NavLink>
            <NavLink className="forgot-password" to="/">
              Forgot Password
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
