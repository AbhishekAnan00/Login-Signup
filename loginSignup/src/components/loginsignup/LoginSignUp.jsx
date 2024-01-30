import React from "react";
import "./LoginSignUp.css";
import { FaCircleUser } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";

export const LoginSignUp = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="hr"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <i>
              <FaCircleUser />{" "}
            </i>
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <i>
            <HiOutlineMail />
          </i>
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <i>
            <RiLockPasswordFill />
          </i>
          <input type="password" placeholder="password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot">
          forget <span>click here!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "SignUp" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};
