import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import ManagerDashboard from './pages/ManagerDashboard';
import MemberDashboard from './pages/MemberDashboard';
import Tasks from './pages/Tasks';
import CompletedTasks from './pages/CompletedTasks';
import InProgressTasks from './pages/InProgressTasks';
import Todos from './pages/Todos';
import Trash from './pages/Trash';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/manager-dashboard" element={<ManagerDashboard />} />
        <Route path="/member-dashboard" element={<MemberDashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/completed-tasks" element={<CompletedTasks />} />
        <Route path="/in-progress-tasks" element={<InProgressTasks />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/trash" element={<Trash />} />
      </Routes>
    </Router>
  );
}

export default App;
