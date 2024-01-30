import React from "react";
import "./LoginSignUp.css";
import { FaCircleUser } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";

export const LoginSignUp = () => {
  //login n signup section
  const [action, setAction] = useState("Login");

  //input section
  const [inpVal, setInpVal] = useState({
    name: "",
    email: "",
    password: "",
  });
  const getdata = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setInpVal(() => {
      return {
        ...inpVal,
        [name]: value,
      };
    });
  };
  //localstorage
  localStorage.setItem("user", JSON.stringify(inpVal));

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
              <FaCircleUser />
            </i>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={getdata}
            />
          </div>
        )}

        <div className="input">
          <i>
            <HiOutlineMail />
          </i>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={getdata}
          />
        </div>
        <div className="input">
          <i>
            <RiLockPasswordFill />
          </i>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={getdata}
          />
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
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Login" ? "submit gray" : "submit"}
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
