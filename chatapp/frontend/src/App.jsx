import axios from "axios";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { baseUrl } from "../apiConfig";
import "./App.css";
import Profile from "./components/Profile";
import { AuthProvider, useAuth } from "./context/authContext";
import { ProfileProvider } from "./context/profileContext";
import ChatHome from "./pages/ChatHome";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail";

const Layout = () => {
  const { isAuthenticated, checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, [isAuthenticated]);

  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "users/:id/verify/:token", element: <VerifyEmail /> },
      { path: "chathome", element: <ChatHome /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

function App() {
  axios.defaults.baseURL = baseUrl;
  axios.defaults.withCredentials = true;

  return (
    <AuthProvider>
      <ProfileProvider>
        <RouterProvider router={router} />
        <Toaster />
      </ProfileProvider>
    </AuthProvider>
  );
}

export default App;