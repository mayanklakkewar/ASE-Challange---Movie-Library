import React, { useEffect, useState } from "react";
import MovieCard from "../CardComponent/MovieCard"; // Importing the MovieCard component to display individual movies

// TMDB API key is stored securely in environment variables (.env file)
const tmdbApiKey = import.meta.env.VITE_TMDB_API_KEY;

function Home() {
  // API request options including authorization header
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${tmdbApiKey}`, // Using Bearer token authentication for TMDB API
    },
  };

  // Base URL to fetch popular movies
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  // State variables
  const [data, setData] = useState([]); // Stores list of movies fetched from API
  const [query, setQuery] = useState(""); // Stores search query input by the user
  const [isSearched, setIsSearched] = useState(false); // Flag to trigger a search request

  // 🔍 useEffect for Searching Movies (Triggered when user searches)
  const Serching = useEffect(() => {
    if (!isSearched) return; // Prevents fetching when not triggered

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setData(res.results)) // Update movie data with search results
      .catch((e) => console.log(e));

    setIsSearched(false); // Reset search flag after search completes
  }, [isSearched]); // Runs whenever isSearched changes

  // 🎥 useEffect for Fetching Popular Movies on Initial Page Load
  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => setData(res.results)) // Update state with popular movies
      .catch((err) => console.log(err));
  }, []); // Empty dependency ensures this runs only once when the component mounts

  // Function to handle user search
  const handleSearch = (e) => {
    e.preventDefault(); // Prevents page reload on form submit
    setIsSearched(true); // Triggers the search useEffect
    console.log(query); // Logs search query to console (for debugging)
  };

  return (
    <>
      {/* 🔎 Search Bar Section */}
      <div className="my-4">
        <form onSubmit={handleSearch} className="max-w-md mx-auto">
          {/* Hidden label for accessibility */}
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>

          <div className="relative">
            {/* Search icon inside input field */}
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>

            {/* Input field for movie search */}
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-600 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for Movies"
              value={query}
              onChange={(e) => setQuery(e.target.value)} // Update query as user types
              required
            />

            {/* Search button */}
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* 🎬 Home Content Section */}
      <div className="py-3 pb-13">
        <div className="">
          {/* Movie Grid Layout */}
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Render each movie using the MovieCard component */}
            {data.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                imgUrl={movie.poster_path}
                title={movie.original_title || movie.name}
                overview={movie.overview || "No Description"}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
