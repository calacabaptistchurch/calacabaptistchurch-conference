import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="transition-shadow duration-300 bg-transparent">
      <nav className="p-4 md:px-8 bg-deepPurple shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo/Title */}
          <Link
            to="/"
            className="text-white text-xl md:text-3xl font-bold tracking-wider"
          >
            Missions Conference
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-white text-sm md:text-base hover:text-lightGreen transition-colors duration-300"
            >
              Home
            </Link>

            <Link
              to="/be-a-sponsor"
              className="text-white text-sm md:text-base hover:text-lightGreen transition-colors duration-300"
            >
              Be A Sponsor
            </Link>
            <a
              href="https://forms.gle/KTdSRKg4Sqyq6mgj8"
              className="bg-brightYellow text-deepPurple text-sm md:text-base font-semibold py-2 px-4 rounded-lg shadow-lg transition-transform duration-300 transform hover:-translate-y-1 hover:bg-yellow-600"
            >
              Register
            </a>
            <a
              href="https://www.facebook.com/calacabaptistchurch/"
              className="text-white hover:text-lightGreen transition-colors duration-300"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a
              href="https://www.youtube.com/@calacabaptistchurch"
              className="text-white hover:text-lightGreen transition-colors duration-300"
              aria-label="YouTube"
            >
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-white hover:text-lightGreen focus:outline-none"
              aria-label="Toggle navigation"
              onClick={() => {
                const nav = document.getElementById("mobile-menu");
                if (nav) {
                  nav.classList.toggle("hidden");
                }
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className="md:hidden mt-4 bg-deepPurple text-white hidden"
        >
          <div className="flex flex-col space-y-4 text-center">
            <Link to="/" className="text-white text-sm hover:text-lightGreen">
              Home
            </Link>

            <Link
              to="/be-a-sponsor"
              className="text-white text-sm hover:text-lightGreen"
            >
              Be A Sponsor
            </Link>
            <a
              href="https://forms.gle/KTdSRKg4Sqyq6mgj8"
              className="bg-brightYellow text-deepPurple text-sm font-semibold py-2 px-4 rounded-lg shadow-lg transition-transform duration-300 transform hover:-translate-y-1 hover:bg-yellow-600"
            >
              Register
            </a>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://www.facebook.com/calacabaptistchurch/"
                className="text-white hover:text-lightGreen transition-colors duration-300"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a
                href="https://www.youtube.com/@calacabaptistchurch"
                className="text-white hover:text-lightGreen transition-colors duration-300"
                aria-label="YouTube"
              >
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
