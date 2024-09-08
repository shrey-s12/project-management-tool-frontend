import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import api from '../api';

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [members, setMembers] = useState([]);
    const [assignedMember, setAssignedMember] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Fetch members from API
        api.get('/members').then(response => setMembers(response.data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { title, description, deadline, priority, assignedMember };

        api.post('/tasks', data)
            .then(response => {
                console.log('Task added:', response.data);
                // Handle success (e.g., navigate to another page)
            })
            .catch(err => setErrorMessage(err.message));
    };

    return (
        <div className="flex">
            <Sidebar userRole="manager" />
            <div className="flex-1">
                <Navbar userRole="manager" />
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-6">Add Task</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-3 border rounded-lg"
                            placeholder="Task Title"
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
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            className="w-full p-3 border rounded-lg"
                            required
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                        <select
                            value={assignedMember}
                            onChange={(e) => setAssignedMember(e.target.value)}
                            className="w-full p-3 border rounded-lg"
                            required
                        >
                            <option value="">Select Member</option>
                            {members.map((member) => (
                                <option key={member._id} value={member._id}>{member.name}</option>
                            ))}
                        </select>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                        >
                            Add Task
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTask;
