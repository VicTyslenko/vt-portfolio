const { model, mongoose } = require("mongoose");

const aboutMe = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  experience: [
    {
      position: String,
      company: String,
      years: String,
    },
  ],
  skills: [String],
  education: [
    {
      degree: String,
      institution: String,
      year: Number,
    },
  ],
  contact: {
    email: String,
    phone: String,
    linkedin: String,
    github: String,
  },
});

module.exports = model("personalInfo", aboutMe);
