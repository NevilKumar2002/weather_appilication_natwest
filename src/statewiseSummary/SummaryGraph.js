// App.js
import React, { useState } from 'react';
import StateWiseTreemap from './stateSummary';
import ChartDisplay from './ChartDisplay';


const SummaryGraph= () => {
  // Sample state-wise data (replace it with your actual data)
  const stateData = [
    { name: 'Andhra Pradesh', temp: 30, population: 1000000 },
    { name: 'Assam', temp: 25, population: 1500000 },
    { name: 'Karnataka', temp: 25, population: 1500000 },
    { name: 'Punjab', temp: 20, population: 1500000 },
    { name: 'Tamil Nadu', temp: 25, population: 1500000 },
    { name: 'Kerala', temp: 25, population: 1500000 },
    { name: 'Goa', temp: 25, population: 1500000 },
    { name: 'Maharastra', temp: 30, population: 1500000 },
    { name: 'Rajasthan', temp: 30, population: 1500000 },
    { name: 'Madhya Pradesh', temp: 25, population: 1500000 },
    { name: 'West Bengal', temp: 25, population: 1500000 },
    { name: 'New Delhi', temp: 30, population: 1500000 },
    // Add more state data as needed
  ];

  const [selectedState, setSelectedState] = useState(null);

  const handleStateClick = (stateName) => {
    setSelectedState(stateName);
  };

  return (
    <div>
      <nav>
        {/* Your navigation bar */}
      </nav>
      <header>
        {/* Your header bar */}
      </header>
      <h1 style={{color:'green'}}>State-wise Summary</h1>
      <StateWiseTreemap data={stateData} onStateClick={handleStateClick} />
      {selectedState && <ChartDisplay stateName={selectedState} />}
     
    </div>
  );
};

export default  SummaryGraph;
