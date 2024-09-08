import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext';

import Login from './pages/Login';
import AdminDashboard from './pages/admin/AdminDashboard';
import AddProjects from './pages/admin/AddProjects';
import AllProjects from './pages/admin/AllProjects';
import Signup from './pages/admin/Signup';
import UserProfile from './pages/UserProfile';
import ManagerDashboard from './pages/manager/ManagerDashboard';
import MemberDashboard from './pages/member/MemberDashboard';
// import Tasks from './pages/Tasks';
// import CompletedTasks from './pages/CompletedTasks';
// import InProgressTasks from './pages/InProgressTasks';
// import Todos from './pages/Todos';
// import Trash from './pages/Trash';
// import AddTask from './pages/AddTask';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-dashboard/addProjects" element={<AddProjects />} />
          <Route path="/admin-dashboard/Projects" element={<AllProjects />} />
          <Route path="/admin-dashboard/signup" element={<Signup />} />
          <Route path="/admin-dashboard/user-profile" element={<UserProfile />} />
          <Route path="/manager-dashboard" element={<ManagerDashboard />} />
          <Route path="/member-dashboard" element={<MemberDashboard />} />
          {/* <Route path="/admin-dashboard/tasks" element={<Tasks />} />
          <Route path="/admin-dashboard/completed-tasks" element={<CompletedTasks />} />
          <Route path="/admin-dashboard/in-progress-tasks" element={<InProgressTasks />} />
          <Route path="/admin-dashboard/todos" element={<Todos />} />
          <Route path="/admin-dashboard/trash" element={<Trash />} /> 
          <Route path="/admin-dashboard/add-task" element={<AddTask />} /> */}
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
