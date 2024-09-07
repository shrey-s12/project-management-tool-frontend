// Sidebar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../context/DarkModeContext'; // Import dark mode context

import profilePic from '../Assets/profile.jpg'; // Sample profile picture

const Sidebar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext); // Access dark mode state and toggle

  return (
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
        <Link to="/admin-dashboard" className="text-lg hover:bg-blue-400 p-2 rounded">Dashboard</Link>
        <Link to="/admin-dashboard/tasks" className="text-lg hover:bg-blue-400 p-2 rounded">Tasks</Link>
        <Link to="/admin-dashboard/completed-tasks" className="text-lg hover:bg-blue-400 p-2 rounded">Completed Tasks</Link>
        <Link to="/admin-dashboard/in-progress-tasks" className="text-lg hover:bg-blue-400 p-2 rounded">In Progress Tasks</Link>
        <Link to="/admin-dashboard/todos" className="text-lg hover:bg-blue-400 p-2 rounded">Todos</Link>
        <Link to="/admin-dashboard/trash" className="text-lg hover:bg-blue-400 p-2 rounded">Trash</Link>
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
  );
};

export default Sidebar;
