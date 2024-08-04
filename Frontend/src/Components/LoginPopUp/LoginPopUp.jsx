import React from "react";
import { useState } from "react";
import "./LoginPopUp.css";
import { assets } from "../../assets/frontend_assets/assets";

const LoginPopUp = ({ setLogin }) => {
  const [curState, setCurState] = useState("Sign Up");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{curState}</h2>
          <img
            onClick={() => {
              setLogin(false);
            }}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {curState == "Sign Up" ? (
            <input type="text" placeholder="Name" required />
          ) : (
            <></>
          )}
          <input type="text" placeholder="Email" required />
          <input type="text" placeholder="Password" required />
        </div>
        <button>{curState}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {curState === "Login" ? (
          <p>
            Already have an account? <span onClick={()=>setCurState("Sign Up")}>Login here</span>
          </p>
        ) : (
          <p>
            Create a new account? <span onClick={()=>setCurState("Login")}>Click here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
