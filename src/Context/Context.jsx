import { useContext, createContext, useState, useEffect } from "react";

// 1️⃣ Create the context
export const movieContext = createContext({
  movie: [],
  addMovie: () => {},
  deleteMovie: () => {},
});

// 2️⃣ Create a provider component
export const MovieProvider = ({ children }) => {
  const [movie, setMovie] = useState([]);

  // Add movie
  const addMovie = (id, imgUrl, title, overview) => {
    setMovie((prev) => [{ id, imgUrl, title, overview }, ...prev]);
  };

  // Delete movie
  const deleteMovie = (id) => {
    setMovie((prev) => prev.filter((m) => m.id !== id));
  };

  useEffect(() => {
    const movie = JSON.parse(localStorage.getItem("movie"));

    if (movie && movie.length > 0) {
      setMovie(movie);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("movie", JSON.stringify(movie));
  }, [movie]);

  return (
    <movieContext.Provider value={{ movie, addMovie, deleteMovie }}>
      {children}
    </movieContext.Provider>
  );
};

// 3️⃣ Custom hook for using the context
export const useMovie = () => useContext(movieContext);
