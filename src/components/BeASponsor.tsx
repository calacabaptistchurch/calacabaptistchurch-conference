import React, { useState } from "react";
import { Helmet } from "react-helmet";
import CountdownTimer from "./CountdownTimer";

const FAQItem: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 px-4 bg-deepPurple text-white font-semibold flex justify-between items-center"
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
        style={{ maxHeight: isOpen ? "400px" : "0px" }}
      >
        <div className="py-4 px-4 bg-gray-50 text-gray-600">{answer}</div>
      </div>
    </div>
  );
};

const BeASponsor: React.FC = () => {
  const faqs = [
    {
      question: "How can I become a sponsor?",
      answer:
        'To become a sponsor, simply click the "Become a Sponsor Today!" button at the top or bottom of this page. You will be redirected to a Google form where you can fill out your sponsorship details.',
    },
    {
      question: "How will my sponsorship be used?",
      answer:
        "Your sponsorship will be used to fund various mission initiatives, including supporting church planting, feeding programs, and providing resources for pastors and seminary students.",
    },
    {
      question: "Will I receive recognition for my sponsorship?",
      answer:
        "Yes, all sponsors will receive recognition on our website and social media. Depending on your sponsorship level, you may also receive recognition in conference materials and during conference sessions.",
    },
    {
      question: "Can I make an anonymous donation?",
      answer:
        "Yes, if you prefer to remain anonymous, you can indicate this preference in the sponsorship form.",
    },
    {
      question: "How do I receive missions reports??",
      answer:
        "We provide missions reports through the email you provide and also publish them on our website.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Become a Sponsor | Support Our Mission Drive 2024</title>
        <meta
          name="description"
          content="Join us as a sponsor in our 2024 Mission Drive and make a global impact by supporting vital projects, missionaries, and outreach programs."
        />
        <meta
          name="keywords"
          content="sponsor, mission drive, 2024, global impact, church planting, outreach, missions, Christian, support"
        />
        <meta
          property="og:title"
          content="Become a Sponsor | Support Our Mission Drive 2024"
        />
        <meta
          property="og:description"
          content="Join us as a sponsor in our 2024 Mission Drive and make a global impact by supporting vital projects, missionaries, and outreach programs."
        />
        <meta property="og:image" content="/images/be-a-sponsor.jpg" />
        <meta
          property="og:url"
          content="https://conference.cbc.org.ph/be-a-sponsor"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/* Sticky Countdown Timer */}
      <CountdownTimer targetDate="2024-10-06T00:00:00+08:00" />

      <div className="bg-gray-100 text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2 font-cinzel">
            Support Our Mission Drive 2024
          </h1>
          <h2 className="text-xl text-gray-600">
            Partner with Us to Make a Global Impact
          </h2>
          <div className="relative py-8 px-6 lg:px-10">
            <a
              href="https://forms.gle/87b4MLVAjo8noFnc9"
              className="bg-brightYellow text-deepPurple text-lg font-semibold py-2 px-4 rounded-lg shadow-lg transition-transform duration-300 transform hover:-translate-y-1 hover:bg-yellow-600"
            >
              Become a Sponsor Today!
            </a>
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative bg-gray-200 rounded-lg overflow-hidden mb-12">
          <img
            src="/images/be-a-sponsor-header.png"
            alt="Mission Work"
            className="w-full h-80 object-cover"
            loading="lazy"
          />
        </div>

        {/* Introduction */}
        <section className="max-w-3xl mx-auto mb-12 py-16 px-6 lg:px-20">
          <p className="text-lg text-gray-700 mb-4">
            The upcoming Missions Conference is a pivotal moment for us to
            unite, educate, reignite, and support the global spread of the
            Gospel in the midst of pressing global and economic challenges. This
            year, our goal is to extend our reach, build new churches, and
            provide vital resources to those in need. We invite you to join us
            in this mission—your support is crucial to our success.
          </p>
          <p className="text-lg text-gray-700">
            As a sponsor, you’ll be an integral part of our mission to transform
            lives and communities through God's love. Your support will enable
            us to fund essential projects, equip missionaries, and spread hope
            worldwide.
          </p>
        </section>
      </div>
      {/* Why Sponsor */}
      <section className="bg-deepRed py-16 px-6 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Why Sponsor?
          </h3>
          <div className="space-y-6 text-white">
            <div className="flex items-center space-x-4">
              <i className="fas fa-hands-helping fa-3x text-blue-500"></i>
              <div>
                <h4 className="text-lg font-semibold">Community Impact</h4>
                <p className="text-white-600">
                  Your sponsorship has a profound impact on communities. It
                  supports essential feeding programs, provides gifts to
                  children and senior citizens, and funds outreach initiatives
                  for church planting. These efforts help improve the quality of
                  life and foster spiritual growth.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <i className="fas fa-graduation-cap fa-3x text-green-500"></i>
              <div>
                <h4 className="text-lg font-semibold">Educational Support</h4>
                <p className="text-white-600">
                  Support our seminary students who have committed their lives
                  to follow God's calling and serve Him for the rest of their
                  lives. Your sponsorship helps provide them with the necessary
                  education and resources to equip them for their lifelong
                  mission.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <i className="fas fa-church fa-3x text-purple-500"></i>
              <div>
                <h4 className="text-lg font-semibold">
                  Pastors and Church Workers Support
                </h4>
                <p className="text-white-600">
                  Your sponsorship provides crucial support to pastors and
                  church workers, helping them with their needs and enabling
                  them to focus on their ministry work. This support helps
                  sustain their efforts and enhances their ability to serve
                  their communities.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <i
                className="fas fa-globe fa-3x text-orange-500"
                style={{ width: "60px", height: "50px" }}
              ></i>
              <div>
                <h4 className="text-lg font-semibold">
                  Mission Organization Support
                </h4>
                <p className="text-white-600">
                  By supporting us, you make an impact not only for us but also
                  on the mission reach of the organizations we support. Your
                  contributions help extend our outreach and further our
                  collective mission efforts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Organizations We Support */}
      <section className="bg-gray-100 py-16 px-6 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Mission Organizations We Support
          </h3>
          <div className="space-y-6">
            {[
              {
                name: "Kapatid Ministry, Inc.",
                description:
                  "A non-profit organization in the Philippines working with local churches in bringing the gospel to marginalized communities.",
                logo: "https://kapatidministry.org/wp-content/uploads/brizy/imgs/cropped-KMI-Logo-2024-132x132x2x0x126x132x1718478329.png",
                link: "https://kapatidministry.org/",
              },
              {
                name: "Baptist Bible Seminary & Institute (BBSI)",
                description:
                  "At Baptist Bible Seminary & Institute (BBSI), our mission is clear and unwavering: to develop dedicated men and women, called by a divine purpose, through robust biblical training, and empower them to effectively share the message of Christ with the world.",
                logo: "/images/bbsi-logo.png",
                link: "https://www.bbsi.edu.ph",
              },
              {
                name: "Maranatha Baptist Bible Seminary",
                description:
                  "Offers seminary education and training for pastors, leaders, and future missionaries and church planters.",
                logo: "/images/mbbc-logo.png",
                link: "https://www.facebook.com/mcchs",
              },
              {
                name: "Center for Biblical Studies Institute & Seminary (CBSIS)",
                description:
                  "CBSIS Mission is to prepare students for the spread of the gospel and the building up of local churches in the Philippines and throughout the world.",
                logo: "https://cbsis.edu.ph/wp-content/uploads/2019/11/IMG_5568-600x600.png",
                link: "https://cbsis.edu.ph/",
              },
              {
                name: "Christ In You Christian Baptist Mission Inc.",
                description:
                  "CIY exists to expand God's kingdom through equipping, assisting and mobilizing church planters.",
                logo: "/images/ciymission-logo.jpg",
                link: "https://www.facebook.com/christ.missionsinc",
              },
              {
                name: "Batangas Evangelistic Efforts and Enrichment Fellowship (BEEEF) Mission",
                description: "Works towards local mission and church planting.",
                logo: "/images/beeef-logo.jpg",
                link: "https://www.facebook.com/profile.php?id=100064373216552",
              },
            ].map((org) => (
              <div
                key={org.name}
                className="flex items-center bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:-translate-y-2"
              >
                <img
                  src={org.logo}
                  alt={org.name}
                  className="w-24 h-24 object-cover rounded-full mr-6"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    <a
                      href={org.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-yellow-600"
                    >
                      {org.name}
                    </a>
                  </h4>
                  <p className="text-gray-600">{org.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-deepRed text-white text-center py-16 px-6 lg:px-20">
        <h3 className="text-2xl font-semibold mb-4">
          Ready to Make a Difference?
        </h3>
        <p className="text-lg mb-6">
          Your sponsorship will have a lasting impact on the lives of many. Join
          us in spreading God's word and love across the globe.
        </p>
        <a
          href="https://forms.gle/87b4MLVAjo8noFnc9"
          className="bg-brightYellow text-deepPurple text-lg font-semibold py-2 px-4 rounded-lg shadow-lg duration-300 transform transition-transform hover:-translate-y-2 hover:bg-yellow-600"
        >
          Become a Sponsor Today!
        </a>
      </section>

      {/* Sponsorship Levels */}
      <section className="max-w-7xl mx-auto mb-12 py-16 px-6 lg:px-20">
        <h3 className="text-3xl font-semibold text-gray-900 mb-10 text-center">
          Choose Your Sponsorship Level
        </h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              level: "Gold Sponsor",
              amount: "PHP 10,000+",
              benefits: [
                "Prominent logo placement on all conference materials",
                "Special mention during all conference sessions",
                "Recognition on our social media and website",
              ],
            },
            {
              level: "Silver Sponsor",
              amount: "PHP 5,000+",
              benefits: [
                "Logo placement on conference materials",
                "Mention during conference sessions",
                "Recognition on our social media and website",
              ],
            },
            {
              level: "Bronze Sponsor",
              amount: "PHP 2,000+",
              benefits: [
                "Mention in the conference program",
                "Recognition on our website",
              ],
            },
            {
              level: "Friend of Missions",
              amount: "PHP 500+",
              benefits: [
                "Name listed in the conference program",
                "Recognition on our website",
              ],
            },
          ].map((tier) => (
            <div
              key={tier.level}
              className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2"
            >
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                {tier.level}
              </h4>
              <p className="text-xl font-bold text-blue-600 mb-6">
                {tier.amount}
              </p>
              <ul className="text-gray-700 space-y-4">
                {tier.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <svg
                      className="w-6 h-6 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-deepPurple py-16 px-6 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-teal-300 mb-6">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BeASponsor;
