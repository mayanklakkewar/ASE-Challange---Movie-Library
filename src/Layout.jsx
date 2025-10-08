import React from "react";
import Header from "./components/Header/Header"; // Header component
import Footer from "./components/Footer/Footer"; // Footer component
import { Outlet } from "react-router-dom"; // Outlet renders nested route components

// 🏗️ Layout component — serves as a wrapper for pages
// It ensures that Header and Footer appear on all routes
function Layout() {
  return (
    <>
      {/* Top navigation bar */}
      <Header />

      {/* Nested route components (Home, Wishlist, etc.) will render here */}
      <Outlet />

      {/* Bottom footer */}
      <Footer />
    </>
  );
}

export default Layout;
