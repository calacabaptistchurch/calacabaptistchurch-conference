import React from "react";

const AgendaSection: React.FC = () => {
  const agendaItems = [
    { time: "2:00 PM", title: "Worship" },
    { time: "2:45 PM - 3:30 PM", title: "Plenary - Session 1" },
    { time: "3:30 PM - 3:35 PM", title: "Raffle" },
    { time: "3:35 PM - 3:40 PM", title: "Testimony" },
    { time: "3:40 PM - 4:35 PM", title: "Plenary - Session 2" },
    { time: "4:35 PM - 4:40 PM", title: "Special Presentation" },
    { time: "4:40 PM - 4:45 PM", title: "Raffle" },
    { time: "4:50 PM - 5:00 PM", title: "Closing Session" },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-pink-500 to-red-600 flex flex-col items-center justify-center px-4 py-16">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl text-center text-white px-8 md:px-0">
        {/* Main Header */}
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
          Agenda
        </h2>

        {/* Subheader */}
        <p className="text-lg md:text-2xl font-light leading-relaxed mb-8 max-w-2xl mx-auto">
          Discover the detailed schedule of our event, designed to inspire,
          engage, and prepare you for the mission ahead. Each session is crafted
          to deepen your understanding and commitment, from worship to
          testimonies and special presentations.
        </p>

        {/* Agenda Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {agendaItems.map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-2"
            >
              <p className="font-semibold text-xl mb-2">{item.time}</p>
              <p className="text-lg font-medium">{item.title.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
