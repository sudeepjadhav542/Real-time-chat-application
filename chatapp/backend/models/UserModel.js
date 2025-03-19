const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const passwordComplexity = require('joi-password-complexity');
require('dotenv').config();

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verified: { type: Boolean, default: false },
    verificationLinkSent: { type: Boolean, default: false },
    avatarLink: { type: String }
});

// Fix: Use a regular function, not an arrow function
userSchema.methods.generateAuthToken = function() {
    return jwt.sign({ _id: this._id, firstname: this.firstname, lastname: this.lastname, email: this.email },
        process.env.ACCESS_TOKEN_KEY, { expiresIn: '7d' }
    );
};

// Fix: Use `mongoose.model()`
const User = mongoose.model("User", userSchema);

const validateRegister = (data) => {
    const Schema = joi.object({
        firstname: joi.string().required().label("First Name"),
        lastname: joi.string().required().label("Last Name"), // Fix: "joi" not "jpi"
        email: joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password")
    });
    return Schema.validate(data);
};

const validateLogin = (data) => {
    const Schema = joi.object({
        email: joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password")
    });
    return Schema.validate(data);
};

module.exports = {
    User,
    validateRegister,
    validateLogin
};