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
      from: `"Portfolio Contact" <dilshanthathsara.me>`,
      to: process.env.SMTP_USER,
      subject: "New Contact Message",
      html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: auto; border: 1px solid #e2e2e2; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.05);">
          
          <!-- Header -->
          <div style="background-color: #4CAF50; color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">New Contact Message</h2>
          </div>
          
          <!-- Body -->
          <div style="padding: 20px;">
            <p style="font-size: 16px;">You have received a new message from your portfolio contact form:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
              <tr>
                <td style="font-weight: bold; padding: 8px; background-color: #f9f9f9;">Name:</td>
                <td style="padding: 8px;">${name}</td>
              </tr>
              <tr>
                <td style="font-weight: bold; padding: 8px; background-color: #f9f9f9;">Email:</td>
                <td style="padding: 8px;">${email}</td>
              </tr>
              <tr>
                <td style="font-weight: bold; padding: 8px; background-color: #f9f9f9;">Message:</td>
                <td style="padding: 8px;">${message}</td>
              </tr>
            </table>
            
            <p style="margin-top: 20px;">Regards,<br>Your Portfolio Website</p>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f1f1f1; color: #555; text-align: center; padding: 15px; font-size: 12px;">
            &copy; ${new Date().getFullYear()} Your Name. All rights reserved.
          </div>
        </div>
      </div>
      `,
});


    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
