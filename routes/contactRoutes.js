import express from "express";
import Contact from "../models/Contact.js";
import sendEmail from "../utils/sendEmail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, role, purpose, message } = req.body;

    if (!name || !email || !role || !purpose || !message) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }

    const contact = await Contact.create({
      name,
      email,
      role,
      purpose,
      message,
    });

    await sendEmail({
      to: "axonlink@axonlink.ai",
      subject: "New Contact Submission",
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Role:</strong> ${role}</p>
        <p><strong>Purpose:</strong> ${purpose}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    await sendEmail({
      to: email,
      subject: "We received your message",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting Axonlink. We’ll respond shortly.</p>
      `,
    });

    res.status(201).json({ success: true });

  } catch (error) {
    console.error("Contact route error:", error);
    res.status(500).json({ success: false });
  }
});

export default router;