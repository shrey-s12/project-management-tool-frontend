import React, { useState } from 'react';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const LoginSignup = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div className="container mx-auto p-8 max-w-md">

      {/* For Header text SignUp & Login */}
      <div className="header mb-6 text-center">
        <div className="text text-2xl font-bold">Login</div>
        <div className="underline h-1 bg-blue-500 w-16 mx-auto mt-2"></div>
      </div>

      {/* For Username, Email , Password & Role*/}
      <div className="inputs space-y-4">

        {/* for Username */}
        {display && (
          <div className="input flex items-center border border-gray-300 rounded-lg p-2">
            <img src={user_icon} alt="" className="w-6 h-6 mr-2" />
            <input
              type="text"
              name=""
              id=""
              className="w-full outline-none"
              placeholder="Username"
            />
          </div>
        )}

        {/* For Email */}
        <div className="input flex items-center border border-gray-300 rounded-lg p-2">
          <img src={email_icon} alt="" className="w-6 h-6 mr-2" />
          <input
            type="email"
            name=""
            id=""
            className="w-full outline-none"
            placeholder="Email"
          />
        </div>

        {/* For Password */}
        <div className="input flex items-center border border-gray-300 rounded-lg p-2">
          <img src={password_icon} alt="" className="w-6 h-6 mr-2" />
          <input
            type="password"
            name=""
            id=""
            className="w-full outline-none"
            placeholder="Password"
          />
        </div>

        {/* For Role */}
        <div className="input flex items-center border border-gray-300 rounded-lg p-2">
          <img src={user_icon} alt="" className="w-6 h-6 mr-2" />
          <input
            type="password"
            name=""
            id=""
            className="w-full outline-none"
            placeholder="Role"
          />
        </div>
      </div>

      {/* Forgot Password */}
      {!display && (
        <div className="forgot-password text-sm text-blue-500 mt-4 text-center">
          Lost Password? <span className="underline cursor-pointer">Click Here!</span>
        </div>
      )}

      {/* Forgot Password */}
      {display && (
        <div className="forgot-password text-sm text-blue-500 mt-4 text-center">
          Already have a account? <span className="underline cursor-pointer"
          onClick={() => {
            setAction("Login");
            setDisplay(false);
          }} >Login!</span>
        </div>
      )}

      {/* Buttons */}
      {/* <div className="submit-container mt-6 flex justify-between"> */}

        {/* Sign Up Button */}
        {/* <div
          className={`submit py-2 px-4 rounded-lg cursor-pointer text-center w-1/2 mr-2 ${action === "Sign Up" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"}`}
          onClick={() => {
            setAction("Sign Up");
            setDisplay(true);
          }}
        >
          Sign Up
        </div> */}

        {/* Login Button */}
        {/* <div
          className={`submit py-2 px-4 rounded-lg cursor-pointer text-center w-1/2 ml-2 ${action === "Login" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"}`}
          onClick={() => {
            setAction("Login");
            setDisplay(false);
          }}
        >
          Login
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default LoginSignup;