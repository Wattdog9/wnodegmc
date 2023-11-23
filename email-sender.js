const nodemailer = require('nodemailer');

// Create a transporter using your email service configuration
const transporter = nodemailer.createTransport({
  service: 'your_email_service',
  auth: {
    user: 'your_email@example.com',
    pass: 'your_email_password',
  },
});

// Email message configuration
const mailOptions = {
  from: 'your_email@example.com',
  to: 'your_email@example.com',
  subject: 'Test Email',
  text: 'Hello, this is a test email!',
};

// Try to send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
