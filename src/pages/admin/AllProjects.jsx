import React, { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext'; // Import dark mode context
import Sidebar from '../../components/Sidebar'; // Import Sidebar component

const AllProjects = () => {
  const { darkMode } = useContext(DarkModeContext); // Access dark mode state

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
        
      </div>
    </div>
  );
};

export default AllProjects;