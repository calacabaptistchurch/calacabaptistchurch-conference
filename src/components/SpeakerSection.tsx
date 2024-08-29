import React from "react";

interface SpeakerSectionProps {
  speakerName: string;
  speakerImage: string;
  leftImage: string;
  rightImage: string;
}

const SpeakerSection: React.FC<SpeakerSectionProps> = ({
  speakerName,
  speakerImage,
  leftImage,
  rightImage,
}) => {
  return (
    <div className="relative w-full bg-gradient-to-b from-pink-500 to-pink-700 py-16 px-4 md:px-8">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Main Header */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
          Our Speaker
        </h2>

        {/* Speaker Name */}
        <h3 className="text-2xl md:text-4xl font-semibold text-yellow-300 mb-12">
          {speakerName}
        </h3>

        {/* Image Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          <div className="flex-1 max-w-xs">
            <img
              src={leftImage}
              alt="Event Image 1"
              className="rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex-1 max-w-xs">
            <img
              src={speakerImage}
              alt={speakerName}
              className="rounded-full border-4 border-yellow-300 shadow-xl transform transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="flex-1 max-w-xs">
            <img
              src={rightImage}
              alt="Event Image 2"
              className="rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerSection;
