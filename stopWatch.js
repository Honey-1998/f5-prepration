import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(null);

  const startStopwatch = () => {
    if (!isRunning) {
      setIsRunning(true);
      setTimer(
        setInterval(() => {
          setTime((prevTime) => prevTime + 1);
        }, 1000)
      );
    }
  };

  const stopStopwatch = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(timer);
      setTimer(null);
    } else {
      startStopwatch();
    }
  };

  const resetStopwatch = () => {
    setTime(0);
    stopStopwatch();
  };

  useEffect(() => {
    return () => {
      // Cleanup function to clear the timer when the component unmounts
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>{time}</p>
      <button onClick={startStopwatch}>Start</button>
      <button onClick={stopStopwatch}>{isRunning ? "Pause" : "Resume"}</button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
}
