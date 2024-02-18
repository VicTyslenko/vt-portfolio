const { Router } = require("express");
const router = Router();

const personalInfo = require("../modules/personalInfo.mongoose.js");

router.get("/info", async (request, response) => {
  try {
    const info = await personalInfo.find();
    if (info) {
      response.status(200).json({
        success: true,
        data: info,
      });
    } else {
      response.status(404).json({ message: "no info found" });
    }
  } catch (error) {
    response.status(500).json({ message: "error get info" });
  }
});

module.exports = router;
