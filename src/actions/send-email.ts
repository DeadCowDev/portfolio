"use server";

import ContactFormEmail from "@/email/contact";
import { Contact } from "@/models";
import { render } from "@react-email/components";
import nodemailer from "nodemailer";
import React from "react";

const emails = process.env.EMAILS?.split(",") ?? [];

export async function sendEmail(info: Contact) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
    });

    const body = React.createElement(ContactFormEmail, info);

    await transporter.sendMail({
      from: `Contact Form ${process.env.NODEMAILER_EMAIL}`,
      to: emails,
      subject: "New project contact",
      html: render(body),
      replyTo: info.email,
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
