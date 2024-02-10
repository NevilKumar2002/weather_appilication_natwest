import React, { useState } from 'react';
import WeatherApp from "./weatherApp";  // Import your WeatherApp component
import SummaryGraph from "./statewiseSummary/SummaryGraph";  // Import your SummaryGraph component

const App = () => {
  const [showWeatherApp, setShowWeatherApp] = useState(false);

  const handleButtonClick = () => {
    setShowWeatherApp(!showWeatherApp);
  };

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={handleButtonClick}>
        Weather App
      </button>
 
      <WeatherApp />
      <SummaryGraph />
    </div>
  );
};

const containerStyle = {
  textAlign: 'center',
  padding: '20px',
};

const buttonStyle = {
  padding: '10px',
  fontSize: '16px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default App;


