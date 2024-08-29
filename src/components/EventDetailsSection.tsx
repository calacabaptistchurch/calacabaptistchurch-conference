import React from "react";

const EventDetailsSection: React.FC = () => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
      <p className="text-gray-700">
        [Event details, description, schedule, etc.]
      </p>
      <img
        src="https://source.unsplash.com/random/800x400?event"
        alt="Event placeholder"
        className="w-full h-auto mt-4 rounded"
      />
    </section>
  );
};

export default EventDetailsSection;
