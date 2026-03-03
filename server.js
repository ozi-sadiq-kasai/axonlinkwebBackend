import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import contactRoutes from "./routes/contactRoutes.js";
import waitlistRoutes from "./routes/waitlistRoutes.js";



const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);
app.use("/api/waitlist", waitlistRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 3000, () =>
      console.log("Server running")
    );
  })
  .catch((err) => console.log(err));
