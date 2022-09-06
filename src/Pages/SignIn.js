import React from "react";
import Button from "../Components/Button";
import { NavLink, useNavigate } from "react-router-dom";
import "./SignIn.css";
import { AuthContext } from "../Context/AuthContext";
import useForm from "../Hooks/useForm";

const SignIn = () => {
  const formLogin = () => {
    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  };

  const { handleChange, values, errors, handleSubmit } = useForm(formLogin);

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
        <form className="form" onSubmit={handleSubmit}>
          <input
            id="email"
            type="email"
            required
            name="email"
            placeholder="Your Email Address"
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            id="password"
            type="password"
            required
            name="password"
            placeholder="Your Password"
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}

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
