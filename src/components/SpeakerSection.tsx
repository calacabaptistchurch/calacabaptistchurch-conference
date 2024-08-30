import React, { useState } from "react";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-pink-500 to-pink-700 py-16 px-4 md:px-8">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Main Header */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 font-cinzel">
          Our Speaker
        </h2>

        {/* Speaker Name */}
        <h3 className="text-2xl md:text-4xl font-semibold text-yellow-300 mb-12 font-cinzel">
          {speakerName}
        </h3>

        {/* Speaker's Background */}
        <p className="text-lg md:text-xl text-white mb-12 px-4">
          Pastor Joel Valdehueza, our esteemed speaker, brings a wealth of
          experience and academic rigor, holding a Bachelor of Religious
          Education from Doane Baptist Seminary and a Master of Arts in Biblical
          Studies from the Baptist Bible Seminary and Institute (BBSI). As a
          dedicated staff member of Voice of the Martyrs Philippines (VOM), he
          has become a respected voice in advocating the ministry’s mission,
          frequently addressing diverse audiences in seminars, conferences, and
          religious gatherings across the nation. In addition to his work with
          VOM, Pastor Valdehueza serves as the Luzon Coordinator for Heartbeat
          Response Team, Inc., and has faithfully led Pasig Baptist Church of
          Buenmar as Senior Pastor since 2006.
        </p>

        {/* Image Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          <div
            className="flex-1 max-w-xs transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => openModal(leftImage)}
          >
            <img
              src={leftImage}
              alt="Event Image 1"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div
            className="flex-1 max-w-xs transform transition-transform duration-300 hover:scale-110 cursor-pointer"
            onClick={() => openModal(speakerImage)}
          >
            <img
              src={speakerImage}
              alt={speakerName}
              className="rounded-full border-4 border-yellow-300 shadow-xl"
            />
          </div>
          <div
            className="flex-1 max-w-xs transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => openModal(rightImage)}
          >
            <img
              src={rightImage}
              alt="Event Image 2"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Modal for Zoomed Image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
          onClick={closeModal}
        >
          <div
            className="relative p-4 md:p-6 bg-white rounded-lg shadow-lg max-w-full md:max-w-3xl max-h-screen overflow-auto transform transition-transform duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage as string}
              alt="Zoomed"
              className="w-full h-auto rounded-lg shadow-2xl transform transition-transform duration-500 scale-100 hover:scale-105"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black text-xl md:text-2xl font-bold hover:text-red-500 transition-colors"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeakerSection;
