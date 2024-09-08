import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DarkModeContext } from '../../context/DarkModeContext';
import Sidebar from '../../components/Sidebar';

const AddProject = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [manager, setManager] = useState('');
  const [managers, setManagers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the list of managers
    fetch('http://localhost:3020/users?role=Manager')
      .then(response => response.json())
      .then(data => setManagers(data))
      .catch(err => setErrorMessage('Failed to fetch managers.'));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { title, description, deadline, manager };

    fetch('http://localhost:3020/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Project added:', data);
        navigate('/admin-dashboard/projects');
      })
      .catch(err => setErrorMessage('Failed to add project.'));
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className={`flex justify-between items-center ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 shadow`}>
          <h1 className="text-2xl font-bold">Add Projects</h1>
          <div className="flex space-x-4">
            <button className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-blue-500' : 'bg-blue-500 text-white'}`}>
              Notifications
            </button>
            <button className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-red-500' : 'bg-red-500 text-white'}`}>
              Logout
            </button>
          </div>
        </div>
        <div className="p-6 ">
          <h1 className="text-2xl font-bold">Add Project</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMessage && <div className="text-red-500">{errorMessage}</div>}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
              placeholder="Project Title"
              required
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
              placeholder="Description"
              required
            />
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
              required
            />
            <select
              value={manager}
              onChange={(e) => setManager(e.target.value)}
              className={`w-full p-2 border rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}`}
              required
            >
              <option value="">Select Manager</option>
              {managers.map((mgr) => (
                <option key={mgr._id} value={mgr._id}>{mgr.name}</option>
              ))}
            </select>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-600 transition duration-300"
            >
              Add Project
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default AddProject;
