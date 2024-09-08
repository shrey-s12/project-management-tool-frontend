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
        <div className={`text-center mb-4 py-4 text-xl font-bold ${darkMode ? 'bg-gray-700' : 'bg-blue-600'}`}>
          Admin Panel
        </div>
        <Link to="/admin-dashboard/user-profile" className="flex items-center space-x-4">
          <img src={profilePic} alt="Profile" className="w-12 h-12 rounded-full" />
          <div>
            <h2 className="text-lg font-bold">Admin Name</h2>
            <p className="text-sm text-gray-300">admin@domain.com</p>
          </div>
        </Link>
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
      <div className="p-4 flex items-center justify-between">
        <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
        <div className="relative">
          {/* Toggle Switch */}
          <input
            type="checkbox"
            id="darkModeToggle"
            checked={darkMode}
            onChange={toggleDarkMode}
            className="sr-only peer"
          />
          <div className="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-yellow-500 peer-focus:ring-4 peer-focus:ring-yellow-300 transition-colors duration-300 ease-in-out"></div>
          <div
            className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-6"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
