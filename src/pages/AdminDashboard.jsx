import React, { useState } from 'react';

// Sample profile picture and user details
import profilePic from '../Assets/profile.jpg'; // You need to add your profile picture here

const AdminDashboard = () => {
  // State for Dark Mode Toggle
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>

      {/* Sidebar */}
      <div className={`w-64 ${darkMode ? 'bg-gray-800' : 'bg-blue-500'} text-white flex flex-col justify-between`}>

        {/* Profile Section */}
        <div className="p-6">
          <div className="text-center mb-4 py-4 text-xl font-bold bg-blue-600">Admin Panel</div>
          <div className="flex items-center space-x-4">

            <img src={profilePic} alt="Profile" className="w-12 h-12 rounded-full" />
            <div>
              <h2 className="text-lg font-bold">Admin Name</h2>
              <p className="text-sm text-gray-300">admin@domain.com</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col p-4 space-y-4 flex-grow">
          <a href="#" className="text-lg hover:bg-blue-400 p-2 rounded">Tasks</a>
          <a href="#" className="text-lg hover:bg-blue-400 p-2 rounded">Completed Tasks</a>
          <a href="#" className="text-lg hover:bg-blue-400 p-2 rounded">In Progress Tasks</a>
          <a href="#" className="text-lg hover:bg-blue-400 p-2 rounded">Todos</a>
          <a href="#" className="text-lg hover:bg-blue-400 p-2 rounded">Trash</a>
        </div>

        {/* Dark Mode Toggle */}
        <div className="p-4">
          <button
            className={`w-full py-2 px-4 rounded-lg focus:outline-none ${darkMode ? 'bg-yellow-500 text-gray-900' : 'bg-gray-700 text-white'}`}
            onClick={toggleDarkMode}
          >
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <div className={`flex justify-between items-center ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 shadow`}>
          <h1 className="text-2xl font-bold">Dashboard Overview</h1>
          <div className="flex space-x-4">
            <button className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-blue-500' : 'bg-blue-500 text-white'}`}>
              Notifications
            </button>
            <button className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-red-500' : 'bg-red-500 text-white'}`}>
              Logout
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-4 shadow rounded-lg flex flex-col items-center justify-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className="text-xl font-semibold mb-4">Total Users</h2>
              <p className="text-4xl font-bold">345</p>
            </div>

            <div className={`p-4 shadow rounded-lg flex flex-col items-center justify-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className="text-xl font-semibold mb-4">Total Projects</h2>
              <p className="text-4xl font-bold">78</p>
            </div>

            <div className={`p-4 shadow rounded-lg flex flex-col items-center justify-center ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className="text-xl font-semibold mb-4">Reports Generated</h2>
              <p className="text-4xl font-bold">15</p>
            </div>
          </div>

          {/* Detailed Statistics Section */}
          <div className={`p-6 shadow rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="text-2xl font-semibold mb-4">Detailed Statistics</h3>
            <p className="text-gray-600">This section can contain more detailed charts, tables, or graphs on user activity, project statuses, and more.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;