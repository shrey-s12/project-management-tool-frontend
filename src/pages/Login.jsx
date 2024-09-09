import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const Login = () => {
  const url = 'http://localhost:3020/login';
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // State for role selection
  const [errorMessage, setErrorMessage] = useState("");  // State for error message
  const navigate = useNavigate(); // Use useNavigate to navigate to different pages

  // Handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    const data = { email, password, role };
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      credentials: 'include' // Ensure cookies are included
    })
      .then((result) => {
        console.log("Response status:", result.status);  // Log status code for better debugging

        if (result.ok) {
          console.log("Successful login. Parsing JSON...");
          result.json().then((data) => {
            console.log("Data received:", data);
            const serverRole = data.user.role; // Use role from server response
            console.log("Server role:", serverRole);
            document.cookie = `authtoken=${data.token}`; // Set role in cookie
            switch (serverRole) {
              case "Admin":
                navigate("/admin/dashboard");
                break;
              case "Manager":
                navigate("/manager/dashboard");
                break;
              case "Member":
                navigate("/member/dashboard");
                break;
              default:
                alert("Invalid role selected");
            }
          })
        }
      }).catch((err) => {
        console.error("Error during login:", err);
        setErrorMessage(err.message);
        setPassword(""); // Clear the password field for security reasons
      });
  };

  return (
    <div className="container mx-auto p-8 max-w-md bg-white shadow-lg rounded-lg">
      {/* Header text */}
      <div className="header mb-6 text-center">
        <div className="text text-2xl font-bold">Login</div>
        <div className="underline h-1 bg-blue-500 w-16 mx-auto mt-2"></div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Error Message */}
        {errorMessage && (
          <div className="text-center text-red-500 font-medium">
            {errorMessage}
          </div>
        )}

        {/* Email */}
        <div className="input flex items-center border border-gray-300 rounded-lg p-2">
          <img src={email_icon} alt="Email" className="w-6 h-6 mr-2" />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-none outline-none"
            required
          />
        </div>

        {/* Password */}
        <div className="input flex items-center border border-gray-300 rounded-lg p-2">
          <img src={password_icon} alt="Password" className="w-6 h-6 mr-2" />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-none outline-none"
            required
          />
        </div>

        {/* Role */}
        <div className="input flex items-center border border-gray-300 rounded-lg p-2">
          <img src={user_icon} alt="Role" className="w-6 h-6 mr-2" />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border-none outline-none"
            required
          >
            <option value="" disabled>Select role</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Member">Member</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>

      </form>
    </div>
  );
};

export default Login;
