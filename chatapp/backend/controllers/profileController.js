const jwt = require("jsonwebtoken");
const { User } = require("../models/UserModel");
const profile = {
    profileController: async(req, res) => {
        try {
            const token = req.cookie || req.cookie.authToken;
            if (!token) return res.status(401).json({ message: "No token provided" });

            jwt.verify(token, process.env.ACCESS_TOKEN_KEY, async(err, userData) => {
                if (err) return res.status(403).json({ message: "Invalid token" });

                const user = await User.findById(userData._id);
                if (!user) return res.status(404).json({ message: "User not found" });

                res.json(user);
            });
        } catch (error) {
            console.error("Error in profileController:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    },
    profileUpdate: async(req, res) => {
        try {
            const token = req.cookie && req.cookie.authToken;
            if (!token) return res.status(401).json({ message: "No token provided" });

            jwt.verify(token, process.env.ACCESS_TOKEN_KEY, async(err, userData) => {
                if (err) return res.status(403).json({ message: "Invalid token" });

                const { firstName, lastName, email, avatarLink } = req.body;
                const user = await User.findById(userData._id);
                if (!user) return res.status(404).json({ message: "User not found" });

                user.firstName = firstName || user.firstName;
                user.lastName = lastName || user.lastName;
                user.email = email || user.email;
                user.avatarLink = avatarLink || user.avatarLink;

                await user.save();
                res.json({ message: "Profile updated successfully", user });
            });
        } catch (error) {
            console.error("Error in profileUpdate:", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}



module.exports = profile;