// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
    const { name, email, company, message } = req.body || {};

    // Basic validation
    if (
        typeof name !== 'string' || !name.trim() ||
        typeof email !== 'string' || !email.trim() ||
        typeof message !== 'string' || !message.trim()
    ) {
        return res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
    }

    // Simple email format check
    if (typeof email !== 'string' || !email.includes('@') || !email.includes('.')) {
        return res.status(400).json({ success: false, error: 'Please enter a valid email address.' });
    }

    // Configure your email transport (replace with your real credentials)
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'utkarshshukla372@gmail.com',
            pass: 'uzqg xxos toxf wiai' // <-- Add your app password here
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: 'utkarshshukla372@gmail.com', // <-- Your receiving email address
            subject: `Contact Form Submission from ${name}`,
            text: `Company: ${company || 'N/A'}\nEmail: ${email}\nMessage: ${message}`,
        });
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));