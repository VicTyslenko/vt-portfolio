const { Router } = require("express");
const router = Router();

const collectionsConfig = require("../config/collectionsConfig");

router.post("/:collectionName", async (request, response) => {
  const { collectionName } = request.params;
  const config = collectionsConfig[collectionName];

  if (!config)
    response.status(404).json({
      message: "Collection not found",
    });
  try {
    const existingDocument = await config.model.findOne({
      email: request.body.email,
    });

    if (existingDocument) {
      return response.status(409).json({
        message: "This email already exists",
      });
    
    }

    const document = new config.model(request.body);
    const savedDocument = await document.save();
    response.status(201).json({
      success: true,
      data: savedDocument,
    });
  } catch (error) {
    response.status(500).json({
      message: `Error saving document in ${collectionName}`,
    });
  }
});

module.exports = router;
