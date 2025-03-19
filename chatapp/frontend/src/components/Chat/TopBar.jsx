import React from "react";

const TopBar = ({ setSelectedUserId, selectedUserId, offlinePeople, onlinePeople }) => {
  const selectedUser = onlinePeople[selectedUserId] || offlinePeople[selectedUserId] || {};
  const isOnline = Boolean(onlinePeople[selectedUserId]);

  return (
    <div className="absolute right-2 text-white w-full py-5 bg-gray-800 flex items-center justify-between px-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 cursor-pointer"
        onClick={() => setSelectedUserId(null)}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
      </svg>
      {selectedUser.username || selectedUser.firstName ? (
        <div className="flex items-center gap-2">
          <span>{selectedUser.username || selectedUser.firstName}</span>
          <span className={`h-3 w-3 rounded-full ${isOnline ? "bg-green-500" : "bg-gray-500"}`}></span>
        </div>
      ) : (
        <span className="text-gray-400">No User Selected</span>
      )}
    </div>
  );
};

export default TopBar;
