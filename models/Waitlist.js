import mongoose from "mongoose";

const waitlistSchema = new mongoose.Schema(
  {
    email: String,
    role: String,
  },
  { timestamps: true }
);

export default mongoose.model("Waitlist", waitlistSchema);
