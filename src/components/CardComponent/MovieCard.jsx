import React from "react";
import { Link } from "react-router-dom";
import { useMovie } from "../../Context"; // Import custom hook to access movie context
import { useState } from "react";

// 🎬 MovieCard component — displays individual movie info and allows adding to wishlist
function MovieCard({
  id,
  // Default image URL if the movie poster is not available
  imgUrl = "https://www.freeiconspng.com/uploads/no-image-icon-10.png",
  // Default title and overview if data is missing
  title = "No title Available",
  overview = "No overview Available",
}) {
  // Access global movie context (list of movies + addMovie function)
  const { movie, addMovie } = useMovie();

  // Construct full image URL for TMDB movie posters
  const imageUrl = imgUrl
    ? `https://image.tmdb.org/t/p/w500${imgUrl}` // Use TMDB base URL
    : `https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg`; // Fallback image

  // Function to handle adding the movie to the wishlist
  const addtoWishlist = (id, imageUrl, title, overview) => {
    alert(`${title} added to your Watchlist`); // Show confirmation alert
    console.log(id, imageUrl, title, overview); // Log movie details in console
    addMovie(id, imageUrl, title, overview); // Call context function to update movie list
  };

  return (
    <>
      {/* Movie Card Container */}
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Movie Poster Section */}
        <div>
          <img className="rounded-t-lg" src={imageUrl} alt={title} />
        </div>

        {/* Movie Details Section */}
        <div className="p-5">
          {/* Movie Title */}
          <h5 className="mb-2 font-bold tracking-tight text-gray-900">
            {title}
          </h5>

          {/* Short Movie Overview */}
          <p className="mb-3 text-xs text-gray-700">{overview}</p>

          {/* Add to Watchlist Button */}
          <Link
            onClick={() => addtoWishlist(id, imageUrl, title, overview)}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Add to Watchlist
            {/* Small right arrow icon inside button */}
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
