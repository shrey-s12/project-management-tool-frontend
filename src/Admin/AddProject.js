import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';

const AddProject = ({ user }) => {  // Pass user information as prop
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [manager, setManager] = useState('');
    const [managers, setManagers] = useState([]);
    const [assignedManagers, setAssignedManagers] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [noManagersError, setNoManagersError] = useState('');
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.deadline) {
            setDeadline(location.state.deadline.toISOString().split('T')[0]); // Format the date for input field
        }
    }, [location.state]);

    // Fetch managers on component mount
    useEffect(() => {
        const fetchManagers = async () => {
            try {
                // Fetch all managers
                const response = await fetch('http://localhost:3020/members-and-managers');
                if (!response.ok) {
                    throw new Error('Failed to fetch managers');
                }
                const data = await response.json();
                if (Array.isArray(data.managers)) {
                    setManagers(data.managers); // Set managers list
                } else {
                    throw new Error('Unexpected response format');
                }

                // Fetch assigned managers
                const assignedResponse = await fetch('http://localhost:3020/projects/assigned-managers');
                if (!assignedResponse.ok) {
                    throw new Error('Failed to fetch assigned managers');
                }
                const assignedData = await assignedResponse.json();
                setAssignedManagers(assignedData); // Set list of assigned managers
            } catch (error) {
                setErrorMessage(error.message);
            }
        };

        fetchManagers();
    }, []);

    // Filter out already assigned managers from the list
    const availableManagers = managers.filter(
        (mgr) => !assignedManagers.includes(mgr._id)
    );

    // Show error if no managers are available
    useEffect(() => {
        if (availableManagers.length === 0) {
            setNoManagersError('No managers available. Please add more managers before creating a project.');
        } else {
            setNoManagersError('');
        }
    }, [availableManagers]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (availableManagers.length === 0) {
            setNoManagersError('No managers available. Please add more managers before creating a project.');
            return;
        }

        const data = {
            name: title,
            description,
            deadline,
            manager
        };

        const url = 'http://localhost:3020/projects/addProject';
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
                        {noManagersError && <div className="text-red-500">{noManagersError}</div>}
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
                            disabled={availableManagers.length === 0} // Disable if no managers are available
                        >
                            <option value="">Select Manager</option>
                            {availableManagers.map((mgr) => (
                                <option key={mgr._id} value={mgr._id}>{mgr.name}</option>
                            ))}
                        </select>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                            disabled={availableManagers.length === 0} // Disable submit button if no managers
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
