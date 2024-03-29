import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request) {
  const username = process.env.DUMMYMAIL;
  const password = process.env.PASSWORD;
  const myEmail = process.env.MAIL;
  const { name, email, subject, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com.",
    port: 587,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },

    auth: {
      user: username,
      pass: password,
    },
  });
  try {
    const mail = await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: email,
      subject: `${subject} from ${name}`,
      text: message
    });
    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
  }
}
