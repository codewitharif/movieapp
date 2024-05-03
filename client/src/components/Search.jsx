import React, { useState } from "react";

const Search = ({ setSearchQuery }) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    setSearchQuery(text); // Pass search query to parent component
  };

  return (
    <div className="flex justify-center mb-5">
      <div style={{ width: "80%" }}>
        <label className="input input-bordered flex items-center gap-2 mt-8">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            value={searchText}
            onChange={handleChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Search;
