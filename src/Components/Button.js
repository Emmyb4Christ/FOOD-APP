import React from "react";
import "./components.css";

const Button = ({ text, onClick }) => {
  return (
    <div>
      <button className="button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
