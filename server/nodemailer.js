const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD,
  },
});

const mailer = (message) => {
  transporter.sendMail(message, (error, info) => {
    if (error) return console.log({ error: error });
    console.log("Success", info);
  });
};

module.exports = mailer;
