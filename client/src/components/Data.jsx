import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import Search from "./Search";

const Data = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, [currentPage, searchQuery]); // Trigger fetch data when currentPage or searchQuery changes

  const fetchData = async () => {
    setLoading(true);
    try {
      let url = `https://movieappserver.vercel.app/movies?page=${currentPage}&limit=8`;
      if (searchQuery) {
        url = `https://movieappserver.vercel.app/search/${searchQuery}`;
      }
      const response = await fetch(url);
      if (response.status != 200) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data);
      if (searchQuery) {
        // If it's a search query, set the data directly
        setMovies(data.movies || []);
        console.log("searched data is", data);
      } else {
        // If it's not a search query, set the results from pagination
        setMovies(data.results || []);
        console.log("by default data is", data.results);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page when performing a new search
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto px-5 py-12">
        <Search setSearchQuery={handleSearch} />
        <h1 className="text-center text-2xl md:text-4xl font-medium mb-8">
          Movie List
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            movies.map((movie, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <div className="h-64 overflow-hidden rounded-t-lg">
                  <img
                    src={movie.moviebanner}
                    alt={movie.moviename}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-2">
                  <h2 className="text-base md:text-lg lg:text-xl font-medium mb-1">
                    {movie.moviename}
                  </h2>
                  <a
                    className="text-xs md:text-sm text-gray-700"
                    href={movie.downloadlink}
                  >
                    Download
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
        <br />
        <br />
        <Pagination onPageChange={handlePageChange} />
      </div>
    </section>
  );
};

export default Data;
