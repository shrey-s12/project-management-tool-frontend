import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar userRole="manager" />
            <div className="flex-1">
                <Navbar userRole="manager" />
                <div className="p-6">
                    <h1 className="text-3xl font-bold">Manager Dashboard</h1>
                    {/* Dashboard Content */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
