import React from "react";
import BackgroundImage from "/images/whymustjoin.jpg"; // Replace with the actual path to your background image

const WhyJoinSection: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white py-16 px-6 lg:px-20"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Container */}
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Main Header */}
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 font-cinzel">
          Why You Must Join?
        </h2>

        {/* Subheader */}
        <p className="text-lg md:text-2xl font-light leading-relaxed mb-8 max-w-2xl mx-auto">
          Join us on a journey to reignite our passion for mission work. Your
          commitment today will shape the future of our global mission.
        </p>

        {/* Content Text */}
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
          <p className="text-base md:text-lg font-medium leading-relaxed">
            We invite you to join us as we reignite our passion for local and
            global missions, even amidst pressing global and economic
            challenges. At the conference, we will hear a powerful testimony
            from a missionary who has experienced persecution firsthand, along
            with insights from our resource speaker from <span> </span>
            <a
              href="https://www.facebook.com/vomaustralia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 font-semibold underline hover:text-yellow-300"
            >
              Voice of the Martyrs Philippines
            </a>
            . Their experiences will illuminate the harsh realities faced by
            believers around the world and help us prepare for any challenges
            that may arise in the Philippines. Together, we will reaffirm our
            commitment to follow wherever God leads us and continue the mission
            He has entrusted to us, no matter the cost.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyJoinSection;
