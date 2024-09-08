// import React, { useContext, useState } from 'react';
// import { DarkModeContext } from '../context/DarkModeContext'; // Import context
// import Sidebar from '../components/Sidebar'; // Import Sidebar component
// import { useNavigate } from 'react-router-dom';

// const AddTask = () => {

//     const { darkMode } = useContext(DarkModeContext);
//     const navigate = useNavigate();  // To navigate back after submission

//     // Task form state
//     const [task, setTask] = useState({
//         title: '',
//         description: '',
//         priority: '',
//         deadline: '',
//         status: ''
//     });

//     // Handle input changes
//     const handleChange = (e) => {
//         setTask({ ...task, [e.target.name]: e.target.value });
//     };

//     // Handle form submission
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Here you would typically make an API call to save the task
//         console.log('Task submitted:', task);

//         // Navigate back to task overview after adding the task
//         navigate('/admin-dashboard/tasks');
//     };

//     return (
//         <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
//             {/* Sidebar */}
//             <Sidebar />

//             {/* Main Content Area */}
//             <div className="flex-1 flex flex-col">
//                 <div className={`flex justify-between items-center ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 shadow`}>
//                     <h1 className="text-2xl font-bold">Trash Overview</h1>
//                     <div className="flex space-x-4">
//                         <button className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-blue-500' : 'bg-blue-500 text-white'}`}>
//                             Notifications
//                         </button>
//                         <button className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-red-500' : 'bg-red-500 text-white'}`}>
//                             Logout
//                         </button>
//                     </div>
//                 </div>

//                 {/* Main Area */}
//                 <div className="flex-1 flex items-center justify-center px-4 overflow-y-auto">
//                     <div className={`w-full max-w-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 shadow-lg rounded-lg`}>
//                         <h1 className="text-2xl font-bold mb-6 text-center">Add New Task</h1>

//                         <form onSubmit={handleSubmit} className="space-y-4">
//                             {/* Title */}
//                             <div>
//                                 <label className="block text-sm font-medium mb-2">Title</label>
//                                 <input
//                                     type="text"
//                                     name="title"
//                                     value={task.title}
//                                     onChange={handleChange}
//                                     className={`mt-1 block w-full p-3 border rounded-md focus:ring focus:ring-blue-500 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-100 border-gray-300'}`}
//                                     placeholder="Task title"
//                                     required
//                                 />
//                             </div>

//                             {/* Description */}
//                             <div>
//                                 <label className="block text-sm font-medium mb-2">Description</label>
//                                 <textarea
//                                     name="description"
//                                     value={task.description}
//                                     onChange={handleChange}
//                                     className={`mt-1 block w-full p-3 border rounded-md focus:ring focus:ring-blue-500 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-100 border-gray-300'}`}
//                                     placeholder="Task description"
//                                     rows="4"
//                                     required
//                                 />
//                             </div>

//                             {/* Priority */}
//                             <div>
//                                 <label className="block text-sm font-medium mb-2">Priority</label>
//                                 <select
//                                     name="priority"
//                                     value={task.priority}
//                                     onChange={handleChange}
//                                     className={`mt-1 block w-full p-3 border rounded-md focus:ring focus:ring-blue-500 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-100 border-gray-300'}`}
//                                     required
//                                 >
//                                     <option value="">Select priority</option>
//                                     <option value="High">High</option>
//                                     <option value="Medium">Medium</option>
//                                     <option value="Low">Low</option>
//                                 </select>
//                             </div>

//                             {/* Deadline */}
//                             <div>
//                                 <label className="block text-sm font-medium mb-2">Deadline</label>
//                                 <input
//                                     type="date"
//                                     name="deadline"
//                                     value={task.deadline}
//                                     onChange={handleChange}
//                                     className={`mt-1 block w-full p-3 border rounded-md focus:ring focus:ring-blue-500 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-100 border-gray-300'}`}
//                                     required
//                                 />
//                             </div>

//                             {/* Status */}
//                             <div>
//                                 <label className="block text-sm font-medium mb-2">Status</label>
//                                 <select
//                                     name="status"
//                                     value={task.status}
//                                     onChange={handleChange}
//                                     className={`mt-1 block w-full p-3 border rounded-md focus:ring focus:ring-blue-500 ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-100 border-gray-300'}`}
//                                     required
//                                 >
//                                     <option value="">Select status</option>
//                                     <option value="Not Started">Not Started</option>
//                                     <option value="In Progress">In Progress</option>
//                                     <option value="Completed">Completed</option>
//                                 </select>
//                             </div>

//                             {/* Submit Button */}
//                             <div className="text-center">
//                                 <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
//                                     Add Task
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default AddTask;