const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    createdBy: { type: mongoose.Types.ObjectId, ref: "User", required: [true, "Must required creator"] },
    name: { type: String, required: [true, "Name required"], trim: true },
    image: { type: String, required: [true, "Image required"], trim: true },
    desc: { type: String, default: "" },
    price: { type: Number, required: [true, "Price required"], trim: true },
    stock: { type: Number, required: [true, "Stock required"], trim: true },
    rating: { type: Number, default: 0 },
    brand: { type: String, default: "No Brand" },
}, { timestamps: true })

module.exports = mongoose.model("product", productSchema)