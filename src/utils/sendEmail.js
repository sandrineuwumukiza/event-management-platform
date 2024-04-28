// utils/sendEmail.js

const nodemailer = require('nodemailer');

async function sendEmail(to, subject, text) {
 let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-password',
    },
 });

 let mailOptions = {
    from: 'your-email@gmail.com',
    to: to,
    subject: subject,
    text: text,
 };

 transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
 });
}

module.exports = sendEmail;
