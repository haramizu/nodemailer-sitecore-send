import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import nodemailer from "nodemailer";

const sendMail = async () => {
  const transporter = nodemailer.createTransport({
    host: "smtp.mailendo.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const options = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject: "Hello world from Moosend",
    text: "This email sent from nodemailer using SMTP Service of Moosend / Sitecore Send",
  };

  await transporter.sendMail(options);
};

sendMail();
