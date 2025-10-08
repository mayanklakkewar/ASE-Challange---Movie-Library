import React, { useEffect, useState } from "react";
import MovieCard from "../CardComponent/MovieCard";
const tmdbApiKey = import.meta.env.VITE_TMDB_API_KEY;

function Home() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${tmdbApiKey}`,
    },
  };

  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [isSearched, setIsSearched] = useState(false);

  const Serching = useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setData(res.results))
      .catch((e) => console.log(e));
    setIsSearched(false);
  }, [isSearched]);

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => setData(res.results))
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearched(true);
    console.log(query);
  };
  return (
    <>
      <div className="my-4">
        <form onSubmit={handleSearch} class="max-w-md mx-auto">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 ps-10 text-sm text-gray-600 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search for Movies"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
            />
            <button
              type="submit"
              class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* //Home Content */}
      <div className="py-3 pb-13">
        <div className="">
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 ">
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
