import React from "react";

const SpeakersSection: React.FC = () => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Speakers/Hosts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Speaker 1 */}
        <div className="bg-white shadow-md rounded p-4">
          <img
            src="https://source.unsplash.com/random/400x400?person1"
            alt="Speaker 1"
            className="w-full h-64 object-cover rounded"
          />
          <h3 className="text-xl font-bold mt-4">Speaker Name 1</h3>
          <p className="text-gray-600">[Speaker bio, role, etc.]</p>
        </div>

        {/* Speaker 2 */}
        <div className="bg-white shadow-md rounded p-4">
          <img
            src="https://source.unsplash.com/random/400x400?person2"
            alt="Speaker 2"
            className="w-full h-64 object-cover rounded"
          />
          <h3 className="text-xl font-bold mt-4">Speaker Name 2</h3>
          <p className="text-gray-600">[Speaker bio, role, etc.]</p>
        </div>

        {/* Speaker 3 */}
        <div className="bg-white shadow-md rounded p-4">
          <img
            src="https://source.unsplash.com/random/400x400?person3"
            alt="Speaker 3"
            className="w-full h-64 object-cover rounded"
          />
          <h3 className="text-xl font-bold mt-4">Speaker Name 3</h3>
          <p className="text-gray-600">[Speaker bio, role, etc.]</p>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
