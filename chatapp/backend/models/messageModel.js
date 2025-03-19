const mongoose = require('mongoose'); // ✅ Fixed typo: `mongoos` -> `mongoose`

const messageSchema = mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    recipient: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    text: { type: String, required: true } // ✅ Fixed `Text` -> `String`
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema); // ✅ Corrected `mongoose.model`
module.exports = Message;