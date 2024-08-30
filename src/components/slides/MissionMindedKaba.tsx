import React from "react";
import CalacaLogo from "/images/churchlogo.svg";
import CloudBackground from "/images/cloud-background.svg";
import BackgroundImage from "/images/background-image.jpg";

const MissionMindedKaba: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white py-16 px-6 lg:px-20"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>

      {/* Cloud Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-lighten"
        style={{ backgroundImage: `url(${CloudBackground})` }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Church Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={CalacaLogo}
            alt="Calaca Baptist Church Logo"
            className="w-24 h-24 md:w-32 md:h-32"
          />
        </div>

        {/* Registration Fee Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 mb-6 font-cinzel drop-shadow-lg">
          Mission-Minded Ka ba?
        </h2>

        {/* Fee Details */}
        <p className="text-2xl md:text-3xl lg:text-4xl font-light mb-4 font-cinzel drop-shadow-md">
          Tara na at pumunta sa ating Missions Conference para sa mga
          mission-minded Pastors and Christians
        </p>

        <p className="text-sm md:text-xl lg:text-2xl font-light mb-4">
          Anu pa ang hinihintay mo? Mag register kana!
        </p>

        <ul className="text-sm md:text-xl lg:text-2xl font-light list-disc list-inside mb-8">
          <li>
            Kung ikaw ay isang Pastor, halina at dalhin ang iyong mga leaders at
            mission-minded members.
          </li>
          <li>
            Kung ikaw naman ay isang christian na member ng isang Christian
            church, halina't yayain mo na ang iyong Pastor at mga kasama sa
            Iglesia.
          </li>
          <li>
            At kung wala ka naman makasamang iba, pwedeng-pwede ka pa din
            pumunta!
          </li>
        </ul>

        {/* Pre-Registration Bonus */}
        <p className="text-lg md:text-xl lg:text-2xl font-light mb-8 font-cinzel drop-shadow-md">
          Magregister kana bago ang September 22, para makakuha ka pa ng
          <br />
          <span className="font-bold">Free Conference T-Shirt</span>
        </p>

        {/* Note about the Proceeds */}
        <p className="text-sm md:text-xl font-light italic mb-8 drop-shadow-md">
          *All proceeds will support the Calaca Baptist Church Missions Fund
          Drive for 2024.
        </p>

        {/* Call to Action Button */}
        <div className="mb-8 font-cinzel">
          <a
            href="https://forms.gle/KTdSRKg4Sqyq6mgj8"
            className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 md:py-4 md:px-8 rounded-full shadow-md transition duration-300 ease-in-out text-lg md:text-xl transform hover:-translate-y-2"
          >
            <i className="fas fa-hand-point-right mr-2"></i> Pindutin mo na ako
            para magregister!
          </a>
        </div>

        {/* Closing Text */}
        <p className="text-sm md:text-xl font-light mb-4 font-cinzel">
          Open to all Christian Churches in the Province of Batangas and nearby
          Areas
        </p>

        {/* Contact Information */}
        <div className="mt-8">
          <p className="text md:text-xl font-light mb-2">
            For more information, please contact us at:
          </p>
          <p className="text md:text-xl font-light mb-2">
            <a
              href="mailto:admin@cbc.org.ph"
              className="text-yellow-400 hover:underline"
            >
              admin@cbc.org.ph
            </a>
          </p>
          <p className="text md:text-xl font-light mb-2">
            Phone:{" "}
            <a
              href="tel:+639959316230"
              className="text-yellow-400 hover:underline"
            >
              0995-931-6230
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionMindedKaba;
