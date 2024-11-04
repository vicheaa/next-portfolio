import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use another service or SMTP settings
      auth: {
        user: process.env.EMAIL_USER, // Your email address (setup in env)
        pass: process.env.EMAIL_PASSWORD, // Your email password (setup in env)
      },
    });

    // Create email options
    const mailOptions = {
      from: email,
      to: 'sarosereyvichea@gmail.com', // Your email address
      subject: `Contact Form Submission: ${subject}`,
      text: `
        You have a new message from your contact form.

        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
