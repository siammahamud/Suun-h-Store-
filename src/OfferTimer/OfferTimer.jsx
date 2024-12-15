/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import moment from "moment";
import TimeLeft from "./TimeLeft";

const OfferTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  // Function to calculate remaining time
  function calculateTimeLeft(targetDate) {
    const now = moment();
    const target = moment(targetDate);
    const duration = moment.duration(target.diff(now));

    if (duration.asMilliseconds() <= 0) return null;

    return {
      days: Math.floor(duration.asDays()),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  }

  useEffect(() => {
    // Update the countdown every second
    const timer = setInterval(() => {
      const updatedTime = calculateTimeLeft(targetDate);
      setTimeLeft(updatedTime);
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <TimeLeft />;
  }

  // Format the time parts with leading zeros
  const days = String(timeLeft.days).padStart(2, "0");
  const hours = String(timeLeft.hours).padStart(2, "0");
  const minutes = String(timeLeft.minutes).padStart(2, "0");
  const seconds = String(timeLeft.seconds).padStart(2, "0");

  return (
    <div className="container bg-blue-500 text-white shadow-md text-center mb-10 mt-8 rounded">
      <h2 className="text-3xl font-bold mb-4">Upcoming Offer</h2>
      <div className="flex justify-center space-x-2 text-lg">
        <div>
          <span className="block text-4xl font-bold border rounded px-3">
            {days}
          </span>
          <span>Days</span>
        </div>
        <div className="text-4xl">:</div>
        <div>
          <span className="block text-4xl font-bold border rounded px-3">
            {hours}
          </span>
          <span>Hours</span>
        </div>
        <div className="text-4xl">:</div>
        <div>
          <span className="block text-4xl font-bold border rounded px-3">
            {minutes}
          </span>
          <span>Minutes</span>
        </div>
        <div className="text-4xl">:</div>
        <div>
          <span className="block text-4xl font-bold border rounded">
            {seconds}
          </span>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default OfferTimer;
