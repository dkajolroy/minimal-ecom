const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    avatar: { type: String, default: '' },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    address: {
        city: { type: String },
        zip: { type: Number },
        country: { type: String }
    }
}, { timestamps: true })

module.exports = mongoose.model("user", userSchema)