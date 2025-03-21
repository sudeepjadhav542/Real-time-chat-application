import axios from "axios";
import React, { useEffect, useState } from "react";

const SelectAvatar = ({ setSelectedLink, selectedLink }) => {
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const response = await axios.get("/api/avatar/all");
        setAvatars(response.data.avatars);
      } catch (error) {
        console.error("Error fetching avatars:", error);
      }
    };
    fetchAvatars();
  }, []);

  return (
    <div className="mt-3">
      <p className="block mb-2 text-lg font-medium text-white">Choose Avatar</p>
      <div className="grid grid-cols-4 gap-2 mb-7">
        {avatars.map((avatar) => (
          <img
            key={avatar._id}
            src={avatar.link}
            onClick={() => setSelectedLink(avatar.link)}
            alt={`Avatar ${avatar._id}`}
            className={`rounded-full cursor-pointer p-2 bg-primary ${
              selectedLink === avatar.link ? "outline" : ""
            }`}
            style={{ width: "90px", height: "90px", margin: "5px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectAvatar;
