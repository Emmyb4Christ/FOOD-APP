import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Components/Button";
import { AuthContext } from "../Context/AuthContext";
import "./HomePage.css";

const Home = () => {
  const { user } = React.useContext(AuthContext);

  return (
    <div>
      <div className="nav-bar">
        <div>
          <h1 className="header"> Lilies </h1>
        </div>
        <div id="nav-bar-items" className="nav-bar-items">
          <NavLink className="nav-item-1" to="/">
            Home
          </NavLink>
          {!user && (
            <NavLink className="nav-item-2" to="/sign-in">
              Log In
            </NavLink>
          )}
          {!user && (
            <NavLink to="sign-up">
              <Button text="Sign Up" />
            </NavLink>
          )}
        </div>

        <div id="menu">
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>

      <div>
        <div className="section-1">
          <div>
            <h3>Order food anytime, anywhere</h3>
            <p>
              Browse from our list of specials to place your order and have food
              delivered to you in no time. Affordable, tasty and fast!
            </p>
            <div className="section-1-image">
              <a href="/#">
                <img
                  src={require("../Images/get-on-google.png")}
                  alt="google-get-logo"
                />
              </a>
              <a href="/#">
                <img
                  src={require("../Images/App-Store-Badge.png")}
                  alt="google-app-store-logo"
                />
              </a>
            </div>
          </div>
          <img
            src={require("../Images/content-1-food.png")}
            alt="google-get-logo"
            style={{
              width: "400px",
              height: "400px",
            }}
          />
        </div>
      </div>
      <div className="section-2">
        <div>
          <h3> Special Meals of the day! </h3>
          <p>
            Check our sepecials of the day and get discounts on all our meals
            and swift delivery to what ever location within Ilorin.
          </p>
        </div>
      </div>

      <div className="section-3">
        <div className="section-3-col">
          <img src={require("../Images/food1.png")} alt="food" />
          <h3> Stir fry Pasta </h3>
          <p> Stir fry pasta yada yada yada because of Sesan </p>
        </div>
        <div className="section-3-col">
          <img src={require("../Images/food2.png")} alt="food" />
          <h3> Stir fry Pasta </h3>
          <p> Stir fry pasta yada yada yada because of Sesan </p>
        </div>
        <div className="section-3-col">
          <img src={require("../Images/food3.png")} alt="food" />
          <h3> Stir fry Pasta </h3>
          <p> Stir fry pasta yada yada yada because of Sesan </p>
        </div>
      </div>

      {/* SECTION 4 */}
      <div className="section-4">
        <div className="section-4-left">
          <h3> Get notified when we update! </h3>
          <p>
            Get notified when we add new items to our specials menu, update our
            price list of have promos!
          </p>
        </div>
        <div className="notification-button">
          <input type="email" placeholder="email@example.com" />
          <Button text="Get notified" />
        </div>
      </div>

      {/* FOOTER */}
      <div className="footer">
        <div className="footer-content">
          <div className="footer-content-col">
            <h6> Company </h6>
            <ul>
              <li> About Us </li>
              <li> Careers </li>
              <li> Contact Us </li>
            </ul>
          </div>
          <div className="footer-content-col">
            <h6>Support </h6>
            <ul>
              <li> Help Center </li>
              <li> Safety Center </li>
            </ul>
          </div>
          <div className="footer-content-col">
            <h6> Legal </h6>
            <ul>
              <li> Cookies Policy</li>
              <li> Privacy Policy </li>
              <li> Terms of Services </li>
              <li> Dispute Resolutions </li>
            </ul>
          </div>
          <div className="footer-content-col4">
            <h6> Install App </h6>
            <a href="/#">
              <img
                src={require("../Images/get-on-google.png")}
                alt="google-get-logo"
              />
            </a>
            <a href="/#">
              <img
                src={require("../Images/App-Store-Badge.png")}
                alt="google-app-store-logo"
              />
            </a>
          </div>
        </div>
        <div className="footer-last-row">
          <div>
            <p> © 2021 LILIES, All rights reserved </p>
          </div>
          <div className="social-media-icon">
            <a href="/#">
              <i class="fa-brands fa-square-instagram"></i>
            </a>
            <a href="/#">
              <i class="fa-brands fa-square-twitter"></i>
            </a>
            <a href="/#">
              <i class="fa-brands fa-square-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
