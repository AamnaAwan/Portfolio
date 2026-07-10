import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

const isEmailConfigured = Boolean(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD);

// Email endpoint
app.post('/api/send-email', async (req, res) => {
  const { name, email, message, subject } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (!isEmailConfigured) {
    return res.status(500).json({ error: 'Email service is not configured on the server.' });
  }

  try {
    // Send email to your inbox
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: subject || `New Portfolio Contact from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #7c3aed;">New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f3f4f6; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, '<br/>')}
          </p>
        </div>
      `
    });

    // Optional: Send confirmation email to user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'We received your message',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #7c3aed;">Thank You!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for reaching out! I have received your message and will get back to you as soon as possible.</p>
          <p>Best regards,<br/>Amna Awan</p>
        </div>
      `
    });

    res.json({ success: true, message: "Thanks! I'll get back to you as soon as I can." });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running' });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
