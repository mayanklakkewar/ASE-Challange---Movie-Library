import React from "react";
import { useMovie } from "../../Context"; // Import custom hook to access movie context

function Wishlist() {
  // Destructure movie list and delete function from context
  const { deleteMovie, movie } = useMovie();

  // Function to handle movie deletion and show alert
  const deleteEle = (id) => {
    deleteMovie(id);
    alert("Movie Removed Successfully");
  };

  return (
    // Main grid container for displaying wishlist items
    <div className="grid grid-cols-2 gap-3 py-5">
      {movie.length > 0 ? (
        // If there are movies in the wishlist, map through them
        movie.map((ele) => (
          // Movie card container with image and info
          <div
            key={ele.id} // Always add a key when mapping elements
            className="flex bg-white rounded-lg shadow-sm overflow-hidden max-w-2xl mx-auto"
          >
            {/* Movie poster image */}
            <img className="w-1/3 object-cover" src={ele.imgUrl} alt="Movie" />

            {/* Right section: title, overview, and remove button */}
            <div className="flex flex-col justify-between p-4 w-2/3">
              <div>
                {/* Movie title */}
                <h2 className="text-sm font-semibold text-gray-900 mb-2">
                  {ele.title}
                </h2>

                {/* Short overview/description */}
                <p className="text-xs text-gray-600">{ele.overview}</p>
              </div>

              {/* Remove button aligned to the right */}
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => deleteEle(ele.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-xs font-medium"
                >
                  Remove from Watchlist
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        // Message displayed when no movies are in the wishlist
        <div className="flex items-center text-center justify-center lg:h-screen font-bold ">
          No Watchlisted Movies Available
        </div>
      )}
    </div>
  );
}

export default Wishlist;
