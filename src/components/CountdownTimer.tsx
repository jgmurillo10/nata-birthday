"use client";

import { useState, useEffect, useMemo } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function two(n: number) {
  return ("0" + n).slice(-2);
}

function Piece({ label, value }: { label: string; value: number }) {
  const initial = two(value);
  const [display, setDisplay] = useState<string>(initial);
  const [prev, setPrev] = useState<string>(initial);
  const [next, setNext] = useState<string>(initial);
  const [flip, setFlip] = useState<boolean>(false);

  useEffect(() => {
    const n = two(value);
    if (n !== display) {
      setPrev(display);
      setNext(n);
      setFlip(true);
      const t = setTimeout(() => {
        setDisplay(n);
        setFlip(false);
      }, 650);
      return () => clearTimeout(t);
    }
  }, [value, display]);

  return (
    <span className={`flip-clock__piece ${flip ? "flip" : ""}`}>
      <b className="flip-clock__card card">
        <b className="card__top">{display}</b>
        <b className="card__bottom" data-value={display} />
        <b className="card__back" data-value={prev}>
          <b className="card__bottom" data-value={next} />
        </b>
      </b>
      <span className="flip-clock__slot">{label}</span>
    </span>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = useMemo(() => new Date("2025-10-25T15:00:00-05:00"), []);

  useEffect(() => {
    const calc = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const day = 24 * 60 * 60 * 1000;
      const hour = 60 * 60 * 1000;
      const minute = 60 * 1000;
      const days = Math.floor(diff / day);
      const hours = Math.floor((diff % day) / hour);
      const minutes = Math.floor((diff % hour) / minute);
      const seconds = Math.floor((diff % minute) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return (
    <div className="flip-clock">
      <Piece label="Días" value={timeLeft.days} />
      <Piece label="Horas" value={timeLeft.hours} />
      <Piece label="Minutos" value={timeLeft.minutes} />
      <Piece label="Segundos" value={timeLeft.seconds} />
    </div>
  );
}
