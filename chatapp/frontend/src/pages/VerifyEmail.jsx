import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/authContext";

const VerifyEmail = () => {
  const { id, token } = useParams();
  const [loading, setLoading] = useState(false);
  const { isAuthenticated, checkAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, checkAuth, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/user/${id}/verify/${token}`);
        toast.success(response.data.message);
      } catch (error) {
        toast.error(error.response?.data?.message || "Verification failed");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, token]);

  return (
    <div className="bg-dark min-h-screen text-white flex justify-center items-center flex-col">
      {loading ? (
        <div className="mb-10 flex flex-col items-center" role="status">
          <svg
            aria-hidden="true"
            className="w-20 h-20 animate-spin fill-primarySecondary"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116"
              fill="currentFill"
            />
          </svg>
          <span className="my-4 text-lg">Loading...</span>
        </div>
      ) : (
        <span className="my-4 text-xl font-medium">Verification Successful!</span>
      )}

      {!loading && !isAuthenticated && (
        <Link
          to={"/login"}
          className="inline-flex items-center justify-center px-4 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Login
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.4"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      )}
    </div>
  );
};

export default VerifyEmail;