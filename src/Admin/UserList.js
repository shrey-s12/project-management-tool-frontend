import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import UserCard from '../components/UserCard';
import api from '../api';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users from API
        api.get('/users').then(response => setUsers(response.data));
    }, []);

    return (
        <div className="flex">
            <Sidebar userRole="admin" />
            <div className="flex-1">
                <Navbar userRole="admin" />
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-6">User List</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {users.map(user => (
                            <UserCard key={user._id} user={user} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserList;
