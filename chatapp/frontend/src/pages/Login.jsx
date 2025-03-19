import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { isAuthenticated, setAuthenticated } = useAuth();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/user/login", data, {
        withCredentials: true,
      });
      
      if (response.status === 200) {
        toast.success(response.data.message);
        setAuthenticated(true);
      }
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <section className="bg-dark min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md rounded-lg shadow border p-6 space-y-6">
        <h1 className="text-xl font-bold text-white text-center">Sign in to your account</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full border rounded-lg p-2"
              placeholder="name@company.com"
              value={data.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full border rounded-lg p-2"
              placeholder="••••••••"
              value={data.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-white">Remember me</label>
            </div>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
            Sign in
          </button>
          <p className="text-sm text-gray-400 text-center">
            Don’t have an account yet? 
            <Link to="/register" className="text-blue-500 hover:underline"> Sign up</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
