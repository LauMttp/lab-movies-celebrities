const { Schema, Model, isValidObjectId, model } = require("mongoose");
const Celebrity = require("./Celebrity.model");
const Celebritie = require("./Celebrity.model");

const movieSchema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true,
  },
  genre: {
    type: Schema.Types.String,
    required: true,
  },
  plot: Schema.Types.String,
  cast: [
    {
      type: Schema.Types.ObjectId,
      ref: "Celebrity",
    },
  ],
});

const Movie = model("Movie", movieSchema);

module.exports = Movie;
