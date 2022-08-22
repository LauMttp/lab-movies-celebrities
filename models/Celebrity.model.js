const mongoose = require("mongoose");
const { Schema, Model } = require("mongoose");

const celebritySchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  occupation: {
    type: Schema.Types.String,
    enum: ["actor", "singer", "comedian", "unknown"],
    required: true,
  },
  catchPhrase: {
    type: Schema.Types.String,
    required: true,
  },
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;
