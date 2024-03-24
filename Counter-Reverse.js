import React, { useState, useEffect } from "react";
import "./styles.css";

function App() {
  const [countdown, setCountdown] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleStartButtonClick = () => {
    setIsRunning(true);
  };

  useEffect(() => {
    if (countdown === 0) {
      alert("Countdown reached 0!");
      setIsRunning(false);
    }
  }, [countdown]);

  return (
    <div>
      <h1>Countdown: {countdown}</h1>
      <button onClick={handleStartButtonClick} disabled={isRunning}>
        Start
      </button>
    </div>
  );
}

export default App;
