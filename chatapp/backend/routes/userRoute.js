const express = require("express");
const registerController = require("../controllers/registerController"); // ✅ Correct Import
const loginController = require("../controllers/loginController");
const verifyEmail = require("../controllers/emailVerifyController");
const profile = require("../controllers/profileController");
const messageController = require("../controllers/messageController");
const peopleController = require("../controllers/peopleController");

const router = express.Router();

// Authentication Routes
router.post("/register", registerController); // ✅ Fix: Directly use registerController
router.post("/login", loginController);
router.get("/:id/verify/:token", verifyEmail);

// Profile Routes
router.get("/profile", profile.profileController);
router.put("/profile/update", profile.profileUpdate);

// Message Routes
router.get("/messages/:userId", messageController);

// People Routes
router.get("/people", peopleController);

module.exports = router;