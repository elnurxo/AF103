require("dotenv").config();
const nodemailer = require("nodemailer");

async function sendVerifyEmail(email, token) {
  //send email with token
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailData = {
    from: process.env.EMAIL_USERNAME,
    to: email,
    subject: "Verify your Account (Spotify)",
    text: "That was easy!",
    html: `Click <b style="color:red;">here</b> to verify your account: http://localhost:7070/api/artists/verify/${token}`,
  };

  await transporter.sendMail(mailData);
}

module.exports = sendVerifyEmail;
