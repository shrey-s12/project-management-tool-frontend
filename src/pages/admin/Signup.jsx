import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from '../../context/DarkModeContext'; // Import dark mode context
import Sidebar from '../../components/Sidebar'; // Import Sidebar component

import user_icon from "../../Assets/person.png";
import email_icon from "../../Assets/email.png";
import password_icon from "../../Assets/password.png";

const Signup = () => {
    const { darkMode } = useContext(DarkModeContext); // Access dark mode state and toggle function

    const url = 'http://localhost:3020/signup'; // Backend signup endpoint
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(""); // State fo   r role selection
    const [errorMessage, setErrorMessage] = useState("");  // State for error message
    const navigate = useNavigate();

    // Handle signup form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload

        const data = { name, email, password, role }; // Data to be sent to backend

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json(); // Parse the JSON if the response is successful
                } else if (response.status === 400) {
                    throw new Error("Bad request. Please check your input.");
                } else if (response.status === 500) {
                    throw new Error("Internal server error. Please try again later.");
                } else {
                    throw new Error(`Error occurred. Status code: ${response.status}`);
                }
            })
            .then((data) => {
                // Handle successful signup
                console.log("Signup successful:", data);
                navigate("/login"); // Navigate to login page after signup
            })
            .catch((err) => {
                // Handle error cases
                setErrorMessage(err.message);
                setPassword(""); // Clear the password field for security reasons
            });
    };

    return (
        <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                <div className={`flex justify-between items-center ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 shadow`}>
                    <h1 className="text-2xl font-bold">All Projects</h1>
                    <div className="flex space-x-4">
                        <button className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-blue-500' : 'bg-blue-500 text-white'}`}>
                            Notifications
                        </button>
                        <button className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-red-500' : 'bg-red-500 text-white'}`}>
                            Logout
                        </button>
                    </div>
                </div>

                {/* Main Area */}
                <div className={`container m-12 mx-auto p-8 max-w-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg rounded-lg`}>
                    {/* Header text */}
                    <div className="header mb-6 text-center">
                        <div className="text text-2xl font-bold">Add User</div>
                        <div className={`underline h-1 ${darkMode ? 'bg-yellow-500' : 'bg-blue-500'} w-16 mx-auto mt-2`}></div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Error Message */}
                        {errorMessage && (
                            <div className="text-center text-red-500 font-medium">
                                {errorMessage}
                            </div>
                        )}

                        {/* Name */}
                        <div className="input flex items-center border border-gray-300 rounded-lg p-2">
                            <img src={user_icon} alt="name icon" className="w-6 h-6 mr-2" />
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)} // Update name state
                                className={`w-full outline-none ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
                                placeholder="Name"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="input flex items-center border border-gray-300 rounded-lg p-2">
                            <img src={email_icon} alt="email icon" className="w-6 h-6 mr-2" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Update email state
                                className={`w-full outline-none ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
                                placeholder="Email"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="input flex items-center border border-gray-300 rounded-lg p-2">
                            <img
                                src={password_icon}
                                alt="password icon"
                                className="w-6 h-6 mr-2"
                            />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Update password state
                                className={`w-full outline-none ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
                                placeholder="Password"
                                required
                            />
                        </div>

                        {/* Role */}
                        <div className="input flex items-center border border-gray-300 rounded-lg p-2">
                            <img src={user_icon} alt="role icon" className="w-6 h-6 mr-2" />
                            <select
                                className={`w-full outline-none bg-transparent ${darkMode
                                    ? 'bg-gray-700 text-white'
                                    : 'bg-white text-gray-900'
                                    }`}
                                style={{
                                    appearance: 'none', // To remove default select styles
                                    backgroundColor: darkMode ? '#374151' : '#fff', // Explicit background color
                                    color: darkMode ? '#fff' : '#000', // Explicit text color
                                }}
                                value={role}
                                onChange={(e) => setRole(e.target.value)} // Update role state
                                required
                            >
                                <option value="" disabled>
                                    Select Role
                                </option>
                                <option value="Manager">Manager</option>
                                <option value="Member">Team Member</option>
                            </select>
                        </div>

                        {/* Signup Button */}
                        <div className="signup-btn text-center mt-6">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-600 transition duration-300"
                            >
                                Add User
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
