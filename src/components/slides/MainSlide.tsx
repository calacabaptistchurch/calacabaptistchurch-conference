import React from "react";
import CalacaLogo from "/images/churchlogo.svg";
import CloudBackground from "/images/cloud-background.svg";
import BackgroundImage from "/images/background-image.jpg";
import VOMLogo from "/images/vom-logo.png";

const MainSlide: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white py-16 px-6 lg:px-20"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Cloud Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${CloudBackground})` }}
      ></div>
      <div className="relative z-10 max-w-6xl mx-auto text-center font-cinzel">
        {/* Church Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={CalacaLogo}
            alt="Calaca Baptist Church Logo"
            className="w-24 h-24 md:w-32 md:h-32"
          />
        </div>
        {/* Introductory Text */}
        <p className="text-lg md:text-xl font-light mb-2">
          In Celebration of Missions Month
        </p>
        <p className="text-lg md:text-xl font-light mb-8">
          Invites You to Join Us for a
        </p>
        <div className="flex flex-col space-y-1">
          {/* Mini-Missions Conference */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Missions Conference
          </h2>
          {/* GOING Title */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold text-yellow-400 mb-4">
            GOING
          </h1>
          {/* Subtitle and Bible Verse */}
          <p className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            Where He Leads Me
          </p>
        </div>
        <p className="text-xl md:text-2xl lg:text-3xl font-light italic mb-8">
          Isaiah 6:8
        </p>
        {/* Event Date */}
        <div className="bg-yellow-500 text-black inline-block px-6 py-2 rounded-full mb-8">
          <p className="text-xl md:text-2xl font-bold">
            October 6, 2024 (Sunday, 2PM)
          </p>
        </div>

        <p className="text-sm md:text-lg font-light mb-4">
          Venue: Dacanlao G. Agoncillo National High School
        </p>

        {/* Partnership Section */}
        <p className="text-lg md:text-xl font-light mb-4">
          In Partnership With
        </p>
        <div className="flex justify-center mb-8">
          <img
            src={VOMLogo}
            alt="Voice of the Martyrs Logo"
            className="w-40 h-auto md:w-48"
          />
        </div>
        {/* Call to Action Button */}
        <div className="mb-8">
          <a
            href="https://forms.gle/KTdSRKg4Sqyq6mgj8"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 md:py-4 md:px-8 rounded-full shadow-md transition duration-300 ease-in-out text-lg md:text-xl transform hover:-translate-y-2"
          >
            Register Now
          </a>
        </div>
        {/* Closing Text */}
        <p className="text-lg md:text-xl font-light">
          Open to all Christian Churches in the Province of Batangas and nearby
          Areas
        </p>
      </div>
    </div>
  );
};

export default MainSlide;
