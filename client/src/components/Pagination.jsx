import React, { useState, useEffect } from "react";
import axios from "axios";

const Pagination = ({ onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, [currentPage]); // Fetch data when currentPage changes

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3000/movies?page=${currentPage}&limit=8`
      );
      const { results, metadata } = response.data;
      if (metadata && metadata.totalPages !== undefined) {
        setTotalPages(metadata.totalPages);
        setMovies(results);
      } else {
        console.error(
          "Error: 'metadata' object or 'totalPages' property is undefined"
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = (page) => {
    setCurrentPage(page);
    onPageChange(page); // Notify parent component about page change
  };

  //   const renderMovies = () => {
  //     return movies.map((movie) => (
  //       <div key={movie.id}>
  //         <h3>{movie.title}</h3>
  //         <p>{movie.description}</p>
  //       </div>
  //     ));
  //   };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`join-item btn ${currentPage === i ? "active" : ""}`}
          onClick={() => handleClick(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div>
      {/* <div className="movie-list">
        {isLoading ? <p>Loading...</p> : renderMovies()}
      </div> */}
      <div
        className="join"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {renderPageNumbers()}
      </div>
    </div>
  );
};

export default Pagination;
