import React, { useContext, useState } from 'react';
import { DarkModeContext } from '../context/DarkModeContext'; // Import context
import Sidebar from '../components/Sidebar'; // Import Sidebar component
import { FaCamera } from "react-icons/fa"; // Import camera icon from react-icons
import profilePic from '../Assets/profile.jpg'; // Import a profile photo

const UserProfile = () => {
    const { darkMode } = useContext(DarkModeContext); // Access dark mode and toggle function
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Dummy user data
    const user = {
        name: 'John Doe',
        role: 'Admin',
        profileImage: profilePic,
    };

    const handlePasswordChange = (e) => {
        e.preventDefault();
        // Basic validation
        if (newPassword !== confirmPassword) {
            setPasswordError('New password and confirmation do not match.');
            setSuccessMessage('');
        } else if (newPassword.length < 6) {
            setPasswordError('New password should be at least 6 characters long.');
            setSuccessMessage('');
        } else {
            // Logic to change password would go here (e.g., API call)
            setPasswordError('');
            setSuccessMessage('Password changed successfully!');
        }
    };

    // Function to handle profile picture change (trigger file input click)
    const [profileImage, setProfileImage] = useState(user.profileImage); // State to store the uploaded image

    // Handle profile image change
    const handleProfileChange = (e) => {
        const file = e.target.files[0]; // Get the uploaded file

        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                setProfileImage(reader.result); // Set the profile image to the uploaded image
            };

            reader.readAsDataURL(file); // Read the file as a data URL
        }
    };

    return (
        <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                <div className={`flex justify-between items-center ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 shadow`}>
                    <h1 className="text-2xl font-bold">User Profile</h1>
                    <div className="flex space-x-4">
                        <button className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-blue-500' : 'bg-blue-500 text-white'}`}>
                            Notifications
                        </button>
                        <button className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-red-500' : 'bg-red-500 text-white'}`}>
                            Logout
                        </button>
                    </div>
                </div>

                {/* Main Profile Area */}
                <div className={`flex justify-center items-center h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                    <div className={`p-8 shadow-lg rounded-lg max-w-md w-full ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>

                        {/* Profile Section */}
                        <div className="relative text-center mb-6">
                            <img
                                src={user.profileImage}
                                alt="Profile"
                                className="w-24 h-24 rounded-full mx-auto mb-4"
                            />
                            <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{user.name}</h2>
                            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{user.role}</p>

                            {/* Camera Icon for Changing Profile Photo */}
                            <div className="absolute bottom-0 right-0">
                                <label htmlFor="profile-upload">
                                    <FaCamera className="text-white bg-blue-500 p-1 rounded-full w-8 h-8 cursor-pointer" />
                                    <input
                                        type="file"
                                        id="profile-upload"
                                        style={{ display: 'none' }}
                                        onChange={handleProfileChange} // Add logic to handle profile change
                                    />
                                </label>
                            </div>
                        </div>

                        {/* Password Change Form */}
                        <form onSubmit={handlePasswordChange}>
                            <div className="mb-4">
                                <label className={`block ${darkMode ? 'text-gray-400' : 'text-gray-700'} mb-2`}>Current Password</label>
                                <input
                                    type="password"
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white border-gray-300'}`}
                                    placeholder="Enter current password"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className={`block ${darkMode ? 'text-gray-400' : 'text-gray-700'} mb-2`}>New Password</label>
                                <input
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white border-gray-300'}`}
                                    placeholder="Enter new password"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label className={`block ${darkMode ? 'text-gray-400' : 'text-gray-700'} mb-2`}>Confirm New Password</label>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 ${darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white border-gray-300'}`}
                                    placeholder="Confirm new password"
                                    required
                                />
                            </div>

                            {/* Error and Success Messages */}
                            {passwordError && <p className="text-red-500 mb-4">{passwordError}</p>}
                            {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                            >
                                Change Password
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserProfile;
