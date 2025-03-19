const express = require("express");
const avatarController = require("../controllers/avatarController"); // Fixed Import

const router = express.Router();

// Route to upload or create an avatar
router.post("/", avatarController.avatarController);

// Route to fetch all avatars
router.get("/all", avatarController.getAllAvatars);

module.exports = router;