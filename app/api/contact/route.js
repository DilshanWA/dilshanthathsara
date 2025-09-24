// app/api/contact/route.js
import { db } from "@/lib/firebaseAdmin";
import { transporter } from "@/lib/nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, message } = data;

    // Save to Firebase
    await db.collection("contacts").add({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    // Send email notification
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: "New Contact Message",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
