const protect = require("../middleware/protect");
const Message = require("../models/messageModel");

const messageController = async(req, res) => {
    try {
        const { userId } = req.params;

        // Authenticate user
        const userData = await protect(req);
        if (!userData) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        const ourUserId = userData._id;

        console.log("userData:", userData);
        console.log("ourUserId:", ourUserId);
        console.log("userId:", userId);

        // Fetch messages between both users
        const messages = await Message.find({
            sender: { $in: [userId, ourUserId] },
            recipient: { $in: [userId, ourUserId] },
        }).sort({ createdAt: 1 });

        console.log("messages:", messages);
        return res.status(200).json(messages);

    } catch (error) {
        console.error("Error in messageController:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = messageController;