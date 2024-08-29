import React from "react";
import HeaderSection from "./HeaderSection";
import WhyJoinSection from "./WhyJoinSection";
import AgendaSection from "./AgendaSection";
import SpeakerSection from "./SpeakerSection";
import HostSection from "./HostSection";

const HomePage: React.FC = () => {
  const galleryImages = [
    "/images/worship.jpg",
    "/images/prayerwalk.jpg",
    "/images/youthcamp.jpg",
    "/images/concert.jpg",
  ];

  const bibleStudies = [
    {
      name: "Brgy. Pantay (Sitio Cawong)",
      description: "Weekly home bible studies in various homes and families.",
    },
    {
      name: "Brgy. Dacanlao",
      description: "New home bible study and children outreach.",
    },
    {
      name: "Brgy. Sampaga (Balayan)",
      description: "Weekly home bible study.",
    },
    {
      name: "Brgy. Quizumbing",
      description: "Feeding Outreach program.",
    },
    {
      name: "Brgy. Puting Bato West",
      description: "Weekly home bible study.",
    },
    {
      name: "Brgy. Pantay (Sitio Pagasa)",
      description: "Weekly prayer walk.",
    },
  ];

  return (
    <>
      <HeaderSection />
      <WhyJoinSection />
      <AgendaSection />
      <SpeakerSection
        speakerName="Rev. Joel Valdehueza"
        speakerImage="/images/speaker3.jpg"
        leftImage="/images/speaker1.jpg"
        rightImage="/images/speaker2.jpg"
      />
      <HostSection
        churchName="Calaca Baptist Church of Batangas, Inc."
        churchLogo="/images/churchlogo.svg"
        churchDescription="Calaca Baptist Church of Batangas (formerly Fountain of Blessing Baptist Church - Cawong) was established in 2019 by Pastor Al Coronel with the brethren of Fountain of Blessing Baptist Church - San Piro. What began as a Bible study in a garage grew into a congregation that rented a space to build a small place of worship. In 2022, as we renewed our mission and vision, we changed our name to Calaca Baptist Church and became an independent church. 
        By God's grace, since our beginning, we have shared the gospel with many residents of Calaca, including individuals and families, through evangelistic efforts such as personal evangelism, Bible studies, feeding programs, outreach initiatives, youth camps, concerts, gift-giving, and more. Today, we hold 9 regular home Bible studies and reach communities including Brgy. Pantay, Brgy. Dacanlao, Brgy. Sampaga (Balayan), Brgy. Quizumbing, and Brgy. Puting Bato West."
        mission="We exist to make disciples by KNOWING Christ, GROWING in Christ, and MAKING Christ known."
        vision="Our vision is to see a transformed community of Christ's disciples making Christ's disciples in small groups and families in every Barangay of the City of Calaca."
        bibleStudies={bibleStudies}
        galleryImages={galleryImages} // Pass the gallery images to HostSection
      />
    </>
  );
};

export default HomePage;
