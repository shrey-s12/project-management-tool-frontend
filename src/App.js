import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './Admin/Dashboard';
import AddProject from './Admin/AddProject';
import AddUser from './Admin/AddUser';
import ProjectList from './Admin/ProjectList';
import UserList from './Admin/UserList';
import ManagerDashboard from './Manager/Dashboard';
import AddTask from './Manager/AddTask';
import TaskList from './Manager/TaskList';
import TaskRequests from './Manager/TaskRequests';
import MemberDashboard from './Member/Dashboard';
import MemberTaskList from './Member/TaskList';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route path="/" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-project" element={<AddProject />} />
        <Route path="/admin/add-user" element={<AddUser />} />
        <Route path="/admin/project-list" element={<ProjectList />} />
        <Route path="/admin/user-list" element={<UserList />} />

        {/* Manager Routes */}
        <Route path="/manager/dashboard" element={<ManagerDashboard />} />
        <Route path="/manager/add-task" element={<AddTask />} />
        <Route path="/manager/task-list" element={<TaskList />} />
        <Route path="/manager/task-requests" element={<TaskRequests />} />

        {/* Member Routes */}
        <Route path="/member/dashboard" element={<MemberDashboard />} />
        <Route path="/member/task-list" element={<MemberTaskList />} />
      </Routes>
    </Router>
  );
};

export default App;