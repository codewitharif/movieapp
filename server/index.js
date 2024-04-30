require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const db = require("./db/conn");
const Movie = require("./models/moviemodel");

const app = express();
const port = 3000;

// Middleware

app.use(cors());

app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).json("server is running...");
});

app.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find(); // Retrieve all movies from the database
    res.status(200).json(movies); // Send the movies as JSON response
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies." });
  }
});

app.post("/addmovie", async (req, res) => {
  const { moviename, moviebanner, downloadlink } = req.body;
  console.log(moviename, moviebanner, downloadlink);

  if (!moviename || !moviebanner || !downloadlink) {
    res.status(400).json("all fields are required...");
  } else {
    try {
      const newMovie = new Movie({ moviename, moviebanner, downloadlink });
      const savedMovie = await newMovie.save();
      res.status(201).json(savedMovie); // Send back the saved movie object
    } catch (error) {
      res.status(500).json({ error: "Failed to add the movie." });
    }
  }
});

app.listen(port, () => {
  console.log(`server is running on port ${port} `);
});
