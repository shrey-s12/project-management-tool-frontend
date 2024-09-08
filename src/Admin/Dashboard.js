import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Calendar from 'react-calendar'; // Import Calendar component
import 'react-calendar/dist/Calendar.css'; // Import Calendar styles

const Dashboard = () => {
    const [date, setDate] = useState(new Date());
    const navigate = useNavigate();

    // Handle date selection and redirect to Add Project page
    const handleDateChange = (selectedDate) => {
        setDate(selectedDate);
        navigate(`/admin/add-project`, {
            state: { deadline: selectedDate }, // Pass the selected date as state
        });
    };

    return (
        <div className="flex bg-gray-100 min-h-screen">
            <Sidebar userRole="admin" />
            <div className="flex-1">
                <Navbar userRole="admin" />
                <div className="p-6">
                    <h1 className="text-4xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

                    {/* Dashboard Content */}
                    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Cards Column */}
                        <div className="space-y-6">
                            <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105">
                                <h2 className="text-xl font-semibold text-gray-700 mb-4">Total Users</h2>
                                <p className="text-5xl font-bold text-blue-500">345</p>
                            </div>

                            <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105">
                                <h2 className="text-xl font-semibold text-gray-700 mb-4">Total Projects</h2>
                                <p className="text-5xl font-bold text-green-500">78</p>
                            </div>

                            <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105">
                                <h2 className="text-xl font-semibold text-gray-700 mb-4">Reports Generated</h2>
                                <p className="text-5xl font-bold text-red-500">15</p>
                            </div>
                        </div>

                        {/* Calendar Column */}
                        <div className="p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Project Calendar</h3>
                            {/* Calendar Component */}
                            <Calendar
                                onChange={handleDateChange} // Redirect on date change
                                value={date}
                                className="w-full m-auto border border-gray-500 rounded-lg"
                            />
                            <p className="text-gray-600 mt-4 text-center">
                                Selected date: <span className="font-bold">{date.toDateString()}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
