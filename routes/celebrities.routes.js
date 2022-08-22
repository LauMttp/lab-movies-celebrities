const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

router.post("/celebrities", async (req, res, next) => {
  try {
    const { name, occupation, catchPhrase } = req.body;
    const celebrityToBeCreated = {
      name,
      occupation,
      catchPhrase,
    };
    const createdCelebrity = await Celebrity.create(celebrityToBeCreated);
    res.status(201).json(createdCelebrity);
  } catch (error) {
    next(error);
  }
});

router.get("/celebrities", async (req, res, next) => {
  try {
    const allCelebrities = await Celebrity.find();
    res.json(allCelebrities);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
