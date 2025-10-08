import React from "react";
import { Link, NavLink } from "react-router-dom";

// 🏠 Header component — displays navigation bar for the app
function Header() {
  return (
    // Sticky header with shadow so it stays on top while scrolling
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 text-black">
        {/* Flex container to arrange logo and navigation links */}
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo linking back to Home page */}
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          {/* Navigation links */}
          <div className="flex justify-between items-center">
            {/* Home link */}
            <NavLink className="px-2 lg:px-5 py-2 lg:py-2.5 mr-2" to="/">
              Home
            </NavLink>

            {/* Watchlist link */}
            <NavLink
              className="px-2 lg:px-5 py-2 lg:py-2.5 mr-2"
              to="/wishlist"
            >
              Watchlist
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
