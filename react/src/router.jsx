import { createBrowserRouter } from "react-router-dom";
// import App from "./App";
import { Login } from "./views/Login";
import { Dashboard } from "./views/Dashboard";
import { AdminDashboard } from "./views/admin/AdminDashboard"
import { UserDashboard } from "./views/user/UserDashboard"
import Register from "./views/Register";

const router = createBrowserRouter([
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/admin-dashboard',
    element: <AdminDashboard />
  },
  {
    path: '/user-dashboard',
    element: <UserDashboard />
  }
])

export default router;