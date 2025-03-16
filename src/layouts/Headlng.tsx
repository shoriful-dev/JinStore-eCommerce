import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Heading: React.FC = () => {
  const targetDate: Date = new Date();
  targetDate.setDate(targetDate.getDate() + 47);

  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-purple py-2 hidden lg:block">
      <section className="max-w-[1000px] mx-auto flex items-center justify-between">
        <div>
          <h3 className="text-white font-Inter font-semibold text-xs">
            FREE delivery & 40% Discount for next 3 orders! Place your 1st order
            in.
          </h3>
        </div>
        <div>
          <h3 className="text-xs text-white font-Inter font-medium">
            Until the end of the sale:{' '}
            <span className="text-white font-bold px-2 text-lg">
              {timeLeft.days}
            </span>{' '}
            days
            <span className="text-white font-bold px-2 text-lg">
              {timeLeft.hours}
            </span>{' '}
            hours
            <span className="text-white font-bold px-2 text-lg">
              {timeLeft.minutes}
            </span>{' '}
            minutes
            <span className="text-white font-bold px-2 text-lg">
              {timeLeft.seconds}
            </span>{' '}
            sec
          </h3>
        </div>
      </section>
    </div>
  );
};

export default Heading;
