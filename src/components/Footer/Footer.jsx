import React from "react";

// 🦶 Footer component — displayed at the bottom of the app
function Footer() {
  return (
    <>
      {/* Footer container with background color, padding, and full width */}
      <footer className="bg-white pt-4 mb-0.5 bottom-0 mx-auto w-full max-w-screen-xl p-4 py-2 lg:py-2.5">
        {/* Author credit */}
        <div>
          <h5 className="text-sm"> Made with ❤️ by Mayank Satish Lakkewar</h5>
        </div>

        {/* Copyright and rights info */}
        <div className="text-xs py-0.5">
          <span>© 2023 mayanklakkewar</span>. All Rights Reserved
        </div>
      </footer>
    </>
  );
}

export default Footer;
