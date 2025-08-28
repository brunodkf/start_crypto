"use client";
import React, { useEffect, useState } from "react";

export default function Countdown() {


  const [timeLeft, setTimeLeft] = useState({
    hours: "12",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
      // Ele pega a data atual do user e acrescenta o tempo que quisermos
  const targetDate = new Date().getTime() + 12 * 60 * 60 * 1000;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-4 mt-4">
      <div className="bg-white/20 px-3 py-2 rounded-lg text-center">
        <div className="text-2xl font-bold">{timeLeft.hours}</div>
        <div className="text-xs">HORAS</div>
      </div>
      <div className="bg-white/20 px-3 py-2 rounded-lg text-center">
        <div className="text-2xl font-bold">{timeLeft.minutes}</div>
        <div className="text-xs">MIN</div>
      </div>
      <div className="bg-white/20 px-3 py-2 rounded-lg text-center">
        <div className="text-2xl font-bold">{timeLeft.seconds}</div>
        <div className="text-xs">SEG</div>
      </div>
    </div>
  );
}
