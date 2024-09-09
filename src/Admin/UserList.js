import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import UserCard from '../components/UserCard';

const UserList = () => {
    const url = 'http://localhost:3020/members-and-managers';
    const [members, setMembers] = useState([]);
    const [managers, setManagers] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    // Fetch users when the component mounts
    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch Users');
                }
            })
            .then((data) => {
                // Check if data.members and data.managers are arrays
                if (Array.isArray(data.members) && Array.isArray(data.managers)) {
                    setMembers(data.members);
                    setManagers(data.managers);
                } else {
                    setErrorMessage('Unexpected response format');
                }
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }, []);

    return (
        <div className="flex">
            <Sidebar userRole="admin" />
            <div className="flex-1">
                <Navbar userRole="admin" />
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-6">User List</h1>
                    {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Managers column */}
                        <div>
                            <h2 className="text-xl font-bold mb-4">Managers</h2>
                            {managers.length === 0 ? (
                                <div className="text-gray-800 text-xl text-center">No managers available</div>
                            ) : (
                                <div className="space-y-4">
                                    {managers.map(user => (
                                        <UserCard key={user._id} user={user} />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Members column */}
                        <div>
                            <h2 className="text-xl font-bold mb-4">Members</h2>
                            {members.length === 0 ? (
                                <div className="text-gray-800 text-xl text-center">No members available</div>
                            ) : (
                                <div className="space-y-4">
                                    {members.map(user => (
                                        <UserCard key={user._id} user={user} />
                                    ))}
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserList;
