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

app.get("/getmovies", async (req, res) => {
  try {
    const movies = await Movie.find(); // Retrieve all movies from the database
    res.status(200).json(movies); // Send the movies as JSON response
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies." });
  }
});

//add movie api
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
// Define the base URL of the external API
const baseUrl = "http://localhost:3000";

//read movie api with pagination
app.get("/movies", async (req, res) => {
  try {
    // Parse query parameters for pagination
    const page = parseInt(req.query.page) || 1; // Current page, default is 1
    const limit = parseInt(req.query.limit) || 8; // Items per page, default is 8

    // Calculate start and end indexes for the subset of data
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    // Fetch all movies from the external API
    const response = await fetch(`${baseUrl}/getmovies`);
    const data = await response.json();

    // Slice the data array to get the subset for the current page
    const paginatedData = data.slice(startIndex, endIndex);

    // Calculate total number of pages
    const totalPages = Math.ceil(data.length / limit);

    // Construct pagination metadata
    const paginationInfo = {
      totalResults: data.length,
      totalPages: totalPages,
      currentPage: page,
      pageSize: paginatedData.length,
      hasNextPage: endIndex < data.length,
      hasPreviousPage: startIndex > 0,
    };

    // Construct response object
    const responseObj = {
      metadata: paginationInfo,
      results: paginatedData,
    };

    // Send the paginated data as a JSON response
    res.json(responseObj);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//search movie api
app.get("/search/:query", async (req, res) => {
  try {
    const query = req.params.query; // Get the query parameter from the route
    console.log(query);
    if (!query) {
      return res
        .status(400)
        .json({ message: "Search query is required", status: 400 });
    }

    // Perform a case-insensitive search for movies matching the query in the title field only
    const movies = await Movie.find({
      moviename: { $regex: query, $options: "i" }, // Case insensitive search
    });

    res.status(200).json({ movies, status: 200 }); // Send the matching movies as JSON response
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`server is running on port ${port} `);
});
