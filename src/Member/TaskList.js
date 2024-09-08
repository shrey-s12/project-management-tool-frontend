import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import TaskCard from '../components/TaskCard';
import api from '../api';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Fetch tasks assigned to the member from API
        api.get('/my-tasks').then(response => setTasks(response.data));
    }, []);

    return (
        <div className="flex">
            <Sidebar userRole="member" />
            <div className="flex-1">
                <Navbar userRole="member" />
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-6">My Tasks</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tasks.map(task => (
                            <TaskCard key={task._id} task={task} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskList;
