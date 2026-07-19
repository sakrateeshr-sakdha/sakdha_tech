import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, message } = body;

    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASSWORD;
    const to = process.env.SMTP_TO || "contact@sakdha.com";

    // If SMTP variables are missing, fallback gracefully by logging to console
    if (!host || !user || !pass) {
      console.log("--- CONTACT FORM INQUIRY RECEIVED ---");
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Phone: ${phone || "N/A"}`);
      console.log(`Company: ${company || "N/A"}`);
      console.log(`Service: ${service}`);
      console.log(`Message: ${message}`);
      console.log("-------------------------------------");
      console.warn("SMTP environment variables are not configured. Setup SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD in your environment.");
      
      return NextResponse.json({
        success: true,
        message: "Inquiry received locally (SMTP variables not set)."
      });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `"${name}" <${user}>`,
      replyTo: email,
      to,
      subject: `New Client Inquiry: ${service} from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 25px; line-height: 1.6; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #2563EB; margin-top: 0;">New Project Inquiry</h2>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 8px 0;"><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p style="margin: 8px 0;"><strong>Company:</strong> ${company || "N/A"}</p>
          <p style="margin: 8px 0;"><strong>Requested Service:</strong> ${service}</p>
          <p style="margin: 16px 0 8px 0;"><strong>Message / Scope Description:</strong></p>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #2563EB; white-space: pre-wrap; font-size: 14px;">${message}</div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Inquiry sent successfully via SMTP" });
  } catch (error: any) {
    console.error("Contact Form SMTP Error:", error);
    return NextResponse.json({ error: error.message || "Failed to process inquiry" }, { status: 500 });
  }
}
