import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "/api/user/register";
      const { data: res } = await axios.post(url, data);
      console.log(res.message);
      toast.success(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 300 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <section className="bg-dark">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full rounded-lg shadow border md:mt-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-wide">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2 text-sm font-medium">Your email</label>
                <input
                  onChange={handleChange}
                  value={data.email}
                  type="email"
                  name="email"
                  id="email"
                  className="border sm:text-sm rounded-lg block"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium">First Name</label>
                  <input
                    onChange={handleChange}
                    value={data.firstName}
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="John"
                    className="border sm:text-sm rounded-lg block"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Last Name</label>
                  <input
                    onChange={handleChange}
                    value={data.lastName}
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Doe"
                    className="border sm:text-sm rounded-lg block"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Password</label>
                <input
                  onChange={handleChange}
                  value={data.password}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="border sm:text-sm rounded-lg block"
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border focus:ring-3 bg-transparent"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-light text-gray-300">
                    I accept the{" "}
                    <a className="font-medium text-indigo-400 hover:underline" href="#">
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button type="submit" className="w-full text-white focus:ring-4 focus:ring-indigo-500">
                Create an account
              </button>
              <p className="text-sm font-light text-gray-400">
                Already have an account?{" "}
                <Link to={"/login"} className="font-medium text-indigo-400 hover:underline">
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
