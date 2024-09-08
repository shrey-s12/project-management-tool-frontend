import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import api from '../api';

const TaskRequests = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        // Fetch task requests from API
        api.get('/task-requests').then(response => setRequests(response.data));
    }, []);

    return (
        <div className="flex">
            <Sidebar userRole="manager" />
            <div className="flex-1">
                <Navbar userRole="manager" />
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-6">Task Requests</h1>
                    <div>
                        {requests.length === 0 ? (
                            <p>No task requests available.</p>
                        ) : (
                            requests.map(request => (
                                <div key={request._id} className="bg-white p-4 border rounded-lg mb-4 shadow">
                                    <h3 className="text-xl font-bold">{request.taskTitle}</h3>
                                    <p>{request.requestDetails}</p>
                                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4">Respond</button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskRequests;
