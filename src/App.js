import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0); // State to keep track of time in milliseconds
  const [running, setRunning] = useState(false); // State to check if the stopwatch is running

  useEffect(() => {
    let interval;
    if (running) {
      // If the stopwatch is running, set an interval to update time every 10ms
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      // If the stopwatch is not running, clear the interval
      clearInterval(interval);
    }
    // Cleanup interval on component unmount or when running changes
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="container text-center mt-5">
      {/* Container with Bootstrap classes for centering and margin */}
      <h1 className="mb-4">Stopwatch</h1>
      {/* Stopwatch display */}
      <div className="display-4">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        {/* Minutes */}
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        {/* Seconds */}
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        {/* Centiseconds */}
      </div>
      {/* Buttons to control the stopwatch */}
      <div className="mt-4">
        {running ? (
          // If running, show the "Stop" button
          <button className="btn btn-danger mr-2" onClick={() => { setRunning(false) }}>Stop</button>
        ) : (
          // If not running, show the "Start" button
          <button className="btn btn-success mr-2" onClick={() => { setRunning(true) }}>Start</button>
        )}
        {/* Reset button */}
        <button className="btn btn-secondary" onClick={() => { setTime(0) }}>Reset</button>
      </div>
    </div>
  );
}

export default App;
