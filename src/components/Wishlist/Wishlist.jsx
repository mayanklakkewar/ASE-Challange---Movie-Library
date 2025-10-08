import React from "react";
import { useMovie } from "../../Context";

function Wishlist() {
  const { deleteMovie, movie } = useMovie();
  const deleteEle = (id) => {
    deleteMovie(id);
    alert("Movie Removed Successfully");
  };
  return (
    <div className="grid grid-cols-2 gap-3 py-5">
      {movie.length > 0 ? (
        movie.map((ele) => (
          <div className="flex bg-white rounded-lg shadow-sm overflow-hidden max-w-2xl mx-auto">
            <img className="w-1/3 object-cover" src={ele.imgUrl} alt="Movie" />

            <div className="flex flex-col justify-between p-4 w-2/3">
              <div>
                <h2 className="text-sm font-semibold text-gray-900 mb-2">
                  {ele.title}
                </h2>
                <p className="text-xs text-gray-600">{ele.overview}</p>
              </div>

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
        <div className="flex items-center text-center justify-center lg:h-screen font-bold ">
          No Watchlisted Movies Avilable
        </div>
      )}
    </div>
  );
}

export default Wishlist;
