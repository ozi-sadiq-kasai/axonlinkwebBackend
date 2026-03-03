import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    purpose: String,
    role: String,
    name: String,
    email: String,
    message: String,
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
