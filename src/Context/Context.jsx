import { useContext, createContext, useState, useEffect } from "react";

// 🎬 Create a Context to manage and share movie data globally
// This allows different components to access and modify the movie list
// without passing props manually between components.
export const movieContext = createContext({
  movie: [], // Stores all movies in the watchlist
  addMovie: () => {}, // Function to add a movie
  deleteMovie: () => {}, // Function to delete a movie
});

// 🎞️ Context Provider Component
// This component wraps around the app and provides access to the movie data and functions
export const MovieProvider = ({ children }) => {
  // State variable to store the current list of movies
  const [movie, setMovie] = useState([]);

  // ➕ Function to add a new movie to the watchlist
  const addMovie = (id, imgUrl, title, overview) => {
    // Add the new movie at the start of the movie array
    setMovie((prev) => [{ id, imgUrl, title, overview }, ...prev]);
  };

  // ❌ Function to remove a movie from the watchlist by ID
  const deleteMovie = (id) => {
    // Filter out the movie whose ID matches the given ID
    setMovie((prev) => prev.filter((m) => m.id !== id));
  };

  // 💾 Load saved movies from localStorage when the app starts
  useEffect(() => {
    const movie = JSON.parse(localStorage.getItem("movie"));
    // If there are saved movies, update the state
    if (movie && movie.length > 0) {
      setMovie(movie);
    }
  }, []);

  // 🧠 Save the current movie list to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("movie", JSON.stringify(movie));
  }, [movie]);

  // 📤 Provide the state and functions to all child components
  return (
    <movieContext.Provider value={{ movie, addMovie, deleteMovie }}>
      {children}
    </movieContext.Provider>
  );
};

// 🎯 Custom hook to easily use the context in other components
// Example: const { movie, addMovie, deleteMovie } = useMovie();
export const useMovie = () => useContext(movieContext);
