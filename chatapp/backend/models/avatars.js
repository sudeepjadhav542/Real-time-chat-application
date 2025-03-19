const mongoose = require('mongoose');

const avatarSchema = mongoose.Schema({
    link: {
        type: String,
        required: true,
        default: "https://i.imgur.com/qGsYvAK.png"
    }
}, { timestamps: true });

const Avatar = mongoose.model('Avatar', avatarSchema); // ✅ Corrected `mongoose.model`
module.exports = Avatar;