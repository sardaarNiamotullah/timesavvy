"use client";
import { useState, useEffect } from "react";

export default function Timer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState(1500);

  const [start, setStart] = useState(false);

  function showTime() {
    setMinutes(Math.floor(timer / 60));
    setSeconds(Math.floor(timer % 60));
  }

  useEffect(() => {
    if (start === true) {
      const interval = setInterval(() => {
        showTime();
        setTimer(timer - 1);
      }, 1000);
  
      return () => clearInterval(interval);
    }
  }, [timer, start]);

  return (
    <>
      <h1>
        min: {minutes}, sec: {seconds}
      </h1>
      <button onClick={() => {setStart(true)}}>Start</button>
      <button onClick={() => {setStart(false)}}>Pause</button>
    </>
  );
}
