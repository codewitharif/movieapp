const mongoose = require("mongoose");

// Define the movie schema
const movieSchema = new mongoose.Schema({
  moviename: {
    type: String,
    required: true,
  },
  moviebanner: {
    type: String,
    required: true,
  },
  downloadlink: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the movie model using the schema
const Movie = mongoose.model("movies", movieSchema);

module.exports = Movie;
