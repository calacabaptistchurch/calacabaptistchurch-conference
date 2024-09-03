import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-deepPurple text-white py-8">
      <div className="container mx-auto px-4">
        <hr className="mx-10 py-8" />
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2 text-brightYellow">
              Calaca Baptist Church of Batangas, Inc.
            </h3>
            <p>Sitio Cawong, Barangay Pantay</p>
            <p>Calaca City, Batangas 4212</p>
            <p>Email: admin@cbc.org.ph</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2 text-brightYellow">
              Quick Links
            </h3>
            <ul>
              <li>
                <Link to="/" className="hover:text-lightGreen">
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="https://forms.gle/KTdSRKg4Sqyq6mgj8"
                  className="hover:text-lightGreen"
                >
                  Register
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lightGreen">
                  Be A Sponsor
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2 text-brightYellow">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/calacabaptistchurch/"
                className="hover:text-lightGreen"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://www.youtube.com/@calacabaptistchurch"
                className="hover:text-lightGreen"
                aria-label="YouTube"
              >
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-lightGray">
          <p>
            &copy; {new Date().getFullYear()} Calaca Baptist Church of Batangas,
            Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
