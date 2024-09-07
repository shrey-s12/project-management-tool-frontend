import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext'; // Import dark mode context
import Sidebar from '../components/Sidebar'; // Import Sidebar component

const AdminDashboard = () => {
  const { darkMode } = useContext(DarkModeContext); // Access dark mode state

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
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

        {/* Two Column Layout: Cards + Calendar */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cards Column */}
          <div className="space-y-6">
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

          {/* Calendar Column */}
          <div className={`p-4 shadow rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className="text-2xl font-semibold mb-4">Project Calendar</h3>
            {/* You can use a Calendar component here */}
            <p className="text-gray-600">Calendar component goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
