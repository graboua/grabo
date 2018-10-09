const nodemailer = require('nodemailer');
const config = require('../config');

const transporter = nodemailer.createTransport({
  service:  'Mailgun',
  auth: {
    user: config.get('EMAIL_USER'),
    pass: config.get('EMAIL_PASS')
  }
});

module.exports = transporter;