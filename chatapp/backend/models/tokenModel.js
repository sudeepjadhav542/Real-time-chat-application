const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
        unique: true
    },
    createdAt: { type: Date, default: Date.now },
    expiresAt: { type: Date, default: () => Date.now() + 3600000 }
});

const Token = mongoose.model("Token", tokenSchema); // ✅ Corrected `mongoose.model`
module.exports = Token;