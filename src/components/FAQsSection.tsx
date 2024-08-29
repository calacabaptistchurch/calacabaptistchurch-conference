import React from "react";

const FAQsSection: React.FC = () => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
      <div className="space-y-4">
        {/* FAQ 1 */}
        <div>
          <h3 className="text-lg font-bold">What is the event date?</h3>
          <p className="text-gray-700">[Answer to the question]</p>
        </div>

        {/* FAQ 2 */}
        <div>
          <h3 className="text-lg font-bold">Where is the event location?</h3>
          <p className="text-gray-700">[Answer to the question]</p>
        </div>

        {/* FAQ 3 */}
        <div>
          <h3 className="text-lg font-bold">How can I RSVP?</h3>
          <p className="text-gray-700">[Answer to the question]</p>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
