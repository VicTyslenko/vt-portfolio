const { model, mongoose } = require("mongoose");

const project = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type:String,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = model("project", project);
