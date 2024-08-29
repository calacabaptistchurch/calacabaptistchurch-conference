import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        // Event has passed
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [targetDate]);

  /*   useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Show CTA button when user scrolls down 100 pixels
      if (scrollPosition > 100) {
        setShowCTA(true);
      } else {
        setShowCTA(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []); */

  return (
    <div className="sticky top-0 z-50 bg-yellow-500 text-black py-2 px-4 shadow-lg">
      <div className="flex justify-center space-x-4 text-xl md:text-2xl font-semibold">
        <div className="flex flex-col items-center">
          <p>{timeLeft.days}</p>
          <p className="text-sm">Days</p>
        </div>
        <div className="flex flex-col items-center">
          <p>{timeLeft.hours}</p>
          <p className="text-sm">Hours</p>
        </div>
        <div className="flex flex-col items-center">
          <p>{timeLeft.minutes}</p>
          <p className="text-sm">Minutes</p>
        </div>
        <div className="flex flex-col items-center">
          <p>{timeLeft.seconds}</p>
          <p className="text-sm">Seconds</p>
        </div>
      </div>

      {/* CTA Button that appears on scroll */}
      {/*       {showCTA && (
        <div className="fixed bottom-4 right-4">
          <a
            href="https://forms.gle/KTdSRKg4Sqyq6mgj8"
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out hover:-translate-y-2"
          >
            Register Now
          </a>
        </div>
      )} */}
    </div>
  );
};

export default CountdownTimer;
