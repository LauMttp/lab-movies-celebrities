const router = require("express").Router();
const moviesRouter = require("./movies.routes");
const celebritiesRouter = require("./celebrities.routes");
const { application } = require("express");

router.use("/", moviesRouter);
router.use("/", celebritiesRouter);
/* GET /

This is a health check. It allows us to see that the API is running.
*/
router.get("/", (req, res, next) =>
  res.json({ success: true, name: "lab-movies-celebrities" })
);

module.exports = router;
