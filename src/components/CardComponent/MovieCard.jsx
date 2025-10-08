import React from "react";
import { Link } from "react-router-dom";
import { MovieProvider, useMovie } from "../../Context";
import { useState } from "react";

function MovieCard({
  id,
  imgUrl = "https://www.freeiconspng.com/uploads/no-image-icon-10.png",
  title = "Hay",
  overview = "hi",
}) {
  const { movie, addMovie } = useMovie();

  const imageUrl = imgUrl
    ? `https://image.tmdb.org/t/p/w500${imgUrl}`
    : `https://png.pngtree.com/png-vector/20221125/ourmid/pngtree-no-image-available-icon-flatvector-illustration-pic-design-profile-vector-png-image_40966566.jpg`;

  const addtoWishlist = (id, imageUrl, title, overview) => {
    alert(`${title} added to your Watchlist`);
    console.log(id, imageUrl, title, overview);
    addMovie(id, imageUrl, title, overview);
  };

  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
        <div>
          <img className="rounded-t-lg" src={imageUrl} alt="" />
        </div>
        <div className="p-5">
          <h5 className="mb-2 font-bold tracking-tight text-gray-900">
            {title}
          </h5>
          <p className="mb-3 text-xs text-gray-700">{overview}</p>
          <Link
            onClick={() => addtoWishlist(id, imageUrl, title, overview)}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Add to Watchlist
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
