import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header
      className={`top-0 z-50 transition-shadow duration-300 bg-transparent`}
    >
      <nav
        className="bg-gray-800 p-4"
        style={{
          backgroundColor: "#512b5d",
        }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white text-lg font-bold">
            Missions Conference
          </Link>
          <div>
            <Link to="/" className="text-gray-300 hover:text-white mx-2">
              Home
            </Link>
            <a
              href="https://forms.gle/KTdSRKg4Sqyq6mgj8"
              className="text-gray-300 hover:text-white mx-2"
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
