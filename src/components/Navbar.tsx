import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className={` transition-shadow duration-300 bg-transparent`}>
      <nav
        className="bg-gray-800 p-4"
        style={{
          backgroundColor: "#512b5d",
        }}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo/Title */}
          <Link
            to="/"
            className="text-white text-xl md:text-2xl font-bold tracking-wide"
          >
            Missions Conference
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            {/* Register Button */}
            <a
              href="https://forms.gle/KTdSRKg4Sqyq6mgj8"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out hover:-translate-y-2"
            >
              Register
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
