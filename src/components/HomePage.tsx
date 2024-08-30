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
        churchDescription="Calaca Baptist Church of Batangas (formerly Fountain of Blessing Baptist Church - Cawong) was founded in 2019 by Pastor Al Coronel, alongside the brethren of Fountain of Blessing Baptist Church - San Piro. What began as a humble Bible study in a garage quickly blossomed into a growing congregation, leading to the establishment of a small worship space in Sitio Cawong, Brgy. Pantay, Calaca City, Batangas."
        churchDescription2="In 2022, with a renewed commitment to our mission and vision, we adopted the name Calaca Baptist Church, embracing our new identity as an independent church. By God's grace, our ministry has flourished, allowing us to share the gospel with countless individuals and families throughout Calaca. Through various evangelistic efforts—including personal evangelism, Bible studies, feeding programs, outreach initiatives, youth camps, concerts, and gift-giving—we have made a significant impact on our community."
        churchDescription3="Today, our church sustains nine regular home Bible studies, extending our reach to communities in Brgy. Pantay, Brgy. Dacanlao, Brgy. Sampaga (Balayan), Brgy. Quizumbing, and Brgy. Puting Bato West. As we continue to grow, we remain dedicated to our calling, bringing the light of the gospel to those in need and fostering spiritual growth in our community."
        mission="We exist to make disciples by KNOWING Christ, GROWING in Christ, and MAKING Christ known."
        vision="Our vision is to see a transformed community of Christ's disciples making Christ's disciples in small groups and families in every Barangay of the City of Calaca."
        bibleStudies={bibleStudies}
        galleryImages={galleryImages} // Pass the gallery images to HostSection
      />
    </>
  );
};

export default HomePage;
