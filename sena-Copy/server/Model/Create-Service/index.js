const mongoose = require('mongoose');

const createServiceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        summary: {
            type: String,
            trim: true,
            required: true, //ask
        },
        packageName: {
            type: String,
            trim: true,
            required: true, //ask
        },
        price: {
            type: String,
            trim: true,
            required: true, //ask should store it as string or decimal ?
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('create-service', createServiceSchema);