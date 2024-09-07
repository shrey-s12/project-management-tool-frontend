import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // State for role selection
  const navigate = useNavigate(); // Use useNavigate to navigate to different pages

  // Handle login button click
  const handleLogin = () => {
    // Perform basic validation (you can replace this with API authentication)
    if (email === '' || password === '' || role === '') {
      alert('Please fill in all the fields');
      return;
    }

    // Simulate a successful login process and redirect based on role
    switch (role) {
      case 'Admin':
        navigate('/admin-dashboard');
        break;
      case 'Manager':
        navigate('/manager-dashboard');
        break;
      case 'Member':
        navigate('/member-dashboard');
        break;
      default:
        alert('Invalid role selected');
    }
  };

  return (
    <div className="container mx-auto p-8 max-w-md bg-white shadow-lg rounded-lg">

      {/* For Header text SignUp & Login */}
      <div className="header mb-6 text-center">
        <div className="text text-2xl font-bold">Login</div>
        <div className="underline h-1 bg-blue-500 w-16 mx-auto mt-2"></div>
      </div>

      {/* For Email, Password, and Role */}
      <div className="inputs space-y-4">

        {/* For Email */}
        <div className="input flex items-center border border-gray-300 rounded-lg p-2">
          <img src={email_icon} alt="" className="w-6 h-6 mr-2" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
            className="w-full outline-none"
            placeholder="Email"
          />
        </div>

        {/* For Password */}
        <div className="input flex items-center border border-gray-300 rounded-lg p-2">
          <img src={password_icon} alt="" className="w-6 h-6 mr-2" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
            className="w-full outline-none"
            placeholder="Password"
          />
        </div>

        {/* For Role */}
        <div className="input flex items-center border border-gray-300 rounded-lg p-2">
          <img src={user_icon} alt="role icon" className="w-6 h-6 mr-2" />
          <select
            className="w-full outline-none bg-transparent"
            value={role}
            onChange={(e) => setRole(e.target.value)} // Update role state
          >
            <option value="" disabled>Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
            <option value="Member">Member</option>
          </select>
        </div>
      </div>

      {/* Forgot Password */}
      <div className="forgot-password text-sm text-blue-500 mt-4 text-center">
        Lost Password? <span className="underline cursor-pointer">Click Here!</span>
      </div>

      {/* Login Button */}
      <div className="login-btn text-center mt-6">
        <button
          className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-600 transition duration-300"
          onClick={handleLogin} // Call handleLogin on button click
        >
          Login
        </button>
      </div>

    </div>
  );
};

export default Login;
