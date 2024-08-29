import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome CSS

import MainSlide from "./slides/MainSlide";
import RegistrationSlide from "./slides/Registration";
import CountdownTimer from "./CountdownTimer";

const HeaderSection: React.FC = () => {
  const [autoplay, setAutoplay] = useState(true);

  const handleToggleAutoplay = () => {
    setAutoplay((prev) => !prev);
  };

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
          renderBullet: (_index: number, className: string) => {
            return `<span class="${className}"></span>`;
          },
        }}
        className="w-full"
      >
        <SwiperSlide>
          <MainSlide />
        </SwiperSlide>
        <SwiperSlide>
          <RegistrationSlide />
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
        {/* Swiper pagination */}
        <div className="swiper-pagination"></div>
      </Swiper>

      {/* Pause/Play Toggle Button */}
      <div className="absolute bottom-4 right-4 flex items-center justify-center z-20">
        <button
          onClick={handleToggleAutoplay}
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          {autoplay ? (
            <i className="fas fa-pause"></i> // FontAwesome pause icon
          ) : (
            <i className="fas fa-play"></i> // FontAwesome play icon
          )}
        </button>
      </div>
    </>
  );
};

export default HeaderSection;
