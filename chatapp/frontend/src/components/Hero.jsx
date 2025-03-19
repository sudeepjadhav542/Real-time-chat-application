import { Link } from "react-router-dom";
import hero from "../assets/hero.png";
import { useAuth } from "../context/authContext";

const Hero = () => {
  const { isAuthenticated } = useAuth();

  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="grid max-w-screen-xl px-4 mx-auto lg:grid-cols-12 gap-8">
        {/* Left Text Section */}
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-tight md:text-5xl">
            Swift Chat: Instant Connections, Effortless Conversations
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg">
            Connect Seamlessly, Chat Effortlessly: Elevate Your Conversations with Our Intuitive Chat Application!
          </p>

          {/* Authentication-based Buttons */}
          {!isAuthenticated ? (
            <>
              <Link
                to="/login"
                className="inline-flex items-center justify-center px-6 py-3 mr-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Login
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10 10.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-gray-900 bg-white rounded-lg hover:bg-gray-200"
              >
                Register
              </Link>
            </>
          ) : (
            <Link
              to="/chathome"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
            >
              Chat Home
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10 10.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          )}
        </div>

        {/* Right Image Section */}
        <div className="hidden lg:flex lg:col-span-5 justify-center">
          <img src={hero} alt="Chat App Mockup" className="w-full max-w-md rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
