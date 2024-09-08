import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';

const AddProject = ({ user }) => {  // Pass user information as prop
    const url = 'http://localhost:3020/projects/addProject';
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [manager, setManager] = useState('');
    const [managers, setManagers] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.deadline) {
            setDeadline(location.state.deadline.toISOString().split('T')[0]); // Format the date for input field
        }
    }, [location.state]);

    // Fetch managers on component mount
    useEffect(() => {
        fetch('http://localhost:3020/managers')
            .then((response) => response.json())
            .then((data) => setManagers(data))
            .catch((error) => setErrorMessage('Error fetching managers'));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title,
            description,
            deadline,
            manager,
            createdBy: user.username // Pass the username or userId here
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json(); // Parse the JSON if the response is successful
                } else {
                    throw new Error('Error adding project');
                }
            })
            .then(() => {
                console.log('Project added successfully');
                setTitle('');
                setDescription('');
                setDeadline('');
                setManager('');
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
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
                            className="border p-2 rounded"
                            value={deadline}
                            onChange={(e) => setDeadline(e.target.value)}
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
