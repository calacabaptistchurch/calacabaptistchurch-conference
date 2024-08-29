import React from "react";

const WhyJoinSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-pink-500 to-red-500 flex flex-col items-center justify-center px-4 py-16">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl text-center text-white px-8 md:px-0">
        {/* Main Header */}
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
          Why You Must Join?
        </h2>

        {/* Subheader */}
        <p className="text-lg md:text-2xl font-light leading-relaxed mb-8 max-w-2xl mx-auto">
          Join us on a journey to reignite our passion for mission work.
          Experience powerful testimonies, gain valuable insights, and prepare
          yourself to overcome the challenges ahead. Your commitment today will
          shape the future of our global mission.
        </p>

        {/* Content Text */}
        <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
          <p className="text-base md:text-lg font-medium leading-relaxed">
            We invite you to join us as we reignite our passion for local and
            global missions, even amidst pressing global and economic
            challenges. At the conference, we will hear a powerful testimony
            from a missionary who has experienced persecution firsthand, along
            with insights from our resource speaker from Voice of the Martyrs
            Philippines. Their experiences will illuminate the harsh realities
            faced by believers around the world and help us prepare for any
            challenges that may arise in the Philippines. Together, we will
            reaffirm our commitment to follow wherever God leads us and continue
            the mission He has entrusted to us, no matter the cost.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
