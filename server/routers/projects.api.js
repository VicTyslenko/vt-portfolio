const { Router } = require("express");
const router = Router();

const Project = require("../modules/projects.mongoose");

router.get("/projects", async (req, response) => {
  const page = parseInt(req.query.page, 10) || 1;

  const pageSize = parseInt(req.query.pageSize, 10) || 4;
  try {
    const skip = (page - 1) * pageSize;

    const projectsInfo = await Project.find().skip(skip).limit(pageSize);
    const total = await Project.countDocuments();

    if (projectsInfo.length) {
      response.status(200).json({
        success: true,
        data: projectsInfo,
        total,
        page,
        pageSize,
        totalPages: Math.ceil(total / pageSize),
      });
    } else {
      response.status(404).json({ message: "projects not found" });
    }
  } catch (error) {
    response.status(500).json({ message: "error getting projects" });
  }
});

//get request for project by id
router.get("/projects/:projectId", async (request, response) => {
  try {
    const projectId = request.params.projectId;
    const project = await Project.findById(projectId);
    if (project) {
      response.status(200).json({
        success: true,
        data: project,
      });
    } else {
      response.status(400).json({
        message: "Project not found",
      });
    }
  } catch (error) {
    response.status(500).json({ message: "Error getting project" });
  }
});

module.exports = router;
