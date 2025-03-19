import axios from "axios";
import React, { useEffect, useState } from "react";
import { useProfile } from "../context/profileContext";
import Nav from "./Chat/Nav";
import SelectAvatar from "./SelectAvatar";

const Profile = () => {
  const { userDetails } = useProfile();
  const [formData, setFormData] = useState({});
  const [selectedLink, setSelectedLink] = useState("");

  useEffect(() => {
    setFormData(userDetails);
  }, [userDetails]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("/api/user/profile/update", {
        ...formData,
        avatarLink: selectedLink,
      });
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="flex h-full min-h-screen bg-background">
      <Nav />
      <div className="bg-background w-[91%] flex items-center">
        <div className="max-w-xl mx-auto">
          <h2 className="mb-4 text-2xl font-bold text-white">Update Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div className="w-full">
                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-white">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="border text-sm rounded-lg w-full p-2"
                  value={formData?.firstName || ""}
                  placeholder="First Name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full">
                <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-white">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="border text-sm rounded-lg w-full p-2"
                  value={formData?.lastName || ""}
                  placeholder="Last Name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  disabled
                  className="border text-sm rounded-lg w-full p-2 bg-gray-200"
                  value={userDetails?.email || ""}
                  placeholder="Email"
                />
              </div>
            </div>
            <SelectAvatar setSelectedLink={setSelectedLink} selectedLink={selectedLink} />
            <div className="flex items-center space-x-4 mt-4">
              <button type="submit" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
