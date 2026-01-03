import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String }, // Optional field per requirements
    category: { type: String, default: "General" },
}, { timestamps: true });

const contactModel = mongoose.models.contact || mongoose.model("contact", contactSchema);

export default contactModel;