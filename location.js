import React, { useState, useEffect } from "react";

const Location = () => {
  const [location, setLocation] = useState(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((res) => {
      setLocation(res.coords);
    });
  };

  // useEffect(() => {
  //   getCurrentLocation();
  // }, []);

  return (
    <div>
      <button onClick={getCurrentLocation}>Update Location</button>
      {location && (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      )}
    </div>
  );
};

export default Location;





// index.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


// app.js
import Location from "./Location";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Location />
    </div>
  );
}
