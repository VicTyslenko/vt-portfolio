const express = require("express");

const collectionsConfig = require("../config/collectionsConfig");
const router = express.Router();

const mailer = require("../utils/nodemailer");

router.post("/:collectionName", async (request, response) => {
  const { name, email, message } = request.body;

  const mailOptions = {
    //Gmail service will check the 'from' value is equal to auth.user in transporter to
    from: `Victor ${process.env.USER_EMAIL}`,
    to: process.env.RECEIVER_EMAIL,
    replyTo: email,
    subject: "New contact message",
    text: `
          You have received a new message from the contact form:
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
  };

  const { collectionName } = request.params;

  const config = collectionsConfig[collectionName];

  if (!config) {
    return response.status(404).json({ message: "Collection not found" });
  }

  try {
    const document = new config.model(request.body);
    const savedDocument = await document.save();

    if (collectionName === "contacts") {
      await mailer(mailOptions);
    }
    response.status(201).json({ success: true, data: savedDocument });
  } catch (error) {
    console.error("Error saving document:", error);
    response.status(500).json({ message: `Error saving document in ${collectionName}` });
  }
});

module.exports = router;
