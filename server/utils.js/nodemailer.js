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

const mailer = async (message) => {
  try {
    const info = await transporter.sendMail(message);
    console.log("Success send email!", info);

    return info;
  } catch (error) {
    console.log(error);
  }
};

module.exports = mailer;
