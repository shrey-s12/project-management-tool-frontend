import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import api from '../api';

const AddProject = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [manager, setManager] = useState('');
  const [managers, setManagers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Fetch managers from API
    api.get('/managers').then(response => setManagers(response.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, description, deadline, manager };

    api.post('/projects', data)
      .then(response => {
        console.log('Project added:', response.data);
        // Handle success (e.g., navigate to another page)
      })
      .catch(err => setErrorMessage(err.message));
  };

  return (
    <div className="flex">
      <Sidebar userRole="admin" />
      <div className="flex-1">
        <Navbar userRole="admin" />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Add Project</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {errorMessage && <div className="text-red-500">{errorMessage}</div>}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border rounded-lg"
              placeholder="Project Title"
              required
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 border rounded-lg"
              placeholder="Description"
              rows="4"
              required
            />
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full p-3 border rounded-lg"
              required
            />
            <select
              value={manager}
              onChange={(e) => setManager(e.target.value)}
              className="w-full p-3 border rounded-lg"
              required
            >
              <option value="">Select Manager</option>
              {managers.map((mgr) => (
                <option key={mgr._id} value={mgr._id}>{mgr.name}</option>
              ))}
            </select>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg"
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
