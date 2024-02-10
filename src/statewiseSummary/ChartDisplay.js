// ChartDisplay.js
import React from 'react';

const generateRandomValue = () => Math.floor(Math.random() * 1000) + 1; // Adjust range as needed

const ChartDisplay = ({ stateName }) => {
  // Dummy data for the clicked state because I am unable to get original data from government sites
  const stateData = {
    Name: stateName,
    Population: Math.floor(Math.random() * 10000000) + 1000000, // Random population between 1M and 10M
    GDP: Math.floor(Math.random() * 100000000000) + 10000000000, // Random GDP between 10B and 100B
    SexRatio: Math.floor(Math.random() * 200) + 800, // Random sex ratio between 800 and 1000
    LiteracyRate: generateRandomValue(),
    LifeExpectancy: generateRandomValue(),
  };

  return (
    <div style={containerStyle1} >
      <h2>{stateName} Information</h2>
      <div style={containerStyle}>
      <table border="1">
        <thead>
          <tr>
            <th>Data Type</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(stateData).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

const containerStyle = {
  color: 'white',
  textAlign: 'center',
  marginLeft: '35vw',

  padding: '20px',
};
const containerStyle1 = {
    color: 'white',
    // textAlign: 'center',
    // marginLeft: '35vw',
    display:'flex',
    flexDirection: 'column', 
    justifyContent: 'center',
    alignitems: 'center',
    marginTop: '50px',  // Adjust the top margin as needed
    padding: '20px',
  };
  
export default ChartDisplay;



