const { model, mongoose } = require("mongoose");

const contact = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  mobile: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: false,
  },
});

module.exports = model("contact", contact);
