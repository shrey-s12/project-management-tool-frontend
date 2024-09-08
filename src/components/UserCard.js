import React from 'react';

const UserCard = ({ user }) => {
    return (
        <div className="bg-white p-4 border rounded-lg shadow">
            <h3 className="text-xl font-bold">{user.name}</h3>
            <p className="text-gray-600">Email: {user.email}</p>
            <p className="text-gray-600">Role: {user.role}</p>
        </div>
    );
};

export default UserCard;
