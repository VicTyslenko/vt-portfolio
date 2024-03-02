const Project = require("../modules/projects.mongoose");
const PersonalInfo = require("../modules/personalInfo.mongoose");
const Service = require("../modules/services.mongoose");
const collectionsConfig = {
  projects: {
    model: Project,
    defaultPageSize: 4,
  },

  services: {
    model: Service,
    defaultPagesSize: 6,
  },
};

module.exports = collectionsConfig;
