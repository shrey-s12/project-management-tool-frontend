import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar userRole="member" />
            <div className="flex-1">
                <Navbar userRole="member" />
                <div className="p-6">
                    <h1 className="text-3xl font-bold">Member Dashboard</h1>
                    {/* Dashboard Content */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
