import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const position = formData.get("position") as string;
    const coverLetter = formData.get("coverLetter") as string;
    const file = formData.get("resume") as File | null;

    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASSWORD;
    const to = process.env.SMTP_TO || "contact@sakdha.com";

    // Setup attachments array
    const attachments = [];
    if (file) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    // If SMTP variables are missing, fallback gracefully by logging to console
    if (!host || !user || !pass) {
      console.log("--- CAREERS APPLICATION RECEIVED ---");
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Position: ${position}`);
      console.log(`Cover Letter Length: ${coverLetter ? coverLetter.length : 0} chars`);
      console.log(`Has Attachment: ${file ? "Yes (" + file.name + ")" : "No"}`);
      console.log("-------------------------------------");
      console.warn("SMTP environment variables are not configured. Setup SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD in your environment.");

      return NextResponse.json({
        success: true,
        message: "Application received locally (SMTP variables not set)."
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
      subject: `New Job Application: ${position} from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 25px; line-height: 1.6; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #7C3AED; margin-top: 0;">New Job Application</h2>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="margin: 8px 0;"><strong>Candidate Name:</strong> ${name}</p>
          <p style="margin: 8px 0;"><strong>Email Address:</strong> ${email}</p>
          <p style="margin: 8px 0;"><strong>Applied Position:</strong> ${position}</p>
          <p style="margin: 8px 0;"><strong>Resume Attached:</strong> ${file ? file.name : "No"}</p>
          <p style="margin: 16px 0 8px 0;"><strong>Cover Note / Experience Summary:</strong></p>
          <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #7C3AED; white-space: pre-wrap; font-size: 14px;">${coverLetter || "No cover letter provided."}</div>
        </div>
      `,
      attachments,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Application sent successfully via SMTP" });
  } catch (error: any) {
    console.error("Careers Form SMTP Error:", error);
    return NextResponse.json({ error: error.message || "Failed to process application" }, { status: 500 });
  }
}
