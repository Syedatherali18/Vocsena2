const mongoose = require('mongoose');

const signUpSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            trim: true,
            required: true, //ask
        },
        gender: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true
        },
        passcode: {
            type: String,
            required: true,
            minlength: 8,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('sign-up', signUpSchema);