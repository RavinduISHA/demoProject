import { Navigate, createBrowserRouter } from "react-router-dom";
// import App from "./App";
import { Login } from "./views/Login";
import { Dashboard } from "./views/Dashboard";
// import { AdminDashboard } from "./views/admin/AdminDashboard"
// import { UserDashboard } from "./views/user/UserDashboard"
import Register from "./views/Register";
import { GuestLayout } from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import { Chat } from "./views/Chat";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Navigate to="/" />
      },
      {
        path: '/',
        element: <Dashboard />
      },
      {
        path: '/chat',
        element: <Chat />
      },
    ]
  },
  
  // {
  //   path: '/admin-dashboard',
  //   element: <AdminDashboard />
  // },
  // {
  //   path: '/user-dashboard',
  //   element: <UserDashboard />
  // }
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
    ]
  },
])

export default router;