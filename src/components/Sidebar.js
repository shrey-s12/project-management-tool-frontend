import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ userRole }) => {
    return (
        <div className="sticky top-0 left-0 w-64 h-screen bg-gray-800 text-white p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <ul>
                {userRole === 'admin' && (
                    <>
                        <li><Link to="/admin/dashboard">Admin Dashboard</Link></li>
                        <li><Link to="/admin/add-project">Add Project</Link></li>
                        <li><Link to="/admin/add-user">Add User</Link></li>
                        <li><Link to="/admin/project-list">Project List</Link></li>
                        <li><Link to="/admin/user-list">User List</Link></li>
                    </>
                )}
                {userRole === 'manager' && (
                    <>
                        <li><Link to="/manager/dashboard">Manager Dashboard</Link></li>
                        <li><Link to="/manager/add-task">Add Task</Link></li>
                        <li><Link to="/manager/task-list">Task List</Link></li>
                        <li><Link to="/manager/task-requests">Task Requests</Link></li>
                    </>
                )}
                {userRole === 'member' && (
                    <>
                        <li><Link to="/member/dashboard">Member Dashboard</Link></li>
                        <li><Link to="/member/task-list">Task List</Link></li>
                    </>
                )}
            </ul>
        </div>
    );
};

export default Sidebar;
