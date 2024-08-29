import React from "react";

interface BibleStudy {
  name: string;
  description: string;
}

interface HostSectionProps {
  churchName: string;
  churchLogo: string;
  churchDescription: string;
  mission: string;
  vision: string;
  bibleStudies: BibleStudy[];
  galleryImages: string[]; // New prop for gallery images
}

const HostSection: React.FC<HostSectionProps> = ({
  churchName,
  churchLogo,
  churchDescription,
  mission,
  vision,
  bibleStudies,
  galleryImages, // Gallery images passed as a prop
}) => {
  return (
    <div className="relative bg-gradient-to-b from-purple-700 to-purple-900 text-white py-16 px-6 lg:px-20">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Main Header */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8">
          Know Your Host
        </h2>

        {/* Flex Container for Images and Description */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-12 mb-16">
          {/* Image Column */}
          <div className="flex flex-col items-center space-y-8">
            {/* Church Logo */}
            <div className="max-w-xs flex-shrink-0 transform transition-transform duration-300 hover:scale-105">
              <img
                src={churchLogo}
                alt={churchName}
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Church Description, Mission, Vision */}
          <div className="max-w-2xl text-center lg:text-left space-y-6 lg:ml-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {churchName}
            </h3>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              {churchDescription}
            </p>
          </div>
        </div>

        {/* Mission and Vision in a 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl md:text-2xl font-bold mb-4 text-purple-300">
              Mission
            </h4>
            <p className="text-lg md:text-xl leading-relaxed">{mission}</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
            <h4 className="text-xl md:text-2xl font-bold mb-4 text-purple-300">
              Vision
            </h4>
            <p className="text-lg md:text-xl leading-relaxed">{vision}</p>
          </div>
        </div>

        {/* Gallery Images in 1 row of 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          ))}
        </div>

        {/* Bible Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bibleStudies.map((study, index) => (
            <div
              key={index}
              className="p-8 bg-purple-800 bg-opacity-80 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-opacity-100"
            >
              <h5 className="text-xl font-bold mb-2 text-purple-200">
                {study.name}
              </h5>
              <p className="text-lg leading-relaxed">{study.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HostSection;
