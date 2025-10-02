'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-10-25T15:00:00-05:00'); // 3:00 PM UTC-5 Bogotá

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center space-x-6 my-8">
      <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-amber-100">
        <div className="text-3xl font-bold text-amber-900">{timeLeft.days}</div>
        <div className="text-sm text-amber-700 uppercase tracking-wide">Días</div>
      </div>
      <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-amber-100">
        <div className="text-3xl font-bold text-amber-900">{timeLeft.hours}</div>
        <div className="text-sm text-amber-700 uppercase tracking-wide">Horas</div>
      </div>
      <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-amber-100">
        <div className="text-3xl font-bold text-amber-900">{timeLeft.minutes}</div>
        <div className="text-sm text-amber-700 uppercase tracking-wide">Min</div>
      </div>
      <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-amber-100">
        <div className="text-3xl font-bold text-amber-900">{timeLeft.seconds}</div>
        <div className="text-sm text-amber-700 uppercase tracking-wide">Seg</div>
      </div>
    </div>
  );
}