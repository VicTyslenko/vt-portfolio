const { Router } = require("express");
const router = Router();

const Project = require("../modules/projects.mongoose");

router.get("/projects", async (req, response) => {
  try {
    const projectsInfo = await Project.find();
    if (projectsInfo) {
      response.status(200).json({
        success: true,
        data: projectsInfo,
      });
    } else {
      response.status(404).json({ message: "projects not found" });
    }
  } catch (error) {
    response.status(500).json({ message: "error getting projects" });
  }
});

module.exports = router;
