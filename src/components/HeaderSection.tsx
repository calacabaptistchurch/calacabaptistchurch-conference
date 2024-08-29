import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome CSS

import CalacaLogo from "/images/churchlogo.svg";
import VOMLogo from "/images/vom-logo.png";
import CloudBackground from "/images/cloud-background.svg";
import BackgroundImage from "/images/background-image.jpg";
import CountdownTimer from "./CountdownTimer";

const HeaderSection: React.FC = () => {
  const [autoplay, setAutoplay] = useState(true);

  const handlePause = () => setAutoplay(false);
  const handlePlay = () => setAutoplay(true);

  return (
    <>
      {/* Sticky Countdown Timer */}
      <CountdownTimer targetDate="2024-10-06T00:00:00+08:00" />

      {/* Swiper Component */}
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        autoplay={autoplay ? { delay: 5000 } : false}
        loop
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          },
        }}
        className="h-full w-full"
      >
        <SwiperSlide>
          {/* Slide 1 content */}
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
                Open to all Christian Churches in the region of Calabarzon
                (Region IV-A)
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {/* Slide 2 content - Registration Fee Details */}
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
              {/* Registration Fee Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 mb-6">
                Conference Registration
              </h2>
              {/* Fee Details */}
              <p className="text-2xl md:text-3xl lg:text-4xl font-light mb-4">
                Participation Fee: ₱250.00
              </p>
              <p className="text-lg md:text-xl lg:text-2xl font-light mb-4">
                Your registration includes:
              </p>
              <ul className="text-lg md:text-xl lg:text-2xl font-light list-disc list-inside mb-8">
                <li>A Complimentary Book from Voice of the Martyrs</li>
                <li>A Chance to Win an ESV Study Bible</li>
                <li>Exclusive Conference Merchandise</li>
                <li>And More Surprises!</li>
              </ul>
              {/* Pre-Registration Bonus */}
              <p className="text-lg md:text-xl lg:text-2xl font-light mb-8">
                Register by September 22 and receive a
                <br />
                <span className="font-bold">Free Conference T-Shirt</span>
              </p>
              {/* Note about the Proceeds */}
              <p className="text-lg md:text-xl font-light italic mb-8">
                *All proceeds will support the Calaca Baptist Church Missions
                Fund Drive for 2024.
              </p>
              {/* Call to Action Button */}
              <div className="mb-8">
                <a
                  href="https://forms.gle/KTdSRKg4Sqyq6mgj8"
                  className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 md:py-4 md:px-8 rounded-full shadow-md transition duration-300 ease-in-out text-lg md:text-xl transform hover:-translate-y-2"
                >
                  Secure Your Spot Now
                </a>
              </div>
              {/* Closing Text */}
              <p className="text-lg md:text-xl font-light">
                Open to all Christian Churches in the Calabarzon Region (Region
                IV-A).
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Swiper navigation buttons */}
        <div
          className="swiper-button-prev text-white"
          aria-label="Previous slide"
        ></div>
        <div
          className="swiper-button-next text-white"
          aria-label="Next slide"
        ></div>

        {/* Swiper pagination dots */}
        <div className="swiper-pagination"></div>
        {/* Pause/Play Button */}
        <div className="absolute top-4 right-4 flex items-center space-x-4 z-50">
          <button
            onClick={autoplay ? handlePause : handlePlay}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold p-2 rounded-full shadow-md transition duration-300 ease-in-out"
          >
            {autoplay ? (
              <i className="fas fa-pause"></i> // FontAwesome pause icon
            ) : (
              <i className="fas fa-play"></i> // FontAwesome play icon
            )}
          </button>
        </div>
      </Swiper>
    </>
  );
};

export default HeaderSection;
