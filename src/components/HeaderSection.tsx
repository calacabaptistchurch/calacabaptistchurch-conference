import React from "react";

const HeaderSection: React.FC = () => {
  return (
    <section
      className="overflow-hidden relative inset-0 -z-10 w-full text-center h-screen bg-cover bg-center"
      style={{
        backgroundColor: "#e04274",
        backgroundImage: `url(${`/images/cover.svg`})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    ></section>
  );
};

export default HeaderSection;
