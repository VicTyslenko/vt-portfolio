const { model, mongoose } = require("mongoose");

const service = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  shortDEscription: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  description: {
    type: [String],
    required: true,
  },
});

module.exports = model("service", service);
