import dotenv from "dotenv";
dotenv.config();

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ to, subject, html }) => {
  return await resend.emails.send({
    from: "Axonlink <axonlink@axonlink.ai>",
    to,
    subject,
    html,
  });
};

export default sendEmail;