const { Router } = require("express");
const router = Router();

const collectionsConfig = require("../config/collectionsConfig");

//getting mongoDB collections data by parameters

router.get("/:collectionName", async (request, response) => {
  const { collectionName } = request.params;
  const config = collectionsConfig[collectionName];
  if (!config) {
    return response.status(404).json({ message: "Collection not found" });
  }
  const page = parseInt(request.query.page, 10) || 1;
  const pageSize =
    parseInt(request.query.pageSize, 10) || config.defaultPageSize;

  try {
    const skip = (page - 1) * pageSize;
    const data = await config.model.find().skip(skip).limit(pageSize);
    const total = await config.model.countDocuments();

    response.status(200).json({
      success: true,
      data,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    });
  } catch (error) {
    response.status(500).json({ message: `Error getting ${collectionName}` });
  }
});

//getting collections' items by Id

router.get("/:collectionName/:_id", async (request, response) => {
  const { collectionName, _id } = request.params;

  const config = collectionsConfig[collectionName];

  if (!config) {
    return response.status(404).json({ message: "Collection not found" });
  }

  try {
    const item = await config.model.findById(_id);
    if (item) {
      response.status(200).json({
        success: true,
        data: item,
      });
    } else {
      response.status(404).json({
        message: `${collectionName} not found`,
      });
    }
  } catch (error) {
    response.status(500).json({
      message: `Error getting ${collectionName}`,
    });
  }
});

module.exports = router;
