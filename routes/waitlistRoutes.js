import express from "express";
import Waitlist from "../models/Waitlist.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    await Waitlist.create(req.body);
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

export default router;
