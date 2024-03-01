const Project = require("../modules/projects.mongoose");
const PersonalInfo = require("../modules/personalInfo.mongoose");

const collectionsConfig = {
  projects: {
    model: Project,
    defaultPageSize: 4,
  },
  personalInfo: {
    model: PersonalInfo,
  },
};

module.exports = collectionsConfig;
