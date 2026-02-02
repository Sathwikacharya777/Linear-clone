"use server";

import { Resend } from "resend";

// Initialize Resend with your secret key from the .env file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  const RECIPIENT_EMAIL = "sathwikacharyaofficial@gmail.com";

  // 1. Extract data from the form
  const name = formData.get("fullname") as string;
  const email = formData.get("email") as string;
  const companySize = formData.get("companySize") as string;
  const message = formData.get("message") as string;

  try {
    // 2. Send the actual email using Next.js Server Logic
    const { data, error } = await resend.emails.send({
      from: "Linear-Clone <onboarding@resend.dev>", // Resend's default testing domain
      to: [RECIPIENT_EMAIL],
      subject: `🚀 New Inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #5e6ad2;">New Linear-Clone Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company Size:</strong> ${companySize}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
            ${message}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false };
    }

    console.log("Email sent successfully to:", RECIPIENT_EMAIL);
    return { success: true };

  } catch (err) {
    console.error("Server Crash:", err);
    return { success: false };
  }
}