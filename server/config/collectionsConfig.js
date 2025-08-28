const Project = require("../modules/projects.mongoose");

const Service = require("../modules/services.mongoose");
const Contact = require("../modules/contacts.mongoose");

const collectionsConfig = {
  projects: {
    model: Project,
    defaultPageSize: 4,
  },

  services: {
    model: Service,
    defaultPagesSize: 6,
  },
  contacts: {
    model: Contact,
  },
};

module.exports = collectionsConfig;
