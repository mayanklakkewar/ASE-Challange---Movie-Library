import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"; // Import React Router v6+ functions
import "./App.css"; // Import global CSS
import Wishlist from "./components/Wishlist/Wishlist"; // Wishlist page
import Layout from "./Layout"; // Layout component containing Header/Footer
import Home from "./components/Home/Home"; // Home page showing movies

function App() {
  // 📌 Create a router using react-router-dom
  const router = createBrowserRouter(
    createRoutesFromElements(
      // Define route structure
      <Route path="/" element={<Layout />}>
        {/* Home page as default nested route */}
        <Route path="" element={<Home />} />

        {/* Watchlist page */}
        <Route path="wishlist" element={<Wishlist />} />
      </Route>
    )
  );

  return (
    <>
      {/* RouterProvider makes the router available to the app */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
