import React from "react";

const MessageInputForm = ({
  selectedUserId,
  newMessage,
  setNewMessage,
  sendMessage,
}) => {
  return (
    <>
      {!!selectedUserId && (
        <form onSubmit={sendMessage} className="relative m-4 w-full">
          <input
            type="text"
            className="w-full px-4 py-3 rounded-xl bg-transparent border placeholder-gray-500"
            placeholder="Your Message"
            value={newMessage}
            onChange={(ev) => setNewMessage(ev.target.value)}
            required
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.769 59.769 0 0 1 3.269 20.875L6 12z"
              />
            </svg>
          </button>
        </form>
      )}
    </>
  );
};

export default MessageInputForm;