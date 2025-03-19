import React from "react";
import Avatar from "./Avatar";

const Contact = ({
  userId,
  username,
  selectedUserId,
  setSelectedUserId,
  isOnline,
  avatarLink,
}) => {
  return (
    <li
      key={userId}
      className={`${
        selectedUserId === userId ? "bg-primary" : ""
      } capitalize py-2 lg:py-3 px-2 lg:px-5 rounded-[1.3rem] cursor-pointer flex items-center gap-3`}
      onClick={() => setSelectedUserId(userId)}
    >
      <Avatar userId={userId} username={username} isOnline={isOnline} avatarLink={avatarLink} />
      <span className="text-xs lg:text-base text-center flex-grow truncate">{username}</span>
      {isOnline && (
        <span className="text-xs rounded-full bg-green-500 px-2 py-1 text-white">Active</span>
      )}
    </li>
  );
};

export default Contact;