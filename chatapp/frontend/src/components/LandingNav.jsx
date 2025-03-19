import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const LandingNav = () => {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="bg-dark p-4">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Swift Logo"
          />
          <span className="text-2xl font-semibold text-white">Swift-Chat</span>
        </Link>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="md:hidden p-2 w-10 h-10 flex items-center justify-center rounded"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className="hidden md:flex gap-3">
          <Link
            to={isAuthenticated ? "/chathome" : "/login"}
            className="py-2 px-4 text-white hover:text-gray-400"
          >
            {isAuthenticated ? "Home" : "Login"}
          </Link>
          <Link to="/contact" className="py-2 px-4 text-white hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LandingNav;
