const express = require("express");
// const nodemailer = require("nodemailer");
const collectionsConfig = require("../config/collectionsConfig");
const router = express.Router();

const mailer = require("../nodemailer");

router.post("/:collectionName", async (request, response) => {
  const { name, email, message } = request.body;
  const mailOptions = {
    from: "vidrums86@gmail.com",
    to: "vidrums86@gmail.com",

    subject: "New contact message",
    text: `
          You have received a new message from the contact form:
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
  };

  mailer(mailOptions);

  const { collectionName } = request.params;

  const config = collectionsConfig[collectionName];

  if (!config) {
    return response.status(404).json({ message: "Collection not found" });
  }

  try {
    const document = new config.model(request.body);
    const savedDocument = await document.save();

    if (collectionName === "contacts") {
      // try {
      //   await transporter.sendMail(mailOptions);
      //   console.log("Email sent successfully");
      // } catch (error) {
      //   console.error("Error sending email:", error);
      //   return response.status(500).json({ success: false, message: "Failed to send email" });
      // }
    }

    response.status(201).json({ success: true, data: savedDocument });
  } catch (error) {
    console.error("Error saving document:", error);
    response.status(500).json({ message: `Error saving document in ${collectionName}` });
  }
});

module.exports = router;
