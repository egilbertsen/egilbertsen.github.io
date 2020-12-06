const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tools: { type: String, required: true },
  image: { type: String, required: true },
  altTxt: { type: String, required: true },
  repo:{ type: String, required: true },
  launchedApp: { type: String, required: true }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
