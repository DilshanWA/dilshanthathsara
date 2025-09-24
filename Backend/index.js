const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const { admin, db } = require("./config/firebase"); // Firebase config

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // put your gmail in .env
    pass: process.env.EMAIL_PASS  // app password, not normal password
  },
    tls: { rejectUnauthorized: false }
});


app.get('/API/PERSON', (req, res) => {

})

// POST route for form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save data to Firestore
    await db.collection("contacts").add({
      name,
      email,
      message,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    // Send email
    await transporter.sendMail({
    from: `Portfolio Contact Form <${process.env.EMAIL_USER}>`, // your Gmail
    to: process.env.EMAIL_USER, // send to yourself
    subject: `New Contact Form Submission from ${name}`,
    html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
        <h2 style="color: #333;">New Message from Portfolio Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="background: #f9f9f9; padding: 10px; border-radius: 5px;">${message}</p>
        <hr style="margin: 20px 0;">
        <p style="color: #888; font-size: 12px;">This is an automated notification from your portfolio website.</p>
        </div>
    `,
    });


    res.status(200).json({ success: true, message: "Form submitted and email sent successfully" });

  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
