import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import { DarkModeContext } from '../context/DarkModeContext';
import Sidebar from '../components/Sidebar';

const Tasks = () => {
  const { darkMode } = useContext(DarkModeContext);
  const navigate = useNavigate(); // Initialize navigate

  // Handle redirection to Add Task page
  const handleAddTask = () => {
    navigate('/admin-dashboard/add-task'); // Navigate to the Add Task page
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <div className={`flex justify-between items-center ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 shadow`}>
          <h1 className="text-2xl font-bold">Tasks Overview</h1>
          <div className="flex space-x-4">
            <button 
              className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-blue-500' : 'bg-blue-500 text-white'}`}
              onClick={handleAddTask} // Call handleAddTask on click
            >
              Add Task
            </button>
            <button className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-blue-500' : 'bg-blue-500 text-white'}`}>
              Notifications
            </button>
            <button className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-red-500' : 'bg-red-500 text-white'}`}>
              Logout
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="p-6">
          <div className="flex space-x-4">
            <div className="flex-1">
              <div className={`p-4 shadow rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h2 className="text-xl font-semibold mb-4">Task 1</h2>
                <p className="text-gray-600">Task description goes here.</p>
              </div>
            </div>
            <div className="flex-1">
              <div className={`p-4 shadow rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h2 className="text-xl font-semibold mb-4">Task 2</h2>
                <p className="text-gray-600">Task description goes here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
