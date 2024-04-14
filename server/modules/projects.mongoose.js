const { model, mongoose } = require("mongoose");

const project = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  imageFileName: {
    type: String,
  },
  link: {
    type: String,
  },
  descriptionImageName: {
    type: String,
  },
  technologies: {
    type: [String],
  },
  features: {
    type: [String],
  },
});

module.exports = model("project", project);
