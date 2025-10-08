import { createRoot } from "react-dom/client"; // React 18+ way to create root
import "./index.css"; // Global CSS styles
import App from "./App.jsx"; // Main App component containing routes
import { MovieProvider } from "./Context/index.js"; // Context provider for global movie state

// 🔹 Create a root for React to render the app
const root = createRoot(document.getElementById("root"));

// 🔹 Render the app inside the MovieProvider
// This allows all components inside App to access the movie context
root.render(
  <MovieProvider>
    <App />
  </MovieProvider>
);
