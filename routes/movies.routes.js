const { get } = require("mongoose");
const { post } = require(".");
const { findByIdAndDelete } = require("../models/Celebrity.model");

const router = require("express").Router();
const Movie = require("../models/Movie.model");

router.post("/movies", async (req, res, next) => {
  try {
    const { title, genre, plot, cast } = req.body;
    const movieToBeCreated = {
      title,
      genre,
      plot,
      cast,
    };
    const movieCreated = await Movie.create(movieToBeCreated);
    res.status(201).json(movieCreated);
  } catch (error) {
    next(error);
  }
});

router.get("/movies", async (req, res, next) => {
  try {
    const allMovies = await Movie.find().populate("cast");
    res.json(allMovies);
  } catch (error) {
    next(error);
  }
});

router.get("/movies/:id", async (req, res, next) => {
  try {
    const myMovie = await Movie.findById(req.params.id).populate("cast");
    res.json(myMovie);
  } catch (error) {
    next(error);
  }
});

router.patch("/movies/:id", async (req, res, next) => {
  try {
    const movieToBeUpdated = { ...req.body };
    const movieUpdated = await Movie.findByIdAndUpdate(
      req.params.id,
      movieToBeUpdated,
      { new: true }
    );
    res.status(200).json(movieUpdated);
  } catch (error) {
    next(error);
  }
});

router.delete("/movies/:id", async (req, res, next) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.status(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
